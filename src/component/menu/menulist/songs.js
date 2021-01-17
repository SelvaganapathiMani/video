import React, { Component } from 'react';
import {storage,database} from  './../../../firebase/firebase';
import './other.css'
import Player from 'react-player';

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = { items:[],
            success:'none',
            image:'',
            pause:true}

    
  }
  handleVideo(e)
  {  
     const {success}=this.state;
      if(success=="none")
      {
        this.setState({success:'block'});
        this.setState({image:e});
      }
      else{
        this.setState({success:'none'});
      }
  }
  componentDidMount(){

    const itemsRef = database.ref('songs');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          url: items[item].url
        });
      }

      this.setState({
        items: newState
      });
      
    });
}



  
videoplay=()=>
{
   const {pause,success} =this.state
   this.setState({pause:false});
   this.setState({success:"none"});
}


  
  render() {  

    return ( <div ><div className="mobileview"><div className="grid-container grid-containers">{this.state.items.map((item) => {
            
      return (
        
        <div className="grid-item" key={item.id}>
         <video src={item.url}  frameborder="0"  onClick={()=>this.handleVideo(item.url)} type="video/mp4" style={{width:'100%'}} allowFullScreen/>
         <h1 className="othertitle">{item.title}</h1>
        </div>
      )
    })}
    
  </div><div className="mobilevideos mobileview">
  <div id="myModal" className="modal" style={{display:this.state.success}}>
                     <div className="modal-contentvideo">
                     <span className="closevideo" onClick={this.videoplay.bind(this)}>&times;</span>
                     
                     <video src={this.state.image} controls className="videomenu"/> 
                     
                     </div>
          </div>
  </div>
  </div>
     <div className="mobilevideoplay">
     <div className="grid-container grid-containers">{this.state.items.map((item) => {
          
          return (
            
            <div className="grid-item" key={item.id}>
             <video src={item.url} controls/>
             <h1 className="othertitle">{item.title}</h1>
            </div>
          )
        })}
        </div>
     </div>
  </div>
  
   );
}
}
export default Songs;