import React from 'react';
import './App.css';
import {Profile} from './profile/profile'


function App() {
  const styleObject={ border:" 2px solid black" ,};
  function handleName(name){
      alert(name);
  }
  return (
    <>
    <Profile style={styleObject} fullName="Andrew" bio="" profession="" alertName={handleName} >
      <img  style={styleObject} src="images/img1.png" alt="profileImage" />
      <br></br>
      <img  style={styleObject} src="images/img3.webp" alt="profileImage" />
    </Profile>
    </>
  );
}

export default App;
