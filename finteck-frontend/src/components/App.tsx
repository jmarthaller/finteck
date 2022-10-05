import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import BeachesContainer from "./BeachesContainer";
import Search from "./Search";
import UserProfile from "./UserProfile";
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
  // key stored locally
  const NOAA_KEY = undefined;

  useEffect(() => {
    const fetchDataOnLaunch = async () => {
      const datasetData = await fetch(
        `https://www.ncei.noaa.gov/cdo-web/api/v2/datacategories?offset=20`,
        {
          headers: {
            token: `${NOAA_KEY}`,
          },
        }
      );
      const jsonifiedData = await datasetData.json();
      console.log(jsonifiedData);
    }
    fetchDataOnLaunch();
  }, [NOAA_KEY])


  return (
    <div className="App">
      <Router>
        <Routes>
          <Header /> 
          <Route>
            <SignUp />
          </Route>
          <Route>
            <Login />
          </Route>
          <Search /> 
          <UserProfile />
          <BeachesContainer />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
