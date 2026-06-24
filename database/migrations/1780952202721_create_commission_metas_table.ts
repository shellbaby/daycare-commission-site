import { BaseSchema } from "@adonisjs/lucid/schema"
import { CommissionStatus, PaymentStatus } from "../../types/commission.ts"

export default class extends BaseSchema {
    protected tableName = "commission_metas"

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id").primary().unique()

            // Backend //
            table
                .uuid("commission_uuid")
                .references("commission_uuid")
                .inTable("commissions")
                .onDelete("CASCADE")
                .notNullable()
                .index()
            table
                .enum("status", CommissionStatus, {
                    useNative: true,
                    enumName: "commission_status",
                    existingType: false,
                })
                .defaultTo("pending")
                .notNullable()
            table
                .enum("payment_status", PaymentStatus, {
                    useNative: true,
                    enumName: "payment_status",
                    existingType: false,
                })
                .defaultTo("pending")
                .notNullable()
            table.string("type").notNullable()
            table.timestamp("created_at")
            table.timestamp("updated_at")
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
