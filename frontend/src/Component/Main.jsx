import React from 'react'
import axios from "axios"

export default function Main() {

  const [user,setUser]=React.useState({
    image:"",
    excel:"",
    name:'',
    course:''
  });
  const handleOnSubmit=async (event)=>{

    // sending the data  to backend 
 event.preventDefault();
 console.log(user)
  try{
       const response=await axios.post("http://127.0.0.1:5000/data",user,{
        headers: {
          'Content-Type': 'application/json'
        }
       });
       console.log(response)

   }catch(error){
    console.log("Error while displaying"+error);
   }

  };


  const handleOnChange=(e)=>{
    e.preventDefault();
    const {name,value,files,type}=e.target;
    if(type==='file'){
     setUser((prev)=>({
      ...prev,
      [name]:URL.createObjectURL(files[0])
     }))
    }
    else{
      setUser(prev=>({
        ...prev,
       [name]:value
      }))
    } 
  };

 

  return (
    <div>
        <form onSubmit={handleOnSubmit} encType='multipart/form-data'>
          <label>
            Choose the image
          
          <input  
          type='file' 
          name='image' 
         
          onChange={handleOnChange}
          />
          </label>
      
          <br></br>
          <br></br>
          <label>
            Choose the Excel 
           
            <input
            type='file'
            name='excel'
            
            onChange={handleOnChange}
            />
          </label>
          <label>
            Enter the name: 
      
          <input 
          type='text' 
          name='name' 
          value={user.name}
          onChange={handleOnChange}
          />
          </label>
           <br></br>
           <br></br>
           <label>
            Enter the Course Name: 
           <input 
          type='text' 
          name='course' 
          value={user.course}
          onChange={handleOnChange}
          />
           </label>
          
           <br></br>
           <br></br>
          <input type='submit' 
          
          value='Submit'/>
        </form>
        <ul>

         <img src={user.file} alt=''/>
          <li>{user.name}</li>
          <li>{user.course}</li>
        </ul>
    </div>
  )
}
