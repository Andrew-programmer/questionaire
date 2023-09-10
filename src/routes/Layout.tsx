import {Outlet} from "react-router-dom";
import React from "react";
import "./Layout.css"


type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = ({}) => {
    return (
        <section className="Layout">
            <Outlet/>
        </section>
    );
};
