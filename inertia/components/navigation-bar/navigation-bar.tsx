import { CaretDownIcon } from "@phosphor-icons/react"
import { HTMLAttributes } from "react"
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

type ItemProps = React.PropsWithChildren
const Item = ({ children }: ItemProps) => (
    <li className={style.Item}>{children}</li>
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

type NavbarMenuItemProps = Menu.ItemProps
const MenuItem = (props: NavbarMenuItemProps) => <Menu.Item {...props} />

export const Navbar = { Root, Item, Menu: NavbarMenu, MenuItem }
