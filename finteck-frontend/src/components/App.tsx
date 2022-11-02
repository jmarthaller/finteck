import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import BeachesContainer from "./BeachesContainer";
import Search from "./Search";
import UserProfile from "./UserProfile";
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
  const [backendData, setBackendData] = useState([])
  // const NOAA_KEY = undefined; // key stored locally

  // useEffect(() => {
  //   const fetchDataOnLaunch = async () => {
  //     const datasetData = await fetch(
  //       `https://www.ncei.noaa.gov/cdo-web/api/v2/datacategories?offset=20`,
  //       {
  //         headers: {
  //           token: `${NOAA_KEY}`,
  //         },
  //       }
  //     );
  //     const jsonifiedData = await datasetData.json();
  //     console.log(jsonifiedData);
  //   }
  //   fetchDataOnLaunch();
  // }, [NOAA_KEY])

  useEffect(() => {
    const fetchBackendData = async () => {
      const dataFromBackend = await fetch(`http://localhost:5000/beaches`)
      const jsonifiedBackendData = await dataFromBackend.json()
      setBackendData(jsonifiedBackendData);
    }
    fetchBackendData();
  }, [])

  console.log("Backend Data: ", backendData)

  return (
    <div className="App">
      <Header /> 
      <Router>
        <Routes>
          <Route path="/"  element={<BeachesContainer />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='./login' element={ <Login  />} />
        </Routes>
          <>
            <Search /> 
            <UserProfile />
          </>
      </Router>
    </div>
  );
}

export default App;
