import React from "react"
import "./Wrapper.css"


type WrapperProps = {
    children?: React.ReactNode
}

export const Wrapper: React.FC<WrapperProps> = ({children}) => {
    return (
        <article className={"Wrapper"}>
            {children}
        </article>
    );
}

