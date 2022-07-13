
import React from "react";
import { BrowserRouter, Route,Routes} from 'react-router-dom';

import Title from "./Title.js"
import Footer from "./Footer.js"
import Home from "./Home.js";




const App = () => {
  
  return (

    
      <BrowserRouter basename="/ReactMovieDB">
       <Routes>
           
           

             
             <Route path="/" element={ <Home /> } />
           
           
       </Routes>
       </BrowserRouter>
      
          
          

      
  );
};

export default App;

