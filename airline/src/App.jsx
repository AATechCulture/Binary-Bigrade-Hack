import React from 'react';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/navbar';
import Support from './Components/Support/Support';
import Info from './Components/Info/Info';
import Longue from './Components/Longue/Longue';
import Travelers from './Components/Travelers/Travelers';
import Subscribe from './Components/Subscribers/Subscribers';

const App = () => {
  return (
    <div>
       <Navbar/>
       <Home/>
       <Search/>
       <Support/>
       <Info/>
       <Longue/>
       <Travelers/>
       <Subscribe/>
    </div>
  )
}

export default App;