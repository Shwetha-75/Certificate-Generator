import React from 'react';
import axios from "axios";
import "./form.css";
import Image from "../media/xls.png";
import Image2 from "../media/photo-gallery.png"
export default function Main() {
  const [formData,setFormData]=React.useState({
    image:'',
    excel:'',
    name:'',
    course:'',
    year:''
  });
  

  const handleOnChange=(event)=>{
    event.preventDefault();
    

    if(event.target.files){
      console.log(event.target.files[0])
      setFormData(prev=>({
        ...prev,
        [event.target.name]:event.target.files[0]
      }))

      
    }
    else{
      setFormData(prev=>({
        ...prev,
        [event.target.name]:event.target.value
      }))
    }
    
  }

  const handleOnSubmit=async(event)=>{
    event.preventDefault()
    const form=new FormData();
    form.append('image',formData.image);
    form.append('excelFile',formData.excel);
    try{
     console.log("im sending request")
     const response=await axios.post("http://127.0.0.1:5000/data",form,{
       headers:{
         'Content-Type':'multipart/form-data'
       }
     });
     console.log(response.data)

    }catch(error){
     console.log(error);
    }
}

  return (
    <div className='form--tag'>
      <div className='form--tag--one'>
        <h3 className='heading--tag--form'>Upload the Excel File To Generate Certificate </h3>
      <form onSubmit={handleOnSubmit} className='form--tag--one d-flex'>
        <div  id="excel--input" className="div--tag--input">
          <label htmlFor='excel--tag'>
     
          <img src={Image} alt="" width='50px' height='50px'/>
          </label>
        <input
        id="excel--tag"
        className="input--tag--choosing"
         type='file'
         name='excel'
         accept='.xlsx,.csv'
         style={{backgroundColor:'red'}}
         onChange={handleOnChange}
         />
         
         </div>
         <div id="image--input" className="div--tag--input">
            <label htmlFor='image--tag'>
          <img src={Image2} alt="" width='50px' height='50px'/>
          </label>
        <input
        className="input--tag--choosing"
        id="image--tag"
         type='file'
         name='image'
         accept='.png'
         onChange={handleOnChange}
         />
         </div>
         <div className="div--tag--input">
        <input 
        className="button--tag"
        type='submit'
        value='Submit'>
        </input>
          </div>
      </form>
        </div>
        
        <div  className='form--tag--two '>
      <h3 className='heading--tag--form'>Fill the Details to Generate Individual Certificate </h3>
      <form onSubmit={handleOnSubmit} className='w-100'>
        <div id="image--input" className="div--tag--input">
            <label htmlFor='image--tag'>
          <img src={Image2} alt="" width='50px' height='50px'/>
          </label>
        <input
        className="input--tag--choosing"
        id="image--tag"
         type='file'
         name='image'
         accept='.png'
         onChange={handleOnChange}
         />
         </div> 
        <div className="div--tag--input--form--two">
        <label>Enter the Student: </label>
        <input
        className='input--tag--form--two'
        type='text'
        name='name'
        value={formData.name}
        onChange={handleOnChange}
        />
        </div>
     
        <div className="div--tag--input--form--two">

        <label>Enter the Course Name:</label>
        <input
        className='input--tag--form--two'
        type='text'
        name='course'
        value={formData.course}
        onChange={handleOnChange}/>  
        </div>
      
        <div className="div--tag--input--form--two">

        <label>Enter the Year: </label>
        <input
        className='input--tag--form--two '
        type='text'
        name='year'
        value={formData.year}
        onChange={handleOnChange}
        />
        </div>
<div className="div--tag--button--form--two "> 

        <input  type='submit' value='Submit'/>
</div>
      </form>
        </div>
    </div>
  )
}
