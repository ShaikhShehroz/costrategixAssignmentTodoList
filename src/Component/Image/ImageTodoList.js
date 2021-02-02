import React,{Component} from 'react';
import "../../App.css";
import  Todo from "../Text/Todo"
import ImageThumb from  "./imageList";


class ImageTodoList extends Component {
  
  state = {
    selectedFile: '',
    list:[],
  };
  
   onFileChange =(event)=> {  
     if(event.target.files.length)  {
      this.setState({ selectedFile: event.target.files[0] }); 
     }
    };
   
  
  // On file upload (click the upload button)
  
  
  onFileUpload = (event) => {
    
      
    this.setState({selectedFile: event.target.files});
    console.log(this.state.selectedFile);
    var persistImageList=JSON.parse(localStorage.getItem('selectedFile'));
    console.log(this.state.selectedFile)
    if(persistImageList && persistImageList.length>0 ){
            persistImageList = persistImageList.concat(this.state.selectedFile.name);
            this.setState({list:persistImageList},()=>{localStorage.setItem('selectedFile',JSON.stringify(this.state.list))})
          
      }else{
            this.setState({list:[this.state.selectedFile.name|| null]},()=>{localStorage.setItem('selectedFile',JSON.stringify(this.state.list))})
          
          }
      document.getElementById("child").value ="";

  };

  removeTodo=(index)=>{

      var persistImageList=JSON.parse(localStorage.getItem('selectedFile'));
      persistImageList.splice(index);
      this.setState({list:persistImageList});
      localStorage.setItem('selectedFile',JSON.stringify(persistImageList));
      var d = document.getElementById('parent');
      var olddiv = document.getElementById("output"); 
      if(olddiv!=null){
          d.removeChild(olddiv) ;
      }
     
      
  }
 

  render() {
  
    return (
      <div className="image_todo">
       
          <h2 >
            Image Todo 
          </h2>
          {this.state.list && this.state.list.map((todo, index) => (
            <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={this.removeTodo}
          
           
          />
        ))}
          <div id="parent" style={{borderRadius:"30px"}}>
              <input id="child" type="file" onChange={this.onFileChange} />
               <button onClick={this.onFileUpload} style={{borderRadius:"25px",padding:"10px",width:"200px",float:"right",marginTop:"9%",backgroundColor:"orange"}} >Upload</button>
           
              {this.state.selectedFile && <ImageThumb  id="output" image={this.state.selectedFile} />}
            
          </div>
          
      </div>
    );
  }
}

export default ImageTodoList;




