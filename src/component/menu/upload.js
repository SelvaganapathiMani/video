import React, { Component } from 'react';
import {storage,database} from '../../firebase/firebase';
import'./upload.css';
class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = { video:"",
                        url:"" ,
                        title:'',
                        select:"other",
                        display:'none',
                        prog:'0'}
    }

   handleChanges(e){
      
       
    if(e.target.files[0])
    {
         const video=e.target.files[0];
         this.setState(() =>({video}));
    }
    console.log(this.state.video);
   }
   handleCateg(e){
       this.setState({select:e.target.value});
   }
   handletitle(e){
    this.setState({title:e.target.value});
   }

   handleUpload(){
       
       const {video,select,title} = this.state;
       const upload=storage.ref(`videos/${select}/${title}`).put(video);

       upload.on(`state_changed`,
       (snapshot) =>{
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        var f=Math.ceil(progress);
            
            this.setState({prog:f});
              this.setState({display:'block'});
       },
       (error)=>{
          console.log("error");
       },
       ()=>{
           const alldata = database.ref('all videos')
          const itemsRef = database.ref(`${select}`);
           
            storage.ref(`videos/${select}/${title}`).getDownloadURL().then(url=>{
                const item = {
                    title:title,
                     url:url
                  }

                itemsRef.push(item);
                alldata.push(item);
            })
            
 
           this.props.display();
           this.props.success();
            
       }

       )
   }


    render() { 
        return (  <div className="fireupload">
                             Title <br/><br/>
                            <input type="text" className="nameinput" onChange={this.handletitle.bind(this)}/><br/><br/>
                            catagory <br/><br/>
                            <select onChange={this.handleCateg.bind(this)} value={this.state.select} className="nameinput">
                                <option value="other">Other</option>
                                <option value="comedy">Comedy</option>
                                <option value="education">Education</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="gaming">Gaming</option>
                                <option value="kids">Kids</option>
                                <option value="news">News</option>
                                <option value="songs">Songs</option>
                                <option value="sports">Sports</option>
                            </select>
                     <br/><br/>
                     <input type="file" onChange={this.handleChanges.bind(this)} accept='.mp4,.mkv,.3gp,.ogg,.wmv,.webm,.flv,.avi,.hdv.dv,.dvcpro'/><br/><br/>
                      <div className="progress" style={{display:this.state.display}}><div className="loadprogress" style={{width:`${this.state.prog}%`}}>{this.state.prog}</div></div><br/><br/>
                    <button onClick={this.handleUpload.bind(this)} className="uploadbutton">Upload</button>
                   </div>);
    }
}
 
export default Upload;