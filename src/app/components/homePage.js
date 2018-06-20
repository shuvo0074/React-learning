import React from "react";

export class HomePage extends React.Component{
    constructor(props){
        super()
        this.state={
            a: "newHeader",
            n:0
        }
        console.log("Constructor Footer")
    }
    componentWillMount(){
        console.log("componentWillMount Footer")
    }
    componentDidMount(){
        console.log("componentDidMount Footer")
    }
    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps Footer",newProps)
    }
    shouldComponentUpdate(newProps,newState){
        console.log("shouldComponentUpdate  Footer",newProps,newState )
        return true
    }
    componentWillUpdate(){
        console.log("componentWillUpdate Footer")
    }
    componentDidCatch(){
        console.log("componentDidCatch Footer")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Footer")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount Footer")
    }

    onChangeLink(){
        this.setState({n:this.state.n+1})
        this.props.fun(this.state.a,this.state.n)
    }
    render(){
        return(
            <div>
                <h1> Home !!  </h1>
                <p>This is home !!</p>
            </div>
            
        )
    }
}