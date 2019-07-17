import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"



import Player from './JWPlayer'
import Audio from './Audio'
import Audio2 from './Audio2'

import Home from './Home'
import About from './About'



const Content = () => {
    return (
        <Router>
            <div>
                <nav style={{ margin: 10 }}>
                    <Link to='/home' style={{ padding: 10 }}>
                        Home
                    </Link>
                    <Link to='/home' style={{ padding: 10 }}>
                        Home
                    </Link>

                    <Link to='/about' style={{ padding: 10 }}>
                        About
                    </Link>
                    <Audio />
                </nav>
                {/* <Route path='/' exact component={Audio2} /> */}
                <Route path='/about' component={About} />
                <Route path='/home' component={Home} />
            </div>
        </Router>
    )
}

export default Content