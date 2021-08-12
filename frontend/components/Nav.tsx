import {ReactNode} from "react";

type NavProps = {
    children: ReactNode | ReactNode[]
}

function Nav({children}: NavProps) {
    return (
        <nav aria-label="Main" className="w-full bg-white border-b-2 border-gray-200">
            <ul className="w-full flex space-x-4 px-4 py-4">
                {children}
            </ul>
        </nav>
    )
}

export default Nav;