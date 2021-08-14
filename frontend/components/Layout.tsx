import {ReactNode} from "react";
import NavItem from "./nav/NavItem";
import Nav from "./Nav";
import NavLink from "./nav/NavLink";

type LayoutProps = {
    children: ReactNode | ReactNode[]
}

function Layout({children}: LayoutProps) {
    return (
        <div className="bg-gray-50 min-h-screen h-screen flex flex-col text-gray-900">
            <Nav>
                <NavItem>
                    <NavLink href="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/women">
                        Women
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/men">
                        Men
                    </NavLink>
                </NavItem>
                <div className="flex-1"/>
                <div className="flex divide-x">
                    <NavItem className="pr-4">
                        <NavLink href="/signin">
                            Sign in
                        </NavLink>
                    </NavItem>
                    <NavItem className="pl-4">
                        <NavLink href="/signup">
                            Sign up
                        </NavLink>
                    </NavItem>
                </div>
            </Nav>
            {children}
        </div>
    )
}

export default Layout;