import axios from "axios";
import {  slice } from "lodash";
import { createContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


export let SharedAllDataContext = createContext()


export function SharedAllDataContextProvider(props){


let [type,setType]=useState("pc")

const[PlatformPlay,setPlatPlay]=useState([])
let[isComplate,setComplated]=useState(false)
let[loading,setLoading]=useState(false)
let [index,setIndex]=useState(20)
let initialPlateList=slice(PlatformPlay,0,index)


let seeMore = ()=>{
    setIndex(index+20)

    if(setPlatPlay.length>=index){
        setComplated(false)
    }
    else{
        setComplated(true)
    }
}

function changePlateType(typeCat){

  setType(typeCat)

}

useEffect(()=>{
  getPlatformData(type)

},[type])

useEffect(()=>{
  getPlatformData(type)

},[])

async function getPlatformData (catType="pc"){
    setLoading(false)
  let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${catType}`,{
    headers:{
      'X-RapidAPI-Key':
                    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  })


  setPlatPlay(data)
  setLoading(true)
  
}







    return <SharedAllDataContext.Provider  value={{isComplate,seeMore,initialPlateList,loading,changePlateType}}>
    {props.children}
    </SharedAllDataContext.Provider>
}