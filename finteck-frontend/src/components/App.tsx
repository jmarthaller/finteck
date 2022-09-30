// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from "./Header";
// import BeachesContainer from "./BeachesContainer";
import Search from "./Search";
import UserProfile from "./UserProfile";

function App() {



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
