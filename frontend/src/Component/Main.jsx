import React from 'react'
import axios from 'axios';
export default function Main() {
const [data,setData]=React.useState('');
  React.useEffect(()=>{
    axios.get("http://127.0.01:5000/")
    .then(response=>{
      setData(response.data.message);
    }).catch(error=>{
      console.log("Error as occurred"+error)
    })
  })
  return (
    <div>
        <p>
        {data}
        </p>
    </div>
  )
}
