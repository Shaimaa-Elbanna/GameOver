

import axios from 'axios'
import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import gameImg from '../../img/gaming.ebaf2ffc84f4451d.jpg'
import Joi from 'joi'



export default function Signup() {
  let[FnErr,setFnErr]=useState("")
let[LnErr,setLnErr]=useState("")
let[EmailErr,setEmailErr]=useState("")
let[PasswordErr,setPasswordErr]=useState("")
let[AgeErr,setAgeErr]=useState("")
let navigate=useNavigate()
let [user,setData]=useState(
  {first_name:"",
  last_name:"",
  email:"",
  password:"",
  age:""

})
let [apiErr,setApiErr]=useState("")
let [passwordErr,setpasswordErr]=useState("")
let [validError,setValid]=useState([])




  function userData(e){
    user={...user}
    user[e.target.name]=e.target.value
setData(user)



  }
 async function saveData(e){

  e.preventDefault()

  let valid=dataValidation()
  
  if (valid.error==null) {

    


    let {data} =await axios.post(`https://sticky-note-fe.vercel.app/signup`,user)

    if (data.message === "success"){
      navigate('/login')
    }
    else{
      setApiErr(data.message)
      

    }
    
    
  }
  else{

    valid.error.details.forEach( (el)=>{
      if(el.path[0]==='password'){
        setpasswordErr(el.message)
      }
      setValid(valid.error.details)
    } )

    valid.error.details.forEach( (el)=>{
      if(el.path[0]==="first_name"){
        setFnErr(el.message)
      }
    })
// LastNAme VAlid 
valid.error.details.forEach((el)=>{
 if( el.path[0]=== "last_name"){
  setLnErr(el.message)

 }
})
// Age valid 
valid.error.details.forEach((el)=>{

  if(el.path[0]==="age"){
    setAgeErr(el.message)
  }

})
// email VAlid 

valid.error.details.forEach((el)=>{
  if(el.context.key==='email'){
    setEmailErr(el.message)
  }
})

    

  }

 
 


  }


function dataValidation(){
  let scheme = Joi.object({
    first_name:Joi.string().required().min(2).max(10).alphanum(),
    last_name:Joi.string().required().min(2).max(10).alphanum(),
    password:Joi.string().required().pattern(new RegExp(('^[A-Z][a-z]{2,5}[1-9]?$'))),
    age:Joi.number().required().min(16).max(50),
    email:Joi.string().required().email({tlds:{allow:['com','net']}})

    
  })
  return scheme.validate(user, {abortEarly:false})
  
}


  return (

    <div> 
       <div className="container my-5">
    <div className="shadow shaodow-lg">
    <div className='row g-0'>
      <div className="col-md-6">
<img src={gameImg} className='w-100 h-100' alt="" />
      </div>
      <div className="col-md-6 pt-3 justfy-content-center itemC brd overflow-auto">
        <div className="item container ">
        <h2 className="h4 text-muted fw-bolder py-2" >Create My Account!
</h2>


<form onSubmit={saveData}>
<div className="row">
<div className="col-6">

<input onKeyUp={userData} type="text" name='first_name' id='first_name' className='text-muted form-control t deepDark formbrd ' placeholder='First Name ' />
{FnErr?<div className='alert alert-info mt-2 p-1'>{FnErr}</div>: ""}

</div>

<div className="col-6">
<input onKeyUp={userData} type="text" name='last_name' id='last_name' className='text-muted  form-control  deepDark formbrd' placeholder=' Last Name' />

{LnErr?<div className='alert alert-info mt-2 p-1'>{LnErr}</div>: ""}



</div>

</div>
<input onKeyUp={userData} type="text" name='email' id='email' className='text-muted form-control t me-2 deepDark formbrd my-3 ' placeholder='Enter email ' />

{EmailErr?<div className='alert alert-info mt-2 p-1'>{EmailErr}</div>: ""}

<input onKeyUp={userData} type="password" name='password' id='password' className='text-muted form-control t me-2 deepDark formbrd my-3 ' placeholder='Enter password ' />

{PasswordErr?<div className='alert alert-info mt-2 p-1'>Not valid Password</div>: ""}



 
<input onKeyUp={userData} type="text" name='age' id='age' className='text-muted form-control t me-2 deepDark formbrd my-3 ' placeholder='Enter age' />


{AgeErr?<div className='alert alert-info mt-2 p-1'>{AgeErr}</div>: ""}





{apiErr? <div className='alert bg-white p-0 mt-2'>{apiErr}</div>:""}





<button className="btn coloring btnbrd text-white w-100 py-2" > Create Account</button>
</form>

<p className="text-muted py-2">This site is protected by reCAPTCHA and the Google <a className='text-muted' href="https://policies.google.com/privacy">Privacy Policy</a> and <a className='text-muted' href="https://policies.google.com/terms">terms</a>  of<a className='text-muted' href="https://policies.google.com/terms"> Service apply</a> .
</p>


<br />

<p className="text-muted text-center ">Already a member? <Link to='/login' className='text-primary'>Log in</Link></p>
 
        </div>

      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
