import { Link } from "@adonisjs/inertia/react"
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
            <header className="mb-16 shadow-md">
                <Navbar.Root>
                    <Navbar.Item>
                        <Link route="static.home">Home</Link>
                    </Navbar.Item>
                    <Navbar.Menu label="Commission">
                        <Navbar.MenuItem value="prices" asChild>
                            <Link route="static.prices">Prices</Link>
                        </Navbar.MenuItem>
                        <Navbar.MenuItem value="tos" asChild>
                            <Link route="static.tos">Terms of Service</Link>
                        </Navbar.MenuItem>
                        <Navbar.MenuItem value="queue">
                            <Link route="static.home">Queue</Link>
                        </Navbar.MenuItem>
                        <Menu.Separator />
                        <Navbar.MenuItem value="form">
                            <Link route="static.form">Commission Form</Link>
                        </Navbar.MenuItem>
                    </Navbar.Menu>
                    <Navbar.Item>
                        <Link route="static.gallery">Gallery</Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link route="static.contact">Contact</Link>
                    </Navbar.Item>
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
