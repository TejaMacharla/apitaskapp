import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './component/Home/Home';
import Footer from './Footer';//here we are importing the files
import Header from "./Header"
const Routing=()=>{//React Router is Routing library built on top of react which is used to create Routes in a react applications.
    return(//before work with route we have to install react-router-dom and import Route in the application
        <div>
            <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default Routing;//here export the file to index.js