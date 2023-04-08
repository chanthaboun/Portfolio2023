import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import Image from '../logo_image/Animation1.gif'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import ImageProject1 from "../logo_image/Project1.jpg"
import ImageProject2 from "../logo_image/Project2.jpg"
import ImageProject3 from "../logo_image/Project3.jpg"
import ImageProject4 from "../logo_image/Project4.jpg"
import ImageProject5 from "../logo_image/Project5.png"


function Project() {
      const [text] = useTypewriter({
            words: ['What I use to do!', 'Project'],
            loop: {},
            typeSpeed: 10,
            delaySpeed: 600,
          })
      return (
            <Box sx={{ background: '#725bb0', marginTop: 3 }}>
                  <Container maxWidth='xl' sx={{marginLeft: 5}}>
                        <Typography variant='h3' textAlign={'center'} paddingTop='20px' color={'white'}>
                              {text}
                              <Cursor/>
                        </Typography>
                        <Box display={'flex'} marginTop="20px">
                              <Box flex={1} >
                                    <Card sx={{ width: 390, background: '#342287'}} className='Effect_Card'>
                                          <CardContent>
                                                <img src={ImageProject1} alt='image1' width={350} height={200}/>
                                                <Typography textAlign={'center'} color='#fff'>Using Reactjs & Node js, API</Typography>
                                          </CardContent>
                                    </Card>
                              </Box>
                              <Box flex={1}>
                                    <Card sx={{ width: 390, background: '#342287' }}  className='Effect_Card'>
                                          <CardContent>
                                                <img src={ImageProject2} alt='image1' width={350} height={200}/>
                                                <Typography textAlign={'center'} color='#fff'>Using html, CSS & Javascript</Typography>
                                          </CardContent>
                                    </Card>
                              </Box>
                              <Box flex={1}>
                                    <Card sx={{ width: 390, background: '#342287' }} className='Effect_Card'>
                                          <CardContent>
                                                <img src={ImageProject3} alt='image1' width={350} height={200}/>
                                                <Typography textAlign={'center'} color='#fff'>Using boostrap, html & Javascript</Typography>
                                          </CardContent>
                                    </Card>
                              </Box>
                        </Box>
                        <Box display={'flex'} marginTop='30px'>
                              <Box flex={1}>
                                    <Card sx={{ width: 390, background: '#342287' }} className='Effect_Card'>
                                          <CardContent>
                                                <img src={ImageProject4} alt='image1' width={350} height={200}/>
                                                <Typography textAlign={'center'} color='#fff'>Using Reactjs & Node js</Typography>
                                          </CardContent>
                                    </Card>
                              </Box>
                              <Box flex={1}>
                                    <Card sx={{ width: 390, background: '#342287' }} className='Effect_Card'>
                                          <CardContent>
                                                <img src={ImageProject5} alt='image1' width={350} height={200}/>
                                                <Typography textAlign={'center'} color='#fff'>Using html,CSS, Javascript & Node js </Typography>
                                          </CardContent>
                                    </Card>
                              </Box>
                              <Box flex={1}>
                                    <Card sx={{ width: 390, background: '#342287' }} className='Effect_Card'>
                                          <CardContent>
                                                <img src={Image} alt='image1' width={350} height={200}/>
                                                <Typography textAlign={'center'} color='#fff'>There is no project yet</Typography>
                                          </CardContent>
                                    </Card>
                              </Box>
                        </Box> 
                  </Container>
            </Box>
      )
}

export default Project