  import React from 'react'
  import"./main.css";
  import Form from "../Component/Main"
  export default function Main() {


    return (
      <div className='flex flex-row p-10'>
        <div className='container main--container'>
            <h1 className='heading--tag text-center'>GENERATE YOUR CERTIFICATE </h1>
            <Form/>
        </div>
      </div>
    )
  }
