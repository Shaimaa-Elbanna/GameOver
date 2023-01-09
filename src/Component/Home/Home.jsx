import { slice } from 'lodash'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AllmovieContext } from '../../Alldata'
import './Home.css'
// import 'Home.css'

export default function Home() {


  let{allMovie}=useContext(AllmovieContext)
  let index=83
  let popular=slice(allMovie,80,index)




  return (
    <>
      <header className='home'>
        <div className="homeOverlay h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="header-content  ">
            <h2 className="text-muted fw-bolde py-3">Find & track the best <span className="text-info fw-bolde">free-to-play</span> games!
            </h2>
            <p className="text-muted py-3">Track what you've played and search for what to play next! Plus get free premium loot!


            </p>
            <button className="btn btn-outline-info my-2">Browser Game</button>
          </div>

        </div>
      </header>


      <section className="items my-4 container">
<div className="d-flex">
        <h3 className='  text-muted'>  <span><i className="fa-solid fa-robot">  </i></span>  Personalized Recommendations
        </h3>
        </div>
        <div className="row">
        {popular.map((el, i) =>

<div className="col-md-4" key={i}>


  <Link to={'/alldetails/' + el.id} >


    <div className="item shadow shadow-lg ">
      <img src={el.thumbnail} className='w-100' alt="" />
      <div className="mainItemColor  ">
        <div className="d-flex justfy-content-start align-item-center my-2   ">

          <div className="col-md-9  ">
            <h3 className='text-muted  h4 text-start ms-2  '>{el.title.length > 15 ? el.title.substring(0, 12) + '...' : el.title}</h3>
          </div>
          <div className="col-md-3">
            <button className="btn btn-info btn-sm">free</button>
          </div>
        </div>


        <div className='col-md-12 text-muted text-start my-3 '>

          <p className='ms-2'>   {el.short_description.length > 28 ? el.short_description.substring(0, 28) + '...' : el.short_description}
          </p>
        </div>
        <div className="row d-flex justfy-content-between overflow-hidden">
          <div className="col-md-6  text-start ms-2  my-1 ">
            <i class="fa-sharp fa-solid fa-square-plus fa-lg m-2  itemtext"></i>
          </div>


          <div className="col-md-5  genreDiv   d-flex  justify-content-between align-items-center ">
            <span class="badge text-dark  bg-secondary col-10 me-auto px-0 ">{el.genre}</span>


            <i class="fa-brands fa-windows fa-md m-2 w-25 itemtext col-2"></i>






          </div>
        </div>






      </div>

    </div>
  </Link>

</div>


)}
        </div>
        


      </section>
    </>

  )
}
