import { CommissionMetaSchema } from "#database/schema"
import { hasOne } from "@adonisjs/lucid/orm"
import type { HasOne } from "@adonisjs/lucid/types/relations"
import Commission from "./commission.ts"

export default class CommissionMeta extends CommissionMetaSchema {
    @hasOne(() => Commission)
    declare commission: HasOne<typeof Commission>
}
