import * as React from 'react';
import type {ReactNode} from "react";
import NavItem from "./nav/NavItem";
import Nav from "./Nav";
import NavLink from "./nav/NavLink";
import {useUser} from "./User";
import SignOut from "./SignOut";

type LayoutProps = {
    children: ReactNode | ReactNode[]
}

function Layout({children}: LayoutProps) {
    const {isAuthenticated, loading} = useUser();

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col text-gray-900">
            <Nav>
                <NavItem>
                    <NavLink href="/">
                        Home
                    </NavLink>
                </NavItem>
                <div className="flex-1"/>
                {loading ? (
                    <NavItem>Loading...</NavItem>
                ) : (
                    <div className="flex divide-x">
                        {isAuthenticated ? (
                            <>
                                <NavItem className="pr-4">
                                    <NavLink href="/account" >
                                        Account
                                    </NavLink>
                                </NavItem>
                                <NavItem className="pl-4">
                                    <SignOut>Sign out</SignOut>
                                </NavItem>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </div>
                )}
            </Nav>
            {children}
        </div>
    )
}

export default Layout;