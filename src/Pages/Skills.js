import React from 'react'
import { Box, Typography } from '@mui/material';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Container } from '@mui/system';
import Image from '../logo_image/dev2@0.75x.png'
import '../../src/App.css'

function Skills() {
  const [text] = useTypewriter({
    words: ['Programing skills', 'What I know'],
    loop: {},
    typeSpeed: 20,
    delaySpeed: 590,
  })
  return (
    <Box sx={{ backgroundColor: '#725bb0', marginTop: 5 }}>
      <Typography textAlign={'center'} paddingTop='20px' fontSize={40} color='#fff'>
        {text}
        <Cursor cursorColor='green' />
      </Typography>
      <Container maxWidth='lg'>
        <Box display={'flex'}>
          <Box flex={1}>
            <Typography fontFamily={"'Edu NSW ACT Foundation', cursive"} color='#fff' fontWeight={10}>
              <i>
                I have experiences of creating website such as: webblogs, netflix<br />
                website, E-commerce website, portfolio website and web application.<br />
                Moreover, I had built a project about register system<br />
                by using PHP, MySQL and MyAddmin.....<br />
              </i>
            </Typography>
            <Box>
              <img src={Image} alt='animation' width={300} height={250} />
            </Box>
          </Box>
          <Box flex={1}>
          <div  className="container" >
            {/* <h1 className='title-text'>Skills</h1> */}
              <div className='skill-box'>
                  <span className='title'>HTML</span>
                  <div className='skill-bar'>
                      <span className='skill-per html'>
                          <span className='tooltip'>90%</span>
                      </span>
                  </div>
              </div>
              <div className='skill-box'>
                  <span className='title'>CSS</span>
                  <div className='skill-bar'>
                      <span className='skill-per css'>
                          <span className='tooltip'>70%</span>
                      </span>
                  </div>
              </div>
              <div className='skill-box'>
                  <span className='title'>JavaScript</span>
                  <div className='skill-bar'>
                      <span className='skill-per javascript'>
                          <span className='tooltip'>60%</span>
                      </span>
                  </div>
              </div>
              <div className='skill-box'>
                  <span className='title'>PHP</span>
                  <div className='skill-bar'>
                      <span className='skill-per php'>
                          <span className='tooltip'>50%</span>
                      </span>
                  </div>
              </div>
              <div className='skill-box'>
                  <span className='title'>MySQL</span>
                  <div className='skill-bar'>
                      <span className='skill-per mysql'>
                          <span className='tooltip'>30%</span>
                      </span>
                  </div>
              </div>
              <div className='skill-box'>
                  <span className='title'>React JS</span>
                  <div className='skill-bar'>
                      <span className='skill-per reactjs'>
                          <span className='tooltip'>40%</span>
                      </span>
                  </div>
              </div>
          </div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Skills