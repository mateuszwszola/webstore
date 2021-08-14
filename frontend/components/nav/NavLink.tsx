import {ReactNode} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

type NavLinkProps = {
    href: string
    children: ReactNode | ReactNode[]
}

function NavLink({href, children, ...props}: NavLinkProps) {
    const {pathname} = useRouter();
    const isActive = pathname === href;
    return (
        <Link href={href} {...props}>
            <a className={isActive ? 'text-blue-500' : 'text-current'}>
                {children}
            </a>
        </Link>
    )
}

export default NavLink;