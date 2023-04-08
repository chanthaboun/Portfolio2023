import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import Image from '../logo_image/canva.png'
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box sx={{ border: 'solid 10px #fff' }} >
      <Container maxWidth='lg'>
        <Box display={'flex'} marginTop='20px'>
          <Box flex={2}>
            <Typography marginLeft={30}><i><b>Get in touch</b></i></Typography>
            <Typography sx={{fontFamily: "'Marck Script', cursive;"}}><i>Thank you very much for visting my website If you want to know more about me you can directly</i></Typography>
            <Typography marginLeft={15} sx={{fontFamily: "'Marck Script', cursive;"}}><i>contact me or email me I'm very presure to respon you.</i></Typography>
          </Box>
          <Box flex={1} paddingLeft={30}>
            <img src={Image} alt='bgimage' width={150} height={150} className='bgborder' />
            <Typography color='#725bb0' variant='h5' sx={{fontFamily: "'Marck Script', cursive;"}}><i>Chanthaboun</i> <b>Wang</b></Typography>
            <Box marginTop={3} marginLeft={3}>
              <Box display={'flex'}>
                <Box className='facebook_color'>
                  <FacebookIcon />
                </Box>
                <Box className='youtube_color'>
                  <YouTubeIcon />
                </Box>
                <Box className='instagram-color'>
                  <InstagramIcon />
                </Box>
              </Box>
                <Typography>My Social Media</Typography>
            </Box>
          </Box>
        </Box>
        <Box display={'flex'} marginTop={-10}>
          <Box flex={1}>
            <Box marginLeft={5}>
              <AssignmentIndIcon />
            </Box>
            <Typography marginLeft={4}>Name:</Typography>
            <Typography>ChanThaboun Wang</Typography>
          </Box>
          <Box flex={2} marginLeft={-20}>
            <Box marginLeft={5}>
              <PinDropIcon />
            </Box>
            <Typography marginLeft={4}>Address:</Typography>
            <Typography>PhongSaly province,Laos</Typography>
          </Box>
          <Box flex={2} marginLeft={-60}>
            <Box marginLeft={5}>
              <EmailIcon />
            </Box>
            <Typography marginLeft={4}>Email:</Typography>
            <Typography>Chanthaboun753@gmail.com</Typography>
          </Box>
        </Box>
      </Container>
      <Typography textAlign={'center'} paddingTop={6} sx={{fontFamily: "'Marck Script', cursive;"}} className='text'>Copyright <b color='red'>@</b>by WangJing in <b>2023</b></Typography>
    </Box>
  )
}

export default Footer