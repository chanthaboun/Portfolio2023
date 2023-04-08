import React from 'react'
import {  Box, Container } from '@mui/material/';
import {useNavigate} from 'react-router-dom'
import WangLogo from '.././logo_image/NanbarLogo1.png'

const textStyle = {
  fontsize: 30,
  fontWeight: 200,
  cursor: 'pointer',
  color:'#fff'
}

function Navbar() {
  const  navigate = useNavigate();
  const  handleNavigate = (path) =>{
    navigate(path)
  } 
  return (
    <Box sx={{background: '#725bb0'}}>
       <Container maxWidth='lg'>
          <Box display={'flex'} justifyContent='space-between' alignItems={'center'} >
             <Box display={'flex'}  flex={1} >
               <img src={WangLogo} alt='Logo' width={80} height={100} className='logo_image'/>
               <h1 style={{ marginLeft: -23, marginTop: 35, cursor: 'pointer'}} onClick={() => handleNavigate('/')}>ANG</h1>
             </Box>
             <Box display={'flex'} flex={1} justifyContent='space-between' fontWeight={500} fontFamily={"'Changa One', cursive"}>
               <p style={textStyle} onClick={() => handleNavigate('/')}  className='Navbar_hover'><b>Home</b></p>
               <p style={textStyle} onClick={() => handleNavigate('/course')} className='Navbar_hover'><b>Course</b></p>
               {/* <p style={textStyle} onClick={() => handleNavigate('/education')} className='Navbar_hover'>Education</p> */}
               <p style={textStyle} onClick={() => handleNavigate('/contact')} className='Navbar_hover'><b>Contact</b></p>
             </Box>
          </Box>
       </Container>
    </Box>
  )
}

export default Navbar 