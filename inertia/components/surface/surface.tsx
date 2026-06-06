import { ark } from "@ark-ui/react/factory"
import { HTMLAttributes } from "react"
import style from "./styles.module.css"

export const Surface = (
    props: { asChild?: boolean } & HTMLAttributes<HTMLDivElement>
) => <ark.div {...props} className={`${style.Root} ${props.className ?? ""}`} />
