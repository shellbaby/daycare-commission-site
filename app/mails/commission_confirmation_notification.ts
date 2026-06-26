import Commission from "#models/commission"
import { BaseMail } from "@adonisjs/mail"
import React from "react"
import { render } from "react-email"
import CommissionConfirmation from "../../emails/commission-confirmation.tsx"

export default class CommissionConfirmationNotification extends BaseMail {
    subject = "Commission Confirmation"

    /**
     * The "prepare" method is called automatically when
     * the email is sent or queued.
     */

    constructor(private commission: Commission) {
        super()
    }

    async prepare() {
        const toHTML = await render(
            React.createElement(CommissionConfirmation, {
                commissionNumber: this.commission.commissionNumber,
                clientName: this.commission.name,
            })
        )
        this.message.to(this.commission.email).html(toHTML)
    }
}
