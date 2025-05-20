import React, { useState } from "react";
import { SidebarContainer, SidebarItem, SidebarList, StyledNavLink, ToggleButton } from "./styles";

export function Sidebar()
{
    const [ isCollapsed, setIsCollapsed ] = useState( false );

    return (

        <SidebarContainer isCollapsed = { isCollapsed } >

            <ToggleButton onClick = { () => setIsCollapsed( ! isCollapsed ) } > { isCollapsed ? "→" : "←" } </ToggleButton>

            <SidebarList>

                <SidebarItem>

                    <StyledNavLink to = "/home" > Modulos </ StyledNavLink>

                </SidebarItem>

                <SidebarItem>

                    <StyledNavLink to = "/" > Usuários </ StyledNavLink>

                </SidebarItem>

            </SidebarList>

        </SidebarContainer>

    );
}