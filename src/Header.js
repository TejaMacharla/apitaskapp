import React from 'react';//this is the Header file
import {Link} from 'react-router-dom'
const Header=()=>{
    return(//this is the fuctional component ,it is used for displaying purpose
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">//
    <div class="navbar-header">
      <Link class="navbar-brand" to="#">ExcellenceTechnosoft</Link>
    </div>
    <ul class="nav navbar-nav">
    
      <li><Link to="/">Home</Link></li>
    </ul>
  </div>
</nav>

    )
}
export default Header;//here export the file to Routing.js