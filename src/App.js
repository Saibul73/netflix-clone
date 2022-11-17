import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/banner/Banner';
import Rowpost from './Components/RowPost/RowPost';
import './App.css';
import React from 'react';
import {action,originals} from './urls'

function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />
    </div>
    

  );
}

export default App;
