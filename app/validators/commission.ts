import vine from "@vinejs/vine"
import { SocialContact } from "../../types/commission.ts"

export const commssionValidator = vine.create({
    email: vine.string().email().normalizeEmail().trim().maxLength(255),
    name: vine
        .string()
        .regex(/^[a-zA-Z0-9\s]{1,255}$/)
        .trim()
        .maxLength(255),
    contacts: vine
        .array(
            vine
                .object({
                    type: vine.string().in([...SocialContact]),
                    handle: vine.string().trim().maxLength(255).nullable(),
                })
                .nullable()
        )
        .optional(),
    idea: vine.string().trim().maxLength(255),
    notes: vine.string().trim().maxLength(255).nullable(),
    ref_sheets: vine
        .array(
            vine.file({
                size: "5mb",
                extnames: ["png", "jpg", "jpeg", "webp", "avif"],
            })
        )
        .notEmpty()
        .maxLength(5),
})
