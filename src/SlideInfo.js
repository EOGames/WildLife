import React from "react";
let string =[];
const SlideInfo = function (props)
{
    return (
        <div className="infoText">
            <p>{ChqIfTheirsAnBrTag(props.info)}</p>
        </div>
    );
}
export default SlideInfo;


function ChqIfTheirsAnBrTag(inf ="")
{
    
    if (inf.includes('<br>'))
    {
        // means break tag found
        string = inf.split ('<br>');
        console.log(string);

        if (string.length >0)
        {
            for(let i=0; i < string.length; i++)
            {
                string[i] = string[i];
                console.log("Adding Stuff");
            }
            console.log("Returning");
            return string;       
        }
    }
    return inf;
}