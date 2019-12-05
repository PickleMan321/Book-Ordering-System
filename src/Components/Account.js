import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Account.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'



class Account extends Component {
    render(){
     

 return (

<div className="account">
    <div className="combine1">
<div className="progress">
    <div className="prog">Order Progress
    <FontAwesomeIcon className="card" icon={faSpinner}/>
    </div>
    <div className="progdesc">Check your recent order progress</div>
    <Link className="viewprogress" to='/Progress'>View Progress</Link>

</div>
<div className="detail">
    <div className="acc">Account Details
    <FontAwesomeIcon className="card" icon={faUserCircle} />
    </div>
    <div className="orderdesc">Check your account information details</div>
    <Link className="viewaccount" to='/Details'>View Account</Link>
</div>
</div>
<div className="combine2">
<div className="order">

    <div className="Transaction">Transaction History
    <FontAwesomeIcon className="card"icon={faHistory}/>
    </div>
   
<div className="orderdesc">Check your order history </div>
<Link className="vieworder"  to='/History'>View Order</Link>
</div>
</div>

</div> 

);
}
}

export default Account;