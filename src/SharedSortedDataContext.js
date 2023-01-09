import axios from "axios";
import {  slice } from "lodash";
import { createContext, useEffect, useState } from "react";


export let SharedSortedContext= createContext()

export function SharedStoredProvider(props){




    let [type,setType]=useState("release-date")

    const[SortedPlay,setSortedPlay]=useState([])
    let[isComplate,setComplated]=useState(false)
    let[loading,setLoading]=useState(false)
    let [index,setIndex]=useState(20)
    let initialSortedList=slice(SortedPlay,0,index)

    let seeMore = ()=>{
        setIndex(index+20)
    
        if(SortedPlay.length>=index){
            setComplated(false)
        }
        else{
            setComplated(true)
        }
    }


    function changeSortedType(typeCat){

        setType(typeCat)
    }

    useEffect(()=>{
        getSortedData(type)
      
      },[type])
      
      useEffect(()=>{
        getSortedData(type)
      
      },[])
      
      async function getSortedData (catType="release-date"){
          setLoading(false)
        let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${catType}`,{
          headers:{
            'X-RapidAPI-Key':
                          'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        })
      
      
        setSortedPlay(data)
        setLoading(true)
        
      }









    return <SharedSortedContext.Provider value={{isComplate,seeMore,initialSortedList,loading,changeSortedType}}>
        {props.children}
    </SharedSortedContext.Provider>

}