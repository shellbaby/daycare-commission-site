import { CaretDownIcon } from "@phosphor-icons/react"
import { AnchorHTMLAttributes, HTMLAttributes } from "react"
import { Menu } from "../menu/menu"
import style from "./styles.module.css"

type RootProps = HTMLAttributes<HTMLElement>
const Root = (props: RootProps) => {
    const { children, ...others } = props

    return (
        <nav {...others} className={style.Root}>
            <ul>{children}</ul>
        </nav>
    )
}

type ItemProps = AnchorHTMLAttributes<HTMLAnchorElement>
const Item = (props: ItemProps) => (
    <li className={style.Item}>
        <a {...props} />
    </li>
)

type ItemListProps = ItemProps & { label: string }
const NavbarMenu = (props: ItemListProps) => (
    <Menu.Root>
        <li className={style.Item}>
            <Menu.Trigger>
                {props.label}
                <Menu.Indicator>
                    <CaretDownIcon />
                </Menu.Indicator>
            </Menu.Trigger>
        </li>
        <Menu.Positioner>
            <Menu.Content>{props.children}</Menu.Content>
        </Menu.Positioner>
    </Menu.Root>
)

type NavbarMenuItemProps = Menu.ItemProps & {
    href?: string
    target?: string
}
const MenuItem = ({
    href,
    target,
    children,
    ...props
}: NavbarMenuItemProps) => (
    <Menu.Item {...props} asChild className={style.Item}>
        <a href={href} target={target}>
            {children}
        </a>
    </Menu.Item>
)

export const Navbar = { Root, Item, Menu: NavbarMenu, MenuItem }
