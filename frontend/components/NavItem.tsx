import {ReactNode} from "react";

type NavProps = {
    children: ReactNode | ReactNode[]
    className?: string
}


function NavItem({children, className = ''}: NavProps) {
    return (
        <li className={`hover:text-gray-700 font-medium tracking-wider${className ? ' ' + className : ''}`}>
            {children}
        </li>
    )
}

export default NavItem;