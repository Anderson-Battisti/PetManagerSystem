import React, { useState } from "react";
import { SidebarContainer, SidebarItem, SidebarList, StyledNavLink, ToggleButton } from "./styles";
import arrowRightIcon from "../../assets/icons/arrow-narrow-right-svgrepo-com.svg";
import arrowLeftIcon  from "../../assets/icons/arrow-narrow-left-svgrepo-com.svg";

export function Sidebar()
{
    const [ isCollapsed, setIsCollapsed ] = useState( false );

    return (

        <SidebarContainer $isCollapsed = { isCollapsed } >

            <ToggleButton src     = { isCollapsed ? arrowRightIcon : arrowLeftIcon } 
                          onClick = { () => setIsCollapsed( ! isCollapsed ) }  
                          style   = { { width: '34px', height: '24px' } } />

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