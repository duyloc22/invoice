import { SideNav } from "../components";
import React from "react";

function sidenav() {
    return (
        <SideNav>
            <SideNav.Square>
                <SideNav.Rect />
                <SideNav.Circle />
                <SideNav.Triangle />
            </SideNav.Square>
            <SideNav.AvatarWrap>
                <SideNav.Avatar src="/assets/image-avatar.jpg" alt="avatar" width={40} height={40} />
            </SideNav.AvatarWrap>
        </SideNav>
    );
}

export default sidenav;
