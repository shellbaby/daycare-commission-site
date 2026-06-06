// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from "@adonisjs/core/http"

export default class StaticsController {
    async home({ inertia }: HttpContext) {
        return inertia.render("home", {})
    }

    async prices({ inertia }: HttpContext) {
        return inertia.render("prices", {})
    }
}
