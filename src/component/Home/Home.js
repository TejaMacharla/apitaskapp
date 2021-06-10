import React, { Component } from 'react'
import HomeDisplay from './HomeDisplay'//here import the HomeDisplay file
const listURL="https://reqres.in/api/users?page=2"//here we declare the API
class Home extends Component{// this is the class component,basically class component using for api calling and business logics.
    constructor(){
        super()
        this.state={
            list:''

        }
    }
    render(){
        return(
            <div>
              <HomeDisplay listdata={this.state.list} />
            </div>
        )
    }
    componentDidMount(){
        fetch(listURL,{method:'GET'})//this is api calling 
        .then((res)=>res.json())// here we get the promiss
        .then((data)=>{
            this.setState({list:data})//here we get the data
        })
    }
}
export default Home;// here we export this file to Routing.js