import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/DefaultTheme";
import React from "react";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router()
{
    return (
        <ThemeProvider theme={ defaultTheme }>

            <Routes>

                <Route path="/" element={ <LoginScreen/> } />

                <Route element = { <DefaultLayout /> } >

                    <Route path="/home" />
                    
                </Route>
                
            </Routes>

        </ThemeProvider>
    )
}