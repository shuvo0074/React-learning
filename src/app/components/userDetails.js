import React from "react";

export class UserDetails extends React.Component{
    constructor(props){
        super()
    }
    
    render(){
        return(
            <div>
                <h1>
                Hello User {this.props.name} !!
                </h1>
            </div>
            
        )
    }
}