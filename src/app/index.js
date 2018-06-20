import React from "react"
import {render} from "react-dom"
import { BrowserRouter as Router, Route,Link, Switch, IndexRoute } from 'react-router-dom'
import { createStore } from "redux"
import {PageBody} from "./components/pageBody.js"
import {UserPage} from "./components/userPage.js"
import {HomePage} from "./components/homePage.js"

const reducer = (state,action)=>{
    
}
const store = createStore(reducer ,10)

class App extends React.Component{
    render(){
        return(
            <Router >
                <div>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user/10">User</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={PageBody} />
                <Route exact path="/user/:id" component={UserPage}/>
                </div>
            </Router>
        )
    }
}

render(<App/>, window.document.getElementById("app"))