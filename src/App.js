import { BrowserRouter, Route, Routes} from "react-router-dom"

import LoginPage from './components/LoginPage'
import SinupPage from './components/SinupPage'
import React from 'react';

import './App.css'







const App = () => (
    
    
  <div>
    <BrowserRouter>
          <LoginPage />
       <Routes>
                
       <Route path="/signupPage" element={<SinupPage />} />

                 
        </Routes>
     </BrowserRouter>
     </div>
        
  
  )
  

export default App;
  

