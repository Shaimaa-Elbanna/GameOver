import './App.css';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import MasterComponent from './Component/MasterComponent/MasterComponent';
import All from './Component/All/All';
import Category from './Component/Category/Category';
import Platforms from './Component/Platforms/Platforms';
import Signup from './Component/signup/Signup';
import Login from './Component/Login/Login';
import SortedByy from './Component/Sorted-by/SortedByy';
import Notfound from './Component/Notfound/Notfound';
import Home from './Component/Home/Home';
import jwt_decoded from 'jwt-decode';
import { useEffect, useState } from 'react';
import { AllMovieContextProvider } from './Alldata';
import Alldetails from './Component/All/Alldetails/Alldetails';
import { SharedAllDataContextProvider } from './SharedAllDataContext';
import {  SharedCatContextProvider } from './SharedCatDataContext';
import { SharedStoredProvider } from './SharedSortedDataContext';
import PC from './Component/Platforms/PC';
import Browser from './Component/Platforms/Browser';

function App() {
  let [user, setToken] = useState(null)

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      dataDecode()
    }
  }, [])

  function dataDecode() {
    let token = localStorage.getItem("token")
    let data = jwt_decoded(token)
    setToken(data)
    console.log(data);

  }


  function RoutinGaurd(props) {

    if (localStorage.getItem("token") != null) {
      return props.children
    }
    else {
      return <Navigate to='/login' />

    }



  }
  function logout() {
    setToken(null)

    localStorage.removeItem("token")
    return <Navigate to="/login" />

  }

  let routing = createHashRouter([
    {
      path: "/", element: <MasterComponent user={user} logout={logout} />, children: [
        { path: "/", element: < RoutinGaurd><Home /></RoutinGaurd> },
        { path: "home", element: < RoutinGaurd><Home /></RoutinGaurd> },
        { path: "all", element: < RoutinGaurd><All /></RoutinGaurd> },
        { path: "platforms", element: < RoutinGaurd><Platforms /></RoutinGaurd> ,children:[
          { path: "pc", element: < RoutinGaurd><PC /></RoutinGaurd> },
          { path: "browser", element: < RoutinGaurd><Browser /></RoutinGaurd> },
        ]},
       

        { path: "category", element: < RoutinGaurd><Category /></RoutinGaurd> },
        { path: "sortedby", element: < RoutinGaurd><SortedByy /></RoutinGaurd> },

        { path: "alldetails/:id", element: < RoutinGaurd><Alldetails /></RoutinGaurd> },

        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login tokenDecoded={dataDecode} /> },
        { path: "*", element: <Notfound /> },
      ]
    }
  ])






  return (
    <div className="App">

      <SharedCatContextProvider>
     

     <SharedStoredProvider>
      <SharedAllDataContextProvider>
      <AllMovieContextProvider>
        
        <RouterProvider router={routing} />

      </AllMovieContextProvider>
    

</SharedAllDataContextProvider>   
</SharedStoredProvider>

</SharedCatContextProvider>
    </div>
  );
}

export default App;
