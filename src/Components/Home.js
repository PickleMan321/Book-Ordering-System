import React, {Component} from 'react';
import './Home.css'
import caboces from '../assets/caboces.png'




class Home extends Component {
    render(){
 return (
<div className="home">

<img className="cover" src={caboces}></img>
</div>
);
}
}

export default Home;