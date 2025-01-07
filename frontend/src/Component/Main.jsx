import React from 'react';
import axios from "axios";
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
    <div>
      
      <form onSubmit={handleOnSubmit} className='bg-sky-500'>

        {/* excel file */}
        <label>Upload the excel file: </label>
        <input
        type='file'
        name='excel'
      
        onChange={handleOnChange}
        />
        <br></br>
        <br></br>
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
  )
}
