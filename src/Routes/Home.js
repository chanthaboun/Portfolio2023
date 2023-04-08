import React from 'react'
import { Container, Box, Button } from '@mui/material'
import { Typography, Avatar } from '@mui/material'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from "../logo_image/Picture.png"
import Aboutme from './Aboutme';
import Project from '../Pages/Project'
import Skills from '../Pages/Skills'
import Experience from '../Pages/Experience'
import { useNavigate } from 'react-router-dom';


function Home() {

  const  navigate = useNavigate();
  const  handleNavigate = (path) =>{
    navigate(path)
  }

  const [text] = useTypewriter({
    words: ['Devloper!', 'Designer!', 'Photographer!'],
    loop: {},
    typeSpeed: 300,
    delaySpeed: 600,
  })


  return (
    <>
      <Box sx={{ background: '#725bb0', height: 500, color: '#fff' }}>
        <Container maxWidth='xl' sx={{ display: 'flex' }}>
          <Box flex={2} sx={{ marginTop: 10, marginLeft: 10 }} >
            <Avatar
            className='Effect_background' 
              src={Image}
              sx={{
                width: 300,
                height: 300,
              }}
            />
          </Box>
          <Box marginTop={15} flex={2}>
            <Typography variant='h5' 
             sx={{ fontFamily: "'Shrikhand', cursive", paddingLeft: 8 }}
             className='text_name'
             ><i>Hello, My name is</i></Typography>
            <h1 style={{ paddingLeft: 50 }}><i>wang</i>  LAOVONG</h1>
            <h1 style={{ paddingLeft: 60 }}>
              <i>
                I'm a {' '}
              </i>
              <i style={{ fontWeight: 'bold', color: 'red' }}>
                {text}
              </i>
              <span style={{ color: 'red' }}>
                <Cursor cursorStyle="<" />
              </span>
            </h1>
            <Box>
              <Typography><i>knack of building web-application with front and back end operations</i></Typography>
            </Box>
            <Box paddingTop={2} paddingLeft={20}>
              <Button variant='contained' onClick={() => handleNavigate('/contact')}>Hire me</Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Aboutme />
      </Box>
      <Box>
        <Project/>
      </Box>
      <Box>
        <Experience/>
      </Box>
      <Box>
        <Skills/>
      </Box>
    </>
  )
}

export default Home