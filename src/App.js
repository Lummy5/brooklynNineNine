import React from 'react';
import Header from './Components/Header';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Cast from './Components/Cast'
import download from './Components/download.jpg'
function App() {
    return(
        <Router>
            <div>
                <Header />
                <Switch>
                <Route path='/' exact component={Home}/> 
                <Route path='/about' component={About}/>
                <Route path='/cast' component={Cast}/>
                </Switch>

            </div>
        </Router>
    );
  
}

export default App;
