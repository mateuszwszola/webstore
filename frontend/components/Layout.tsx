import {ReactNode} from "react";
import NavItem from "./NavItem";
import Nav from "./Nav";
import Link from 'next/link';

type LayoutProps = {
    children: ReactNode | ReactNode[]
}

function Layout({children}: LayoutProps) {
    return (
        <div className="bg-gray-50 min-h-screen h-screen flex flex-col justify-center items-center text-gray-900">
            <Nav>
                <NavItem>
                    <Link href="/">
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/women">
                        Women
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/">
                        Men
                    </Link>
                </NavItem>
                <div className="flex-1"/>
                <div className="flex divide-x">
                    <NavItem className="pr-4">
                        <Link href="/signin">
                            Sign in
                        </Link>
                    </NavItem>
                    <NavItem className="pl-4">
                        <Link href="/signup">
                            Sign up
                        </Link>
                    </NavItem>
                </div>
            </Nav>
            {children}
        </div>
    )
}

export default Layout;