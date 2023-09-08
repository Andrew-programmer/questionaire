import {Outlet} from "react-router-dom";
import React from "react";

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = ({}) => {
    return (
        <section>
            <Outlet/>
        </section>
    );
};
