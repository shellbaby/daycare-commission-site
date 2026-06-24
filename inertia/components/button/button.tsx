import { ark } from "@ark-ui/react/factory"
import { ButtonHTMLAttributes, CSSProperties } from "react"
import styles from "./styles.module.css"

const ButtonVariant = ["fill", "outline", "ghost"] as const

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
    variant?: (typeof ButtonVariant)[number]
    isIcon?: boolean
}
const Root = ({
    variant = "fill",
    isIcon,
    color,
    className,
    ...props
}: ButtonProps) => (
    <ark.button
        {...props}
        className={`${styles.Root} ${className ?? ""}`}
        data-variant={variant}
        data-is-icon={isIcon ? "" : null}
        style={{ "--color": color } as CSSProperties}
    />
)

export const Button = { Root }
