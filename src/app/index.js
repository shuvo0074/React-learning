import React from "react"
import {render} from "react-dom"
import { BrowserRouter as Router, Route,Link, Switch, IndexRoute } from 'react-router-dom'

import {PageBody} from "./components/pageBody.js"
import {UserPage} from "./components/userPage.js"
import {HomePage} from "./components/homePage.js"

class App extends React.Component{
    render(){
        return(
            <Router >
                <div>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={PageBody} />
                <Route exact path="/user" component={UserPage}/>
                </div>
            </Router>
        )
    }
}

render(<App/>, window.document.getElementById("app"))