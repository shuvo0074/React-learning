import React from "react"
import {render} from "react-dom"

import {PageBody} from "./components/pageBody.js"

class App extends React.Component{
    render(){
        return(
            <div style = {{backgroundColor: "green",width:'100',
             margin: 20,padding:5,borderRadius:10,
              borderColor:'black',borderWidth:20, 
              alignItems: 'center', }} >
                
                <PageBody style={{flex:1, backgroundColor:"red" }} />
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"))