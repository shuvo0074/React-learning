import React from "react";

export const Header = (props) => {
        return(
            props.id==0?
            
                <h1>
                Hello {props.name}!!
                </h1>
                :
                <h1>
                Hello {props.name} {props.id} !!
                </h1>
           
        )
}