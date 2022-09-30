import React, { useEffect } from 'react';
import Header from "./Header";
// import BeachesContainer from "./BeachesContainer";
import Search from "./Search";
import UserProfile from "./UserProfile";

const App = () => {
  // check alt file for key
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
  }, [])


  return (
    <div className="App">
      <Header /> 
      <Search /> 
      <UserProfile />
      {/* <BeachesContainer /> */}
    </div>
  );
}

export default App;
