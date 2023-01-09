import React  from 'react'
import { useEffect } from 'react'
import { useContext} from 'react'
import { Link } from 'react-router-dom'
import { SharedCatContext } from '../../SharedCatDataContext'

export default function Category() {

 
  // let {isComplate,seeMore,initialCatList,loading}=useContext(SharedCatContext)
  let{isComplate,seeMore,catList,loading}=useContext(SharedCatContext)
  useEffect(()=>{
    console.log(catList);
  },[])
  return (
    < >
    {loading? 

<section className='All '>
<div className="container my-3">
  <div className="row g-4">
    {  catList?.map((el, i) =>

<div className="col-md-3" key={i}>


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









)
    }
    
    </div>
    {isComplate ?
    <button className="btn btn-outline-info col-md-3 bg-danger my-4" onClick={seeMore}> that's it</button>

    :
    <button className="btn btn-outline-info col-md-3 my-4 " onClick={seeMore}> See More</button>
  }
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
