import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { LayoutContainer } from "./styles";

export function DefaultLayout()
{
    return (

        <>
            <div>
                <Sidebar />
                <LayoutContainer>
                    <Outlet />
                </LayoutContainer>
            </div>
        </>

    );
}