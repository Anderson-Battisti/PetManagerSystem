import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/DefaultTheme";

export function Router()
{
    return (
        <ThemeProvider theme={ defaultTheme }>
            <Routes>
                <Route path="/" element={ <LoginScreen/> } />
                <Route path="/home" />
            </Routes>
        </ThemeProvider>
    )
}