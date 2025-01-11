import React from 'react';
import axios from "axios";
import "./form.css";

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

      console.log(formData)
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
      <form onSubmit={handleOnSubmit} >
        <div  className="div--tag--input border border-primary">
        <label>Upload the excel file: </label>
        <input
         type='file'
         name='excel'
         onChange={handleOnChange}
         />
         </div>
         <div  className="div--tag--input border border-primary">
        <label>Upload the Image: </label>
        <input
      
         type='file'
         name='image'
         onChange={handleOnChange}
         />
         </div>
         <div className="div--tag--input border border-primary">
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

        {/* excel file */}
        <label>Upload the Image: </label>
        <input
        type='file'
        name='image'
        onChange={handleOnChange}
        />
        <br></br>
        <br></br>
        <label>Enter the Student: </label>
        <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleOnChange}
        />
        <br></br>
        <br></br>
        <label>Enter the Course Name:</label>
        <input
        type='text'
        name='course'
        value={formData.course}
        onChange={handleOnChange}
        />  
        <br></br>
        <br></br>
        <label>Enter the Year: </label>
        <input
        type='text'
        name='year'
        value={formData.year}
        onChange={handleOnChange}
        />
          
        <br></br>
        <br></br>

        <input type='submit' value='Submit'/>
      </form>
        </div>
    </div>
  )
}
