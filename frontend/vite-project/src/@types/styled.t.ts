import { defaultTheme } from "../styles/theme/DefaultTheme";

type ThemeType = typeof defaultTheme;

declare module 'styled-components' 
{
    export interface DefaultTheme extends ThemeType {}
}