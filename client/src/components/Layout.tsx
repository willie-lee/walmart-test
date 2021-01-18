import React from "react"
import { WithChildren } from "../shared/interface/helper"

type LayoutProps = WithChildren<{
}>

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="ph7">
            {children}
        </div>
    )
}

export default Layout