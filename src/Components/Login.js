import React, {Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom'


 class Login extends Component {
     render(){
  return (
    
    <div className="login">
        <div className="printshop">PrintShop</div>
        <div className="screen">
            <label class="username">Username:</label>
    <input type="text" className="loguser"></input>

         <label class="password1">Password:</label>
    <input type="text" className="logpass"></input>

   <Link className="logbutton" to='/Home'> <button className="buttonlogin">Login</button></Link>

    </div>
    </div>

   
  );
}
}

export default Login;
