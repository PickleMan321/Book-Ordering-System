import React from 'react'
import { Link } from 'react-router-dom';
import caboces from '../assets/caboces.png'


const Banner = () => (  
<div className="container">
<div className="nav">

<div className="navleft">
<img className="title" src={caboces}></img>

    <table cellspacing="25" className="menu">
    <tr>
          
          <td><a className="under"> <Link className="link" to="/Home" >Home</Link></a></td>
          <td><a className="under"> <Link className="link" to="/Store">Store</Link></a></td>
          <td><a className="under"> <Link className="link" to="/Customize">Customize</Link></a></td>
          <td><a className="under"> <Link className="link" to="/Account">Account</Link></a></td>
      </tr>
    </table>
    </div>
  
  <div className="navright">
  <input type="text" placeholder="Search..." className="bar"/>
  </div>
   

  </div>
  <div className="lowernav">
  <div className="column">
  <Link className="general">Education</Link>
  <Link className="details">Career and Technical Education </Link>
  <Link className="details">General Education </Link>
  <Link className="details">Exceptional Education </Link>
  <Link className="details">Worforce Development and Community Learning</Link>
  </div>
  
  <div className="column">
  <Link className="general">Services</Link>
  <Link className="details">District Support </Link>
  <Link className="details">Educational</Link>
  <Link className="details">Financial</Link>
  <Link className="details">Technology</Link>
  </div>
  
  <div className="column">
  <Link className="general">Resources</Link>
  <Link className="details">BOCES Staff </Link>
  <Link className="details">Business and Community </Link>
  <Link className="details"> Human Resources</Link>
  <Link className="details">Parents and Students </Link>
  <Link className="details">School Districts </Link>
  <Link className="details">Tools and Links </Link>
  
  </div>
  <div className="column">
  <Link className="general">Additional Information</Link>
  <Link className="details">About</Link>
  <Link className="details">Calender </Link>
  <Link className="details"> Find Us</Link>
  <Link className="details"> Parents' Bill of Rights</Link>
  <Link className="details"> Parent Request for APPR Ratings</Link>
  </div>
  
  

  </div>
  </div>
)
export default Banner;