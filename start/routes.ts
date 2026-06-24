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

// router.on('/').renderInertia('home', {}).as('home')

// router
//   .group(() => {
//     router.get('signup', [controllers.NewAccount, 'create'])
//     router.post('signup', [controllers.NewAccount, 'store'])

//     router.get('login', [controllers.Session, 'create'])
//     router.post('login', [controllers.Session, 'store'])
//   })
//   .use(middleware.guest())

// router
//   .group(() => {
//     router.post('logout', [controllers.Session, 'destroy'])
//   })
//   .use(middleware.auth())

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

router
    .group(() => {
        router
            .group(() => {
                router.post("", [controllers.Commissions, "store"]).as("store")
            })
            .as("commission")
            .prefix("commissions")
    })
    .prefix("api/v1")
    .as("api")
