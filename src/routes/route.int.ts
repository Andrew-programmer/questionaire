import React, {JSX, ReactComponentElement} from "react";

export interface RouteInt {
    path: string;
    Component: React.FC
}

export type Routes = RouteInt[];
