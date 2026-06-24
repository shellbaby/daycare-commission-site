import { CommissionSchema } from "#database/schema"
import { belongsTo } from "@adonisjs/lucid/orm"
import type { BelongsTo } from "@adonisjs/lucid/types/relations"
import CommissionMeta from "./commission_meta.ts"

export default class Commission extends CommissionSchema {
    @belongsTo(() => CommissionMeta)
    declare commissionMeta: BelongsTo<typeof CommissionMeta>
}
