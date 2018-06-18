import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
const user=[
    {
        name:"Joe",
        age:20
    },
    {
        name:"Mark",
        age:23
    },
    {
        name:"Bela",
        age:23
    },
]
class Users extends React.Component {
     constructor(props){
         super(props);
     }
    render(){
        const items = user;
        const listItems = items.map((d,index) => <li key={index}>{d.name}-{d.age}</li>);
    
        return (     
          <div>
          <h1>list of users</h1>    
          <ul>{listItems}</ul>
          </div>
        );
    }
}
const  User= (props) => <p>{props.user.name} - {props.user.age}</p>
export default Users;