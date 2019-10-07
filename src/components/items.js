import React, {Component}  from 'react';

import './items.css';

class Items extends Component{
//    
    
    render(){
    
       const {items} = this.props;
        const theItems = items.map( (item) => {
        return item.count > 0 ?  (
                                   
            <div  className="item" key={item.id}>
            <div>{item.id}</div>
              <div>{item.name}</div>
             <div>{item.age}</div>
             <div>________</div>
            
            
            </div>
        
        ) : null
    
        
        
        
        })
    return(
    <div>
   {theItems}
    </div>
    )



}
}

export default Items;

                                  
                                      
            

       
