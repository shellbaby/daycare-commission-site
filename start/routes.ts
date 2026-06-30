/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { controllers } from "#generated/controllers"
import router from "@adonisjs/core/services/router"
import { commissionThrottle, throttle } from "./limiter.ts"

router
    .group(() => {
        router.on("/").renderInertia("home", {}).as("home")
        router.on("/commission/prices").renderInertia("prices", {}).as("prices")
        router.on("/commission/form").renderInertia("form", {}).as("form")
        router.get("/commission/confirmation", [
            controllers.Commissions,
            "confirm",
        ])
        router.on("/commission/tos").renderInertia("tos", {}).as("tos")
        router.on("/gallery").renderInertia("gallery", {}).as("gallery")
        router.on("/contact").renderInertia("contact", {}).as("contact")

        router.get("/test", [controllers.Commissions, "test"]).as("test")
    })
    .as("static")
    .use(throttle)

router
    .group(() => {
        router
            .group(() => {
                router.post("", [controllers.Commissions, "store"]).as("store")
            })
            .as("commission")
            .prefix("commissions")
            .use(commissionThrottle)
    })
    .prefix("api/v1")
    .as("api")
