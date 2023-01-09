import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './allDetails.css'

export default function Alldetails() {

    const [PlayDetails, setDetails] = useState(null)
    const [detailsLoad, setDetalLoad] = useState(false)
    let { id } = useParams()

    useEffect(() => {

        getPlayDetails(id)

    }, [])

    async function getPlayDetails(playId) {
        setDetalLoad(false)
        const { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${playId}`, {
            headers: {
                'X-RapidAPI-Key':
                    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },



        })

        setDetails(data)
        console.log(data);

        setDetalLoad(true)


    }



    return (
        <>



            {detailsLoad ?

                <section className="allDetails">
                    <div className="container my-4">
                        <div className="row">
                            {PlayDetails ? <>
                                <div className="col-md-4">
                                    <div className='my-2'>
                                        <img src={PlayDetails.thumbnail} className='w-100' alt="" />
                                    </div>

                                    <div className='d-flex justfy-content-between align-item-center  my-3 ' >
                                        <div className='col-3  '>
                                            <a href={PlayDetails.freetogame_profile_url}>     <button className=" btn-secondary px-4 shadow shadow-lg btn    ">free</button></a>
                                        </div>
                                        <div className='col-9  '>
                                            <a href={PlayDetails.game_url} target='blank'>
                                                <button className="btn-primary btn col-6  w-100  text-white shadow shadow-lg"><span className='me-3 px-0'>play now </span><i class="fa-solid fa-right-from-bracket text-white px-0"></i></button></a>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-md-8">


                                    <div className="text-start">
                                        <h1 className='text-white mb-'>{PlayDetails.title}</h1>
                                        <h3 className="h5 text-white my-3">aboute {PlayDetails.title}:
                                        </h3>
                                        <p className='text-muted my-3'>{PlayDetails.description}</p>

                                        <h5 className=" text-white my-3">Minimum System Requirements
                                        </h5>

                                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false">
  <div className="carousel-inner">
  <div className="carousel-inner">
   {PlayDetails.screenshots.map((el)=><div className="carousel-item  active" data-bs-interval="2000"  >
      <img src={el.image} className="d-block w-100" alt="..."/>
    </div>
    
    
    
    )}
    
    
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h3 className="text-white my-4">Additional Information
</h3>

<div className="row">
    <div className="col-md-4">
        <div className='text-white'>title</div>
        <div className='text-muted'>{PlayDetails.title}</div>
        <hr />
         <div className='text-white'>Release Date
</div>
        <div className='text-muted'>{PlayDetails.release_date}</div>
    </div>
    <div className="col-md-4">
        <div className='text-white'>Developer</div>
        <div className='text-muted'>{PlayDetails.developer}</div>
        <hr />
         <div className='text-white'>Genre
</div>
        <div className='text-muted'>{PlayDetails.genre}</div>
    </div>
    <div className="col-md-4">
        <div className='text-white'>Publisher</div>
        <div className='text-muted'>{PlayDetails.publisher}</div>
        <hr />
         <div className='text-white'>Platform
</div>
        <div className='text-muted'>{PlayDetails.platform}</div>
    </div>
</div>



  

 





                                        {/* <h6 className='text-white'>graphics : <span className=' my-2 text-white'>{PlayDetails.minimum_system_requirements.graphics} </span> </h6  >  */}


                                        {/* عندي مشكله في . & . تقريبا حلها هو ts  */}

                                    </div>

                                </div>


                            </> : ""}

                        </div>
                    </div>
                </section>

                :

                <section className='Loading '>
                    <div ><i className='fa-solid fa-spinner fa-spin text-info fa-2xl '></i>
                    </div>
                </section>

            }
        </>



    )
}
