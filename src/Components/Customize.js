import React, {Component} from 'react';
import book from "../assets/book.png";
import './Customize.css';

 class Customize extends Component {
     render(){
     
  return (
    
   

    <div className="customize">
      

  
  <div className="connect">

    <div className="box1">
      <div className="name">Options</div>
      <div className="options">
        
      <label class="label">
    Page Count 25 - 900
    
</label>

      <input type="text" className="pages"/>
    
    <label class="label">Quantity 1 - 1000</label>
    <input type="text" className="input"></input>

<label class="label">Ship to State</label>
    <select className="choice"> 
      <option value="NY">New York</option>
      <option value="Flo">Florida</option>
      <option value="NJ">New Jersey</option>
      <option value="Cal">California</option>
    </select>

    <label class="label">Ship to City</label>
    <select className="choice"> 
      <option value="NY">Olean</option>
      <option value="Flo">Miami</option>
      <option value="NJ">Newark</option>
      <option value="Cal">Los Angeles</option>
    </select>

      </div>

      <div className="name">Summary</div>
      <div className="summary">

    <div className="stuffy">Estimated Arrival Date</div>
    <div className="date"> Dec 21</div>
    <div className="stuffy">Price</div>
    <div className="cost">$230.00</div>
    <div className="stuffy">Shipping</div>
    <div className="stuff">$110.00</div>
    <div className="stuffy">Total (Excludes Taxes)</div>
    <div className="stuff">$340.00</div>

      </div>
    </div>
  
    <img className="book" src={book}></img>
   

  <div className="box">
    
  
  <label class="switch1">
    Step 1
</label>

    <select className="choicebox1"> 
      <option value="Yes">7.5" X 7.5"</option>
      <option value="Yes">8" X 10"</option>
      <option value="No">8.5" X 11"</option>
      <option value="No">12" X 9"</option>
    </select>

  
<label class="switch2">
    Select Book Size
</label>


  
    <label class="switch3">
    Covered or Uncovered 
</label>
<select className="choicebox2"> 
      <option value="Uncover">Uncovered</option>
      <option value="Cover">Covered</option>
    </select>

    <label class="switch3">
    Covered or Uncovered 
</label>

<label class="switch4">
    Bound or Unbound
</label>
<select className="choicebox3"> 
      <option value="Bound">Bound</option>
      <option value="Unbound">Unbound</option>

    </select>

    <button className="confirm">Confirm Changes</button>
    <button className="proceed">Submit for Review</button>

    <label class="switch5">
    Step 2
</label>

    <label class="switch6">
    Choose book cover 
</label>
<select className="choicebox4"> 
      <option value="Soft">Softcovered</option>
      <option value="Hard">Hardcovered</option>
    </select>

    <label class="switch7">
    Choose font type 
</label>

    <select className="choicebox5"> 
      <option value="Times">Times New Roman</option>
      <option value="Ariel">Ariel</option>
    </select>

    <label class="switch8">
    Choose color
</label>

    <select className="choicebox6"> 
      <option value="black">Black and white</option>
      <option value="color">Colored</option>
    </select>

    <label class="switch9">
    Step 3
</label>

<button className="insert">Submit PDF</button>
</div>
</div>
    </div>
  );
}
}

export default Customize;
