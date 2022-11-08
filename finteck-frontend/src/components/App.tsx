import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import BeachesContainer from "./BeachesContainer";
import Search from "./Search";
import UserProfile from "./UserProfile";
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
  const [beachesData, setBeachesData] = useState([])

  useEffect(() => {
    const fetchBackendData = async () => {
      const dataFromBackend = await fetch(`http://localhost:5000/beaches`)
      const jsonifiedBackendData = await dataFromBackend.json()
      setBeachesData(jsonifiedBackendData);
    }
    fetchBackendData();
  }, [])

  return (
    <div className="App">
      <Router>
      <Header /> 
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='./login' element={ <Login  />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
          <>
            <BeachesContainer beachesData={beachesData}  />
            <Search /> 
          </>
      </Router>
    </div>
  );
}

export default App;
