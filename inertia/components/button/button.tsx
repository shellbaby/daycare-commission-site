import { ark } from "@ark-ui/react/factory"
import { ButtonHTMLAttributes } from "react"
import styles from "./styles.module.css"

const ButtonVariant = ["fill", "outline", "ghost"] as const

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
    variant?: (typeof ButtonVariant)[number]
}
const Root = ({ variant = "fill", ...props }: ButtonProps) => (
    <ark.button {...props} className={styles.Root} data-variant={variant} />
)

export const Button = { Root }
