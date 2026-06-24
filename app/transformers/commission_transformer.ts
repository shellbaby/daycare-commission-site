import Commission from "#models/commission"
import { BaseTransformer } from "@adonisjs/core/transformers"

export default class CommissionTransformer extends BaseTransformer<Commission> {
    toObject() {
        return this.pick(this.resource, [
            "commissionNumber",
            "refSheetUrls",
            "createdAt",
            "email",
            "name",
            "contacts",
            "idea",
            "notes",
        ])
    }
}
