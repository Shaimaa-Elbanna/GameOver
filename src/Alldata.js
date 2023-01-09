
import axios from 'axios'
import { slice } from 'lodash'
import React, { createContext, useEffect, useState } from 'react'


export let AllmovieContext=createContext()


export function AllMovieContextProvider(props){


let [loading,setLoading]=useState(false)

    let [allMovie,setAll]=useState([])
let [isComplate,setComplated]=useState(false)
let[index,setIndex]=useState(20)
// const inishialLoad=slice(allMovie,0,index)


    useEffect (()=> {
         
        
        getAll()

        
      },[])
    
    
    async function getAll(){
        setLoading(false)

       let {data} =await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?rapidapi-key=b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68`)
        console.log(data.length);
        
    
        setAll(data)
        
        
        setLoading(true)
       


        }
        const inishialLoad=slice(allMovie,0,index)


        const loadMore =()=>{
            setIndex(index+20)
            if(allMovie.length<= index){
                setComplated(true)
            }
            else{
                setComplated(false)
            }


        
    }
   
    




return <AllmovieContext.Provider value={{allMovie,loadMore,inishialLoad,isComplate,loading}} >
    {props.children}

</AllmovieContext.Provider>



}
