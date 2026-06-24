export const SocialContact = ["telegram", "discord"] as const
export type SocialContact = (typeof SocialContact)[number]

export const CommissionStatus = [
    "pending",
    "sketching",
    "coloring",
    "finished",
] as const
export type CommissionStatus = (typeof CommissionStatus)[number]

export const PaymentStatus = ["pending", "paid"] as const
export type PaymentStatus = (typeof PaymentStatus)[number]
