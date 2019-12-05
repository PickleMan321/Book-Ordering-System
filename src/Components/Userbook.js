import React, {Component} from 'react';
import book from "../assets/book.png";
import fourstar from "../assets/4 star.png";
import fivestar from "../assets/5 star.png";
import './Userbook.css'
import {Link} from 'react-router-dom'




class Userbook extends Component {
    render(){
 return (
<div className='userbook'>
    <div className='connecter1'>
        <div className="lefttab1">
            <div className="connectbook1">
            <Link className="main1" to='/Store'>Main books</Link>
            <Link className="user1" to='/Userbook'>User Books</Link>
            </div>
        </div>
        <div className="right1">
    <div className='useronly'>
    
        <div className="whole1">
    <img className="books1" src={book}></img>
    <div className="description1">Big Book</div>
    <div className="author1">by Bobby</div>
    <img className="stars1" src={fourstar}></img>
    </div>
    
    </div>

    <div className="nothin"></div>
   
    </div>
    </div>
</div>


);
}
}

export default Userbook;