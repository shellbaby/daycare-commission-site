import { BaseSchema } from "@adonisjs/lucid/schema"

export default class extends BaseSchema {
    protected tableName = "commissions"

    async up() {
        this.schema.raw('DROP TYPE IF EXISTS "commission_status"')
        this.schema.raw('DROP TYPE IF EXISTS "payment_status"')

        this.schema.createTable(this.tableName, (table) => {
            table.increments("id").primary().unique()

            // Backend //
            table.uuid("commission_uuid").notNullable().unique()
            table.string("commission_number").notNullable()
            table.jsonb("ref_sheet_urls").notNullable()
            table.jsonb("ref_sheet_paths").notNullable()
            table.timestamp("created_at", { useTz: true }).notNullable()
            table.timestamp("updated_at", { useTz: true }).notNullable()

            // Frontend //
            table.string("email", 255).notNullable()
            table.string("name", 255).notNullable()
            table.jsonb("contacts").nullable()
            table.string("idea").notNullable()
            table.string("notes").nullable()
        })
    }

    async down() {
        this.schema.raw('DROP TYPE IF EXISTS "commission_status"')
        this.schema.raw('DROP TYPE IF EXISTS "payment_status"')
        this.schema.dropTable(this.tableName)
    }
}
