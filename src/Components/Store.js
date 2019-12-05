import React, {Component} from 'react';
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book8 from "../assets/book8.png";
import book7 from "../assets/book7.png";
import book6 from "../assets/book6.png";
import book10 from "../assets/book10.png";
import fourstar from "../assets/4 star.png";
import fivestar from "../assets/5 star.png";
import './Store.css'
import {Link} from 'react-router-dom'




class Store extends Component {
    render(){
 return (
<div className='store'>
    <div className='connecter'>
        <div className="lefttab">
            <div className="connectbook">
            <Link className="main" to='/Store'>Main Books</Link>
            <Link className="user" to='/Userbook'>User Books</Link>
            </div>
        </div>
        <div className="right">
    <div className='top'>
    
        <div className="whole">
   <Link> <img className="books" src={book10}></img></Link>
    <Link className="description">The Communist Manifesto</Link>
    <Link className="author">by Karl Marx</Link>
    <img className="stars" src={fourstar}></img>
    </div>
        <div className="whole">
    <Link><img className="books" src={book6}></img></Link>
    <Link className="description">Captain Underpants</Link>
    <Link className="author">by Dav Pilkey</Link>
    <img className="stars" src={fourstar}></img>
    </div>
        <div className="whole">
    <Link><img className="books" src={book3}></img></Link>
    <Link className="description">Pooh Gets Stuck</Link>
    <Link className="author">by Isabel Gaines</Link>
    <img className="stars" src={fivestar}></img>
    </div>
    </div>
    <div className='bottom'>
        <div className="whole">
   <Link> <img className="books" src={book7}></img></Link>
    <Link className="description">The Cool Bean</Link>
    <Link className="author">by Jory John</Link>
    <img className="stars" src={fourstar}></img>
    </div>
        <div className="whole">
    <Link><img className="books" src={book8}></img></Link>
    <Link className="description">Cracking the Coding Interview</Link>
    <Link className="author">by Gayle Laakmann McDowell</Link>
    <img className="stars" src={fivestar}></img>
    </div>
    <div className="whole">
   <Link><img className="books" src={book2}></img></Link>
    <Link className="description">Everyone Poops</Link>
    <Link className="author">by Taro Gomi</Link>
    <img className="stars" src={fourstar}></img>
    </div>
    </div>
    </div>
    </div>
</div>


);
}
}

export default Store;