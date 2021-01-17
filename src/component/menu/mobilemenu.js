import React, { Component } from 'react';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import Upload from './upload';
import Success from './success';
import All from './menulist/all';
import Comedy from './menulist/comedy';
import Education from './menulist/education';
import Gaming from './menulist/gaming';
import Entertainment from './menulist/entertainment';
import kids from './menulist/kids';
import News from './menulist/news';
import Other from'./menulist/other';
import Songs from './menulist/songs';
import Sports from './menulist/sports';


class Mobilemenu extends Component {
    constructor(props) {
        super(props);
        this.state = {display:"none",
                      success:'none'}
    }
    handlePopup(){
        
        if(this.state.display==="none")
        {
          this.setState({display:"block"});
          this.props.menuchange();
        }
        else{
            this.setState({display:"none"});
        }
    }
    handlePopupsuccess()
    {   
        if(this.state.success==="none")
        {
          this.setState({success:"block"});
        }
        else{
            this.setState({success:"none"});
        }
        
    }
    render() { 
        return (<BrowserRouter>
                  <div id="myModal" className="modal" style={{display:this.props.menu}}>
                       <div className="modal-contentmenu">
                <div className="newnavcoloum mobilemenuup" >
                 <a className="newaction" id="menuupload" onClick={this.handlePopup.bind(this)}>Upload</a>
                <NavLink exact to="/" className="newaction" onClick={this.props.menuchange}>All Videos</NavLink>
                <NavLink  to="/kids" className="newaction" onClick={this.props.menuchange}>kids</NavLink>
                <NavLink to="/comedy"className="newaction" onClick={this.props.menuchange}>Comedy</NavLink>
                <NavLink to="/news" className="newaction"onClick={this.props.menuchange}>News</NavLink>
                <NavLink to="/songs" className="newaction"onClick={this.props.menuchange}>Songs</NavLink>
                <NavLink to="/gaming" className="newaction"onClick={this.props.menuchange}>Gaming</NavLink>
                <NavLink to="/education" className="newaction"onClick={this.props.menuchange}>Education</NavLink>
                <NavLink to="/entertainment"className="newaction" onClick={this.props.menuchange}>Entertainment</NavLink>
                <NavLink to="/sports"className="newaction"onClick={this.props.menuchange}>Sports</NavLink>
                <NavLink to="/other" className="newaction"onClick={this.props.menuchange}>Other</NavLink> 
                    </div></div>  
          </div>
            <div>
          <div id="myModalpop" className="modalpop" style={{display:this.state.display}}>

                    {/* <!-- Modal content --> */}
                    <div className="modal-contentpop">
                        <span className="closepop" onClick={()=>{this.setState({display:"none"})}}>&times;</span>
                        
                         <Upload display={this.handlePopup.bind(this)} success={this.handlePopupsuccess.bind(this)}/>
                    </div>
                    </div>

                    <div id="myModalpop" className="modalpop" style={{display:this.state.success}}>
                       <div className="modal-contentpop">
                           <Success/>
                       </div>
                      </div>
                  </div>
                  <div>               
                    <Route exact path="/" component={All}/>
                    <Route path="/comedy" component={Comedy}/>
                    <Route path="/education" component={Education}/>
                    <Route path="/entertainment" component={Entertainment}/>
                    <Route path="/gaming" component={Gaming}/>
                    <Route path="/kids" component={kids}/>
                    <Route path="/news" component={News}/>
                    <Route path="/other" component={Other}/>
                    <Route path="/songs" component={Songs}/>
                    <Route path="/sports" component={Sports}/>
                    </div>


                      </BrowserRouter>

         );
    }
}
 
export default Mobilemenu;