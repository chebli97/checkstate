
import './App.css';
import React, { Component } from 'react'
import robot from "./robot.png"
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';



export default class App extends Component {

  state={  
    Person : {
    fullName: "Saif Chebli",
    bio: "Hii GoMyCode",
    imgSrc:robot,
    profession: "Etudiant",
    
  },
  show : false,
  date: ""
};
   

checkProfile = () =>{
  this.setState({
      ...this.state,
      show: !this.state.show
    }
  )
}

  
  
  componentDidMount(){
    setInterval( () =>
     {let date =new Date ()
    date =date.getHours()  + ":" +date.getMinutes() + ":" +date.getSeconds()
    this.setState({date :date} )},3000)
    
  }
 
 
 
  render() {
    return (
      
      <div className="profil">
        {this.state.show && (
          <>
        <h1>{this.state.Person.fullName}</h1>
        <h1>{this.state.Person.bio}</h1>
        <img src={this.state.Person.imgSrc}  alt="" />
        <h1>{this.state.Person.profession}</h1>
        <h1>{this.state.date}</h1>
        </>
          )}
       
        <button onClick={this.checkProfile}> Check here</button>
        </div>
      
   
  
    );
  }
}