import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import LanguageIcon from '@mui/icons-material/Language';

function Contact() {
  return (
    <>
    <Box sx={{ background: '#725bb0', marginBottom: 5}}>
      <Container maxWidth='lg'>
        <Card sx={{background: '#f0f5f1',}}>
          <CardContent>
            <Box display={'flex'}>
              <Box flex={1} >
                <Typography fontFamily={"'Kaushan Script', cursive;"} 
                fontWeight={500} textAlign='center' 
                paddingTop={5}
                variant='body1'
              ><b>Contact Information</b></Typography>
              <Box paddingTop={5} marginLeft={8}>
                <Box display={'flex'}>
                  <Box className='email_color'>
                    <EmailIcon />
                  </Box>
                  <Typography marginLeft={3} fontFamily={"'Kaushan Script', cursive;"}>Chanthaboun753@gmail.com</Typography>
                </Box>
                <Box display={'flex'} marginTop={2}>
                  <Box className='Phone_color'>
                    <PhoneForwardedIcon />
                  </Box>
                  <Typography marginLeft={3} fontFamily={"'Kaushan Script', cursive;"}>+856-20-98028959</Typography>
                </Box>
                <Box display={'flex'} marginTop={2}>
                  <Box className='whatapp_color'>
                    <WhatsAppIcon />
                  </Box>
                  <Typography marginLeft={3} fontFamily={"'Kaushan Script', cursive;"}>+856-20-76718331</Typography>
                </Box>
                <Box display={'flex'} marginTop={2}>
                  <Box className='facebook_color'>
                    <FacebookIcon />
                  </Box>
                  <Typography marginLeft={3} fontFamily={"'Kaushan Script', cursive;"}>Chanthaboun Wang</Typography>
                </Box>
                <Box display={'flex'} marginTop={2}>
                  <Box className='www_come'>
                    <LanguageIcon/>
                  </Box>
                  <Typography marginLeft={3} fontFamily={"'Kaushan Script', cursive;"}>www.wangjingLAOVONG-npr.com</Typography>
                </Box>
                </Box>
              </Box>
              <Box flex={1}>
                <Card>
                  <CardContent >
                    <Typography textAlign={'center'} fontFamily={"'Kaushan Script', cursive;"}><b>Emails</b></Typography>
                    <Box>
                      <Stack spacing={2}>
                        <TextField fullWidth variant='outlined' label="Your fullname" id="fullWidth" />
                        <TextField fullWidth variant='outlined' label="Your Email" id="fullWidth" />
                        <TextField fullWidth variant='outlined' multiline rows={3} label="Details"/>
                      </Stack><br/>
                      <Button variant='contained'>send</Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <hr/>
    </Box>
    </>
  )
}

export default Contact