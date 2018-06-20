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
        console.log("Constructor page body")
    }
    componentWillMount(){
        console.log("componentWillMount page body")
    }
    componentDidMount(){
        console.log("componentDidMount page body")
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps page body")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate  page body")
        return true
    }
    componentWillUpdate(){
        console.log("componentWillUpdate page body")
    }
    componentDidCatch(){
        console.log("componentDidCatch page body")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate page body")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount page body")
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
                <div>
                    {this.props.children}
                </div>
                {
                    this.state.headerId==4?
                    <Header name={this.state.passValue} id={this.state.headerId} />
                    :
                    <Footer 
                    x={"footerFromPageBody"} 
                    fun={this.connectComponents.bind(this)}
                />
                }
                <input type="number" defaultValue={this.state.headerId} onChange={(event)=>{
                    this.setState({headerId: event.target.value})
                } } />
            </div>
            
        )
    }
}