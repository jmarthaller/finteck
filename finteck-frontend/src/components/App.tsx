import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header from "./Header";
import BeachesContainer from "./BeachesContainer";
import Search from "./Search";
import UserProfile from "./UserProfile";
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
  const [beachesData, setBeachesData] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBackendData = async () => {
      const dataFromBackend = await fetch(`http://localhost:5000/beaches`)
      const jsonifiedBackendData = await dataFromBackend.json()
      setBeachesData(jsonifiedBackendData);
    }
    fetchBackendData();
  }, [])


  const searchedBeaches = beachesData.filter((beach) => {
    return beach.name.toLowerCase().includes(search.toLowerCase());
  })



  return (
    
      <div className="App">
        <Box bg='#254E81' w='100%' h='12%' p={4} color="white">
          <Router>
          <Header /> 
            <Routes>
              <Route path='/signup' element={<SignUp />} />
              <Route path='./login' element={ <Login  />} />
              <Route path="/profile" element={<UserProfile />} />
                <Route path='/' element={<BeachesContainer searchedBeaches={searchedBeaches} />}   />
            </Routes>
                <Search search={search} setSearch={setSearch} />
          </Router>
        </Box>
      </div>

  );
}

export default App;
