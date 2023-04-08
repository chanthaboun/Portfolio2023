import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../Routes/Home'
// import Education from '../Routes/Education'
import Contact from "../Routes/Contact"
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import Course from './Course';
import Register from '../Pages/Register';

function RoutePage() {
      return (
            <BrowserRouter>
                <Navbar/>
                  <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/course' element={<Course/>} />
                        {/* <Route path='/education' element={<Education />} /> */}
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/register' element={<Register/>}/>
                  </Routes>
               <Footer/>
            </BrowserRouter>
      )
}

export default RoutePage