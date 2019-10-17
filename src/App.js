import React , {Component} from 'react';

import './App.css';
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Rout from "./components/Rout";
import {BrowserRouter , Route , Switch} from 'react-router-dom';







class App extends Component{
    render(){
    return(
 <BrowserRouter>
   <div className="App">
       
       
       
       <Nav />
        <Switch>
    <Route exact path="/" component = {Home} />
        <Route path="/about" component ={About} />
         <Route path="/blog" component ={Blog} />
         <Route path="/:test_params" component ={Rout} />
       </Switch>
       
       
       </div> 
</BrowserRouter>
)
    
    }
    
    
}



export default App;



