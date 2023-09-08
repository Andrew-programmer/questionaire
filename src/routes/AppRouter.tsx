import {Routes, Route} from 'react-router';
import {routes} from "./routes";
import React from "react";
import {Layout} from "./Layout";


type AppRouterProps = {};

export const AppRouter: React.FC<AppRouterProps> = ({}) => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                {
                    routes.map(({path, Component}) => {
                        return <Route key={path} path={path} element={<Component/>}/>
                    })
                }
            </Route>
        </Routes>
    );
}
