import React, { Component } from 'react';
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom';
import './nav.css';
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
import Upload from './upload';
import Success from './success';
import Mobilemenu from './mobilemenu';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {display:"none",
                      success:'none'}
    }
    handlePopup(){
        
        if(this.state.display==="none")
        {
          this.setState({display:"block"});
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

    componentDidMount(){
        window.onscroll = function() {myFunction()};

        var mynav = document.getElementById("mynav");
        
        var sticky = mynav.offsetTop;

        function myFunction() {
        if (window.pageYOffset > sticky) {
            mynav.classList.add("sticky");
           
        } else {
            mynav.classList.remove("sticky");
            
        }
        }
    }
    render() { 
        return (
            <BrowserRouter> 
              <div className="mobilemenu"> <div> 
                <div className="navcolum" id="mynav">
                <NavLink exact to="/" className="action" activeClassName="navmenulink">All Videos</NavLink>
                <NavLink className="action" activeClassName="navmenulink" to="/kids">kids</NavLink>
                <NavLink className="action"to="/comedy" activeClassName="navmenulink">Comedy</NavLink>
                <NavLink to="/news" className="action" activeClassName="navmenulink">News</NavLink>
                <NavLink to="/songs" className="action" activeClassName="navmenulink">Songs</NavLink>
                <NavLink to="/gaming" className="action" activeClassName="navmenulink">Gaming</NavLink>
                <NavLink to="/education" className="action" activeClassName="navmenulink">Education</NavLink>
                <NavLink to="/entertainment" className="action" activeClassName="navmenulink">Entertainment</NavLink>
                <NavLink to="/sports" className="action" activeClassName="navmenulink">Sports</NavLink>
                <NavLink to="/other" className="action" activeClassName="navmenulink">Other</NavLink>
                
                </div>
                <div id="myupload">
                <h1 className="navmenu upload " id="myBtn" onClick={this.handlePopup.bind(this)}>Upload</h1>
                </div>
                                    {/* <!-- The Modal --> */}
                    <div id="myModal" className="modal" style={{display:this.state.display}}>

                    {/* <!-- Modal content --> */}
                    <div className="modal-content">
                        <span className="close" onClick={()=>{this.setState({display:"none"})}}>&times;</span>
                         <Upload display={this.handlePopup.bind(this)} success={this.handlePopupsuccess.bind(this)}/>
                    </div>
                    </div>

                    <div id="myModal" className="modal" style={{display:this.state.success}}>
                       <div className="modal-content">
                           <Success/>
                       </div>
                      </div>
                  </div>
                       
                <div>

               
                   <Switch>
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
                    
                   </Switch>

               </div>
              </div>
        
        
        
    </BrowserRouter> );
    }
}
 
export default Nav;