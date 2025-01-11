  import React from 'react'
  import"./main.css";
  import NavigationBar from "./NavigationBar";
  import Form from "../Component/Main"
  export default function Main() {


    return (
      <div className='flex flex-row p-10'>
      
        <NavigationBar/>
        <div className='container main--container'>
            <h1 className='heading--tag text-center'>Welcome To Certificate Generator System</h1>
            <Form/>
        </div>
      </div>
    )
  }
