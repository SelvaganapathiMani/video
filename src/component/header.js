import React, { Component } from 'react';
import './responsive.css';
import './header.css';
import Mobilemenu from './menu/mobilemenu';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = { menu:"none" }
    }
  
handlemenu()
{   const{menu}=this.state;
     if(menu=="none")
     {
         this.setState({menu:'block'});
     }
     else{
         this.setState({menu:'none'});
     }
}

    render() { 
        return (
        <div><div className="head">
            <div className="menurow">
              <div className="menuhr menucoloum" onClick={this.handlemenu.bind(this)}>Menu</div>
              <h1 className="menuhead">HIFY</h1>
            </div>
        </div>
        
        <div className="menuhr"><Mobilemenu menu={this.state.menu} menuchange={this.handlemenu.bind(this)}></Mobilemenu></div>

        </div>);
    }
}
 
export default Head;