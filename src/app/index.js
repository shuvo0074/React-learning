import React from "react"
import {render} from "react-dom"
import {Footer} from "./components/footer.js"
import {Header} from "./components/header.js"
import {PageBody} from "./components/pageBody.js"

class App extends React.Component{
    render(){
        return(
            <div style = {{backgroundColor: "green",width:'100', margin: 20,padding:5,borderRadius:10, borderColor:'black',borderWidth:20, alignItems: 'center', }} >
                <Header/>
                <PageBody style={{flex:1, backgroundColor:"red" }} />
                <Footer/>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"))