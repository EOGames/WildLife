import React from "react";
import { NavLink } from "react-router-dom";


const NavButton = function(props)
{
    
    return (
        <div className="navButton">
            <NavLink to= {props.link} >{props.name}</NavLink>
        </div>
    );
}

export default NavButton;