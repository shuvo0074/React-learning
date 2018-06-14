import React from "react";
import {Footer} from "./footer"
import {Header} from "./header"

export class PageBody extends React.Component{
    constructor(){
        super()
        this.state={
            passValue: "initial",
            headerId: 0,
        }
    }
    connectComponents(data,hId){
        this.setState({passValue:data})
        this.setState({headerId:hId})
    }
    render(){
        return(
            <div>
                <Header name={this.state.passValue} id={this.state.headerId} />
                <h1 style={{backgroundColor: 'blue',height:100,alignItems: 'center'}} >
                Hello body!!
                </h1>
                <Footer 
                x={"footerFromPageBody"} 
                fun={this.connectComponents.bind(this)}
                />
            </div>
            
        )
    }
}