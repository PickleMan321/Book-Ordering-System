import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons'




class Details extends Component {
    render(){
 return (

<div className="accountdetails">
    <div className="title">Personal Info
    <div className="undertitle">Basic info like your name and email that you use on this account</div>
 
    </div>
   
    <div className="place">
    <div className="infotable">
    <div className="namerow">
    <div className="name">Name:
        <div className="undername">Bobby Bober</div>
        </div>
        <Link className="arrowclick"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></Link>
      
    </div>
    
    <div className="emailrow">
    <div className="email">Email:
        <div className="underemail">BobbyBober@gmail.com</div>
    </div>
    <Link className="arrowclick"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></Link>
      
    </div>

    <div className="passwordrow">
    <div className="password">Password:
        <div className="underemail">***********</div>
    </div>
    <Link className="arrowclick"><FontAwesomeIcon className="arrow" icon={faArrowRight}/></Link>
   
    </div>

    </div>
    </div>
</div>

);
}
}

export default Details;