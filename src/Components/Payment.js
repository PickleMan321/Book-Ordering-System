import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Payment.css'
import visa from '../assets/visa.png'



class Payment extends Component {
    render(){
     

 return (

<div className="paymentplan">
    <div className="creditcol">
<div className="creditcard">
<img className="visa" src={visa}></img>
    <div className="creditdetail">Visa ...1234
    <div className="expire">Expires 03/21</div>
    </div>
    </div>
    <div className="editcard">
        <Link className="change">Remove</Link>
        <Link className="change" >Edit</Link>
    </div>
</div>
<Link className="addnew">
    <div className="add">+ Add Payment Method</div>
    </Link>
</div>

);
}
}

export default Payment;