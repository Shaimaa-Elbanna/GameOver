import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
import { SharedAllDataContext } from '../../SharedAllDataContext'
import { SharedCatContext } from '../../SharedCatDataContext'
import { SharedSortedContext } from '../../SharedSortedDataContext'
import './Navbar.css'


export default function Navbar({user,logout}) {

  let {changeCatType}=useContext(SharedCatContext)
  let {changeSortedType}=useContext(SharedSortedContext)
  let {changePlateType}=useContext(SharedAllDataContext)





  return (
    <>
    <nav className="navbar navbar-expand-lg navColor shadow shadow-lg  p-3">
  <div className="container">
    <div className="d-flex col-3 justfy-content-center">
    <img src={logo} className='w-25' alt="" />
    <Link className="navbar-brand text-white" to="home">Game over</Link>
   
    </div>
   

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

{user?
<> <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive}) =>isActive?"nav-link text-white text-white active ":"nav-link text-white text-white"} aria-current="page" to="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link text-muted active":"nav-link text-muted"} to='all'>All</NavLink>
        </li>
       


        <li className="nav-item dropdown">
          
          <NavLink className={({isActive})=>isActive?"nav-link text-muted active dropdown-toggle":"nav-link text-muted dropdown-toggle"}  to='platforms' >
            Platforms
          </NavLink>
          <ul className="dropdown-menu hovrable">
            
            <li> 
             <Link className='dropdown-item' to= 'platforms'  onClick={()=>{changePlateType("pc")}} >PC</Link></li>
          
             <li>  <Link  className='dropdown-item' to='platforms' onClick={()=>{changePlateType("browser")}}  >Browser</Link></li>
           
          </ul>
        </li>



        <li className="nav-item dropdown">
          <NavLink className={({isActive})=>isActive?"nav-link text-muted active dropdown-toggle":"nav-link text-muted dropdown-toggle"}   to='sortedby'  >
            Sorted By
          </NavLink>
          <ul className="dropdown-menu ">
          <li>  <Link  className='dropdown-item' to='sortedby' onClick={()=>{changeSortedType("release-date")}}   >release-date</Link></li>
          <li>  <Link  className='dropdown-item' to='sortedby' onClick={()=>{changeSortedType("popularity")}}   >popularity</Link></li>
          <li>  <Link  className='dropdown-item' to='sortedby' onClick={()=>{changeSortedType("alphabetical")}}  >alphabetical</Link></li>
          <li>  <Link  className='dropdown-item'  to='sortedby' onClick={()=>{changeSortedType("relevance")}}  >relevance</Link></li>
            
           
          </ul>
        </li>




    


        <li className="nav-item dropdown">
        <NavLink className={({isActive})=>isActive?"nav-link text-muted active dropdown-toggle":"nav-link text-muted dropdown-toggle"}   to='category'  >
           Category
          </NavLink>
          <ul className="dropdown-menu">
          <li>  <Link  className='dropdown-item' to='category'  onClick={()=>{changeCatType("racing")}}  >racing</Link></li>
          <li>  <Link  className='dropdown-item' to='category'  onClick={()=>{changeCatType("sports")}}>sports</Link></li>
          <li>  <Link  className='dropdown-item' to='category'  onClick={()=>{changeCatType("social")}}  >social</Link></li>
          <li>  <Link  className='dropdown-item' to='category'  onClick={()=>{changeCatType("shooter")}}  >shooter</Link></li>
          <li>  <Link  className='dropdown-item' to='category'  onClick={()=>{changeCatType("open-world")}}  >open world</Link></li>
          <li>  <Link  className='dropdown-item'  to='category'  onClick={()=>{changeCatType("zombie")}} >zombie</Link></li>
          <li>  <Link  className='dropdown-item'  to='category'  onClick={()=>{changeCatType("fantasy")}} >fantasy</Link></li>
          <li>  <Link  className='dropdown-item'  to='category'  onClick={()=>{changeCatType("action-rpg")}} >action rpg</Link></li>
          <li>  <Link  className='dropdown-item'  to='category'  onClick={()=>{changeCatType("action")}} >action</Link></li>
          <li>  <Link  className='dropdown-item' to='category'  onClick={()=>{changeCatType("flight")}}  >flight</Link></li>
          <li>  <Link  className='dropdown-item' to='category'  onClick={()=>{changeCatType("battle-royale")}}  >battle royale</Link></li>
          
            
          </ul>
        </li>
      
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <span className='btn btn-outline-info' onClick={logout}>logout</span>
      </ul>
      </> 
 : 
<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
<li className="nav-item">
    <NavLink className={({isActive})=>isActive?"nav-link text-muted active":"nav-link text-muted"} to='login'>Login</NavLink>   
  </li>
<li className="nav-item">
    <NavLink className={({isActive})=>isActive?"nav-link text-muted active btn btn-outline-info":"nav-link text-muted  btn btn-outline-info "}to='signup'>Join free</NavLink>   
  </li>
</ul> 
 } 

     
     
     
    </div>
  </div>
</nav>
  

    </>
  )
}
