
import React from 'react'

 const ImageThumb=({image})=> {
    return  <img src={URL.createObjectURL(image)} alt={image.name}
     style={{borderRadius:"30px", justifyContent:"center", width:"200px"}}/>;
    
};

export default ImageThumb;


  