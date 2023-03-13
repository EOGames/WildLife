import React from "react";

const Header = function(props)
{
    return(
        <div className="header">
            {props.title}
        </div>
    );
}
export default Header;