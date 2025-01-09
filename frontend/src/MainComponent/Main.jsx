import React from 'react'
import"./main.css";
import Hamburger from 'hamburger-react'

export default function Main() {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <div className='main--tag'>
      <div className='heading--tag--main'>
       <h1 className='header--tag text-center'>Welcome to Certificate Generator System</h1>
      </div>
      <div   className="hamburger--tag" >

        <Hamburger 
        toggled={isOpen} 
        toggle={setOpen} 
        
        />
        </div>
        <div className=' text-center navigation--tag--main '>
     <h1 >Hello</h1>
        </div>
    </div>
  )
}
