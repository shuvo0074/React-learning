import React from "react";

export class Footer extends React.Component{
    constructor(props){
        super()
        this.state={
            a: "newHeader",
            n:0
        }
    }
    onChangeLink(){
        this.setState({n:this.state.n+1})
        this.props.fun(this.state.a,this.state.n)
    }
    render(){
        return(
            <div>
                <h1>
                Hello {this.props.x} !!
                </h1>
                <button
                onClick={this.onChangeLink.bind(this)}
                >
                    Change footer
                </button>
            </div>
            
        )
    }
}