import React, {Component} from 'react';
import './History.css'




class History extends Component {
    render(){
 return (


    <div className="table">
    <div className="ordernum">
        <div className="head">Order Number</div>
    <div className="historydetail">adf13</div>
    <div className="historydetail">bst73</div>
    <div className="historydetail">adg55</div>
    <div className="historydetail">abj04</div>
    <div className="historydetail">bho08</div>
    <div className="historydetail">crn21</div>
    <div className="historydetail">acm03</div>
    <div className="historydetail">kfe12</div>
    
    </div>
    <div className="items">
       <div className="head">Items</div>
    <div className="historydetail">2 items</div>
    <div className="historydetail">1 items</div>
    <div className="historydetail">4 items</div>
    <div className="historydetail">1 items</div>
    <div className="historydetail">2 items</div>
    <div className="historydetail">1 items</div>
    <div className="historydetail">3 items</div>
    <div className="historydetail">2 items</div>
    </div>

    <div className="Amount">
    <div className="head">Total Cost</div>
    <div className="historydetail">$120</div>
    <div className="historydetail">$60</div>
    <div className="historydetail">$290</div>
    <div className="historydetail">$50</div>
    <div className="historydetail">$140</div>
    <div className="historydetail">$210</div>
    <div className="historydetail">$170</div>
    <div className="historydetail">$100</div>
    </div>

    <div className="dates">
       <div className="head">Order Placed</div>
    <div className="historydetail">12/8/2019</div>
    <div className="historydetail">12/2/2019</div>
    <div className="historydetail">10/4/2019</div>
    <div className="historydetail">5/7/2019</div>
    <div className="historydetail">4/13/2019</div>
    <div className="historydetail">2/7/2019</div>
    <div className="historydetail">8/18/2018</div>
    <div className="historydetail">1/26/2018</div>
    
    </div>
    <div className="status">
    <div className="head">Status</div>
    <div className="historydetail">Order Processing</div>
    <div className="historydetail">Order Processing</div>
    <div className="historydetail">Order Shipped</div>
    <div className="historydetail">Order Shipped</div>
    <div className="historydetail">Order Shipped</div>
    <div className="historydetail">Order Shipped</div>
    <div className="historydetail">Order Shipped</div>
    <div className="historydetail">Order Shipped</div>
    </div>



</div>

);
}
}

export default History;