import React from 'react';
import Nav from './components/nav';
import About from './components/about';
import Shop from './components/shop';
import './App.css';
 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetail from './components/itemDetail';
 

function App() {
  return (  
    <Router>
    <div className='App' >
    <Nav />
    <Switch> 
    <Route  path='/' exact component= {Home} />
    <Route  path='/about' component= {About} />
    <Route  path='/shop' exact component= {Shop} />
    <Route  path='/shop/:itemId' component= {ItemDetail} />
    </Switch>
    
    </div>
    </Router>
     
  );
}

const Home = () =>(
   <div><h1>HOME</h1></div>
)

export default App;
