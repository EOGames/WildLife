import React from "react";
import NavButton from "./NavButton";

const SideNav = function()
{
    return (
        <div className="sideNav">
            <NavButton name = "Home" link="/" />
            <NavButton name = "Animals" link="" />
            <NavButton name = "About" link="/About" />
            <NavButton name = "Contact" link="/Contact" />
        </div>
    );
}
export default SideNav;