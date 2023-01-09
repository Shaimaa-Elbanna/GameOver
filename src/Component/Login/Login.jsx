import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gameImg from '../../img/gaming.ebaf2ffc84f4451d.jpg'
import logo from '../../img/logo.png'

export default function Login({ tokenDecoded }) {
  let navigate = useNavigate()
  let [savedData, setData] = useState(
    {
      email: "",
      password: ""
    }
  )
  let [apiErr, setapiErr] = useState("")
  let [EmailErr, setEmailErr] = useState('')


  function submitData(e) {
    savedData = { ...savedData }
    savedData[e.target.name] = e.target.value
    setData(savedData)
    console.log(savedData);
  }

function checkValidation(){
  

  let valid = validation()
  if (valid.error == null) {
    apiSubmit()

    }
    else {
      valid.error.details.forEach((el)=>{
       if(el.path[0]==='email'){
         setEmailErr(el.message)
       }
      })
 
     }

}


  async function apiSubmit(e) {

    
    e.preventDefault()
    let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signin`, savedData)
    console.log(data);
    if (data.message === "success") {
      localStorage.setItem("token", data.token)
      navigate("/home")
      tokenDecoded()


    }
    else {
      setapiErr(data.message)
    }


  }


  function validation() {
    let scheme = Joi.object({


      email: Joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),

      password: Joi.string().required().pattern(new RegExp('^[A-Z][a-z]{2,10}[0-9]?$'))

    })
    return scheme.validate(savedData, { abortEarly: false })
  }





  return (
    <div className="container my-5">
      <div className="shadow shadow-lg">
        <div className='row g-0'>
          <div className="col-md-6">
            <img src={gameImg} className='w-100 h-100' alt="" />
          </div>
          <div className="col-md-6 pt-3 justfy-content-center itemC ">
            <div className="item container ">
              <img src={logo} className='col-2 py-3' alt="" />
              <h2 className="h4 text-muted fw-bolder py-2" >Log in to GameOver
              </h2>
              <form onSubmit={apiSubmit}>
                <div className="">
                  <input type="text" id='email' name='email' className='form-control w-75 m-auto my-3 ' onChange={submitData} placeholder='Email' />
                 
                  {EmailErr?<div className='alert alert-info mt-2 p-1 w-75 m-auto'>{EmailErr}</div>: ""}
                  <input type="password" id='password' name='password' className='form-control w-75 m-auto   
                  my-3  ' onChange={submitData} placeholder='Password' />
                           

                  {/* {apiErr ? <div className='alert bg-white p-0 mt-2 w-100'>{apiErr}</div> : ""} */}

                </div>


                <button className="btn coloring w-75 m-auto btnbrd text-white my-2">Login</button>


                <br />

                <p className='text-primary my-2'>Forget Password</p>
                {/* <a href="#" className='text-primary'>Forget Password</a>  */}
                {/* في استحفاف هنا */}

                <p className="text-muted mb-5">Not a member yet? <Link to='/signup' className='text-primary' >Create Account</Link></p>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
