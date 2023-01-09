



import axios from "axios";
import {  slice } from "lodash";
import { createContext, useEffect, useState } from "react";


export let SharedCatContext=createContext()

 export function SharedCatContextProvider(props){


    let [type,setType]=useState("racing")

    const[catPlay,setCatPlay]=useState([])
let[isComplate,setComplated]=useState(false)
let[loading,setLoading]=useState(false)
let [index,setIndex]=useState(20)
    let catList=slice(catPlay,0,index)


let seeMore = ()=>{
    setIndex(index+20)

    if(catPlay.length>=index){
        setComplated(false)
    }
    else{
        setComplated(true)
    }
}

function changeCatType(typeCat){
  setType(typeCat)
}



useEffect(()=>{
    getCatData(type)

},[type])

useEffect(()=>{
    getCatData(type)

},[])

async function getCatData (catType="racing"){
              setLoading(false)
            let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catType}`,{
                headers:{
                    'X-RapidAPI-Key':
                                  'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                  }
            })
          
          
            setCatPlay(data)
            setLoading(true)
            
          }







          return <SharedCatContext.Provider value={{isComplate,seeMore,catList,loading,changeCatType}} >

         {props.children}
              </SharedCatContext.Provider>
          
}