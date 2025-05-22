import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const SidebarContainer = styled.aside< { $isCollapsed: boolean } >`
    width: ${ props => props.$isCollapsed ? "30px" : "200px" };
    height: 100vh;
    background-color: ${ ( props ) => props.theme[ "default-green" ] };
    padding: 20px;
    position: fixed;
    top:  0;
    left: 0;
    overflow-y: auto;
    transition: width 0.3s ease;
`;

export const ToggleButton = styled.img`

`;

export const SidebarList = styled.ul``;

export const SidebarItem = styled.li``;

export const StyledNavLink = styled( NavLink )`

`;