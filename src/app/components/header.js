import React from "react";
import {Link, } from 'react-router-dom'

export const Header = (props) => {
        return(  
                <div>
                
                <hr/>
                {props.id==0?
                <h1>
                Hello {props.name}!!
                </h1>
                :
                <h1>
                Hello {props.name} {props.id} !!
                </h1>}
                </div>    
                
                
        )
}