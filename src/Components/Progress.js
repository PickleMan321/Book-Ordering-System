import React, {Component} from 'react';
import './Progress.css'



class Progress extends Component {
    render(){
 
        return(
        <div className="progresstable">
        <div className="ordernum1">
            <div className="head1">Product</div>
        <div className="progressdetail">big book</div>
        <div className="progressdetail">small book</div>
        </div>

        <div className="items1">
           <div className="head1">Quantity</div>
        <div className="progressdetail">3</div>
        <div className="progressdetail">1</div>
        </div>

        <div className="dates1">
           <div className="head1">Date Ordered</div>
        <div className="progressdetail">12/8/2019</div>
        <div className="progressdetail">12/2/2019</div>
        </div>

        <div className="progbar">
        <div className="head1">Progress</div>
        <div className="progressdetail">2/5</div>
        <div className="progressdetail">4/5</div>
        </div>

        <div className="status1">
        <div className="head1">Status</div>
        <div className="progressdetail">Creating Books</div>
        <div className="progressdetail"> Preparing Shipment</div>

        </div>

     
    
    
    </div>


);
}
}

export default Progress;