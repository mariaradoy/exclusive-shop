import { ReactNode } from "react";

export const Navbar_item = ({children} : {children: ReactNode}) => (
    // <li className="border-b-transparent hover:border-b-slate-900 transition-all list-none">{children}</li>
    <li className="list-none hover:outline-1 transition-all">{children}</li>
)