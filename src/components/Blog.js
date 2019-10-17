import React , {Component} from 'react';
import axios from 'axios';

class Blog extends Component{
    
    state ={
        
        users : []
        
    }
    componentDidMount(){
        console.log(this.props);
         console.log(this.props.match.path);
        
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            
              console.log(res.data);
            this.setState({
                users: res.data
                
})
          
              
              })
    }
    
    render(){
        
        const {users }= this.state
        const userList = users.map( user => {
            
            return (
            
            <div key={user.id}>
                <div className="content">
                <div> Name: {user.name} </div>
                   <div> Name: {user.username} </div>
                
                </div>
                </div>
            
            )
        })
        
        
        
        return(
            
        <div>
            <h1>BlogS</h1>
            
            <div> {userList}   </div>
            </div>
        
        )
    }
    
    
}

export default Blog;

