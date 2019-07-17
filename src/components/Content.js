import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Player from './JWPlayer'
import Audio from './Audio'
import Audio2 from './Audio2'
import Header from './Header'



const Content = () => {
    return (
        // <BrowserRouter>

        //     <Switch>
        //         <Header />
        //         <Route exact path="/" component={Player} />
        //         <Route exact path="/audio1" component={Audio} />
        //         <Route exact path="/audio2" component={Audio2} />


        //     </Switch>
        // </BrowserRouter>

        <Router> 
   <div className="App">
    <Header /> 
    <Route exact path="/" component={Player}/> 
    <Route path="/dashboard" component={()=><Dashboard stuff={stuff} />}/>  
    <Footer /> 
   </div>
  </Router>

    )
}

export default Content