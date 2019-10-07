import React , {Component} from 'react';

import './App.css';
import Items from './components/items';



class App extends Component{
    constructor(){
        super();
        console.log("constructor")
    }
   
    
    componentDidMount(){
        console.log("get")
        
    }
    
    componentDidUpdate(prevProps, PrevState){
        
        console.log("prevProps");
    }
    
    state ={
        items: [
            
            { id:1 , name:"Sahar" , age: 25 , count:2  },
              { id:2 , name:"mark" , age: 25 , count:3  },
               { id:2 , name:"gor" , age: 21 , count:4  }
            
            
        ]
    }
    

handelClick = (e) => {
    
    let items = this.state.items;
    items.push({id:4, name:"joo", age :30, count:5});
    this.setState({
        items : [
             { id:2 , name:"mark" , age: 25 , count:3  },
        ]
    })
}

handelDelete = (e) => {
    
    let items = this.state.items;
    
    this.setState({
        items :items
    })
}
    


    render(){
        console.log("render");
return(

<div className="App">
Condtion
    <Items items={this.state.items} />
    <button onClick={this.handelClick}>Add </button>
    <button onClick={this.handelDelete}>Delete </button>
    </div>




)
    
    }
    
    
}



export default App;



