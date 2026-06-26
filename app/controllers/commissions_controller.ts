import CommissionConfirmationNotification from "#mails/commission_confirmation_notification"
import Commission from "#models/commission"
import CommissionMeta from "#models/commission_meta"
import env from "#start/env"
import CommissionTransformer from "#transformers/commission_transformer"
import { commssionValidator } from "#validators/commission"
import string from "@adonisjs/core/helpers/string"
import type { HttpContext } from "@adonisjs/core/http"
import drive from "@adonisjs/drive/services/main"
import mail from "@adonisjs/mail/services/main"
import { faker } from "@faker-js/faker"

export default class CommissionsController {
    /**
     * Display a list of resource
     */
    async index({}: HttpContext) {}

    /**
     * Display form to create a new record
     */
    async create({}: HttpContext) {}

    /**
     * Handle form submission for the create action
     */
    async store({ request, session, response }: HttpContext) {
        const { ref_sheets, contacts, ...payload } =
            await request.validateUsing(commssionValidator)

        const commissionNumber = faker.string.numeric(8)
        const commissionUuid = string.uuid()

        const fileURLs = []
        const filePaths = []

        const rootPath = `commissions/${commissionUuid}`

        for (const file of ref_sheets) {
            const randomAdj = faker.word.adjective({
                length: { min: 4, max: 8 },
            })
            const randomColor = faker.color.human()
            const randomAnimal = faker.animal.type()
            const randomFileName = string.pascalCase(
                `${randomAdj} ${randomColor} ${randomAnimal}`
            )

            const filePath = `${rootPath}/${randomFileName}.${file.extname}`
            await file.moveToDisk(filePath)
            filePaths.push(filePath)
            const fileURL = await drive.use().getUrl(filePath)
            fileURLs.push(fileURL)
        }

        const commission = await Commission.create({
            ...payload,
            contacts: JSON.stringify(contacts),
            commissionUuid,
            commissionNumber,
            refSheetUrls: JSON.stringify(fileURLs),
            refSheetPaths: JSON.stringify(filePaths),
        })

        await CommissionMeta.create({
            commissionUuid,
            type: "Simple Drawing",
        })

        response.cookie(
            "commission_confirmation",
            {
                commissionUuid,
            },
            {
                maxAge: "2h",
                httpOnly: true,
                secure: env.get("NODE_ENV") === "production",
                sameSite: "lax",
            }
        )

        await mail.sendLater(new CommissionConfirmationNotification(commission))

        session.flash("success", "Commission created!")
        return response.redirect().toRoute("static.commissions.confirm")
    }

    /**
     * Show individual record
     */
    async show({ params }: HttpContext) {}

    /**
     * Edit individual record
     */
    async edit({ params }: HttpContext) {}

    /**
     * Handle form submission for the edit action
     */
    async update({ params, request }: HttpContext) {}

    /**
     * Delete record
     */
    async destroy({ params }: HttpContext) {}

    async confirm({ request, response, inertia }: HttpContext) {
        const confirmationCookie: { commissionUuid: string } = request.cookie(
            "commission_confirmation"
        )

        if (!confirmationCookie) {
            response.clearCookie("commission_confirmation")
            return response.redirect().back()
        }

        const commission = await Commission.query()
            .where("commission_uuid", confirmationCookie.commissionUuid)
            .first()

        if (!commission) {
            return response.redirect().back()
        }

        return inertia.render("success/commission", {
            commission: CommissionTransformer.transform(commission),
        })
    }

    async test({ inertia, response }: HttpContext) {
        const testComm = await Commission.first()

        if (!testComm) {
            return response.redirect().back()
        }

        return inertia.render("success/commission", {
            commission: CommissionTransformer.transform(testComm),
        })
    }
}
