import { Data } from "@generated/data"
import { IconContext } from "@phosphor-icons/react"
import { ReactElement } from "react"
import { Menu, Navbar } from "~/components"

export default function Layout({
    children,
}: {
    children: ReactElement<Data.SharedProps>
}) {
    return (
        <div className="flex h-full flex-col">
            <header className="mb-16">
                <Navbar.Root>
                    <Navbar.Item href="/">Home</Navbar.Item>
                    <Navbar.Menu label="Commission">
                        <Navbar.MenuItem value="prices">Prices</Navbar.MenuItem>
                        <Navbar.MenuItem value="queue">Queue</Navbar.MenuItem>
                        <Menu.Separator />
                        <Navbar.MenuItem value="form">
                            Commission Form
                        </Navbar.MenuItem>
                    </Navbar.Menu>
                    <Navbar.Item href="/">Gallery</Navbar.Item>
                    <Navbar.Item href="/">Contact</Navbar.Item>
                </Navbar.Root>
            </header>
            <IconContext value={{ size: 16 }}>
                <div className="mx-auto flex-1 sm:w-6xl">{children}</div>
            </IconContext>
            <div className="py-16 text-center">
                <small>
                    Copyright &copy; 2026 shellbaby. All rights reserved.
                </small>
            </div>
        </div>
    )
}
