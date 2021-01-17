import React, { Component } from 'react';
import './success.css';
class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {   
        return ( 
                 <div><div className="success">
                   <div className="successcircul"> Success</div>
                 </div>
                 <button className="successbutton" onClick={()=>{ window.location.reload()}}>Ok</button>
                 </div> );
    }
}
 
export default Success;