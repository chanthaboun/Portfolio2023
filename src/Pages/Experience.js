import React from "react";
import Slider from "react-slick";
import {
      Box,
      Typography,
      Container,
      Card,
      CardContent,
} from '@mui/material';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from '../logo_image/Vulunteer1.jpg'


function Experience() {
      const [text] = useTypewriter({
            words: ['Volunteer works', 'What I do For helping social.'],
            loop: {},
            typeSpeed: 50,
            delaySpeed: 610,
      })
    
      return (
            <>
                  <Box marginTop={3} textAlign='center'>
                        <Typography variant='h5'>
                              {text}
                              <Cursor />
                        </Typography>
                  </Box>
                  <Container maxWidth='lg'>
                        <Box>
                              <Card sx={{ backgroundColor: '#725bb0', display: 'flex', border: 'groove 3px' }}>
                                    <CardContent>
                                          <Card sx={{ width: 800, background: '#725bb9', marginLeft: 25, border:'solid 3px #124182' }}>
                                                <CardContent>
                                                      <Box display={'flex'} color={'#fff'}>
                                                       <Box flex={1}>
                                                        <img src={Image} alt='slider' width={300} height={200}/>
                                                       </Box>
                                                       <Box flex={1} marginTop={4}>
                                                          <Typography>1.Job fest Volunteer</Typography>
                                                          <Typography>
                                                            ໃນວັນທີ03-05/3/2023 ນ້ອງເອງໄດ້ໄປເຂົ້າຮ່ວມເປັນອາສານຳງານJob fest<br/>
                                                            ເຊິ່ງເປັນງານຈັດຂື້ນເພື່ອເປີດໂອກາດໃຫ້ຄົນລາວທົ່ວປະເທດໄດ້ມາຊອກວຽກເຮັດງານທຳ
                                                          </Typography>
                                                       </Box>
                                                      </Box>
                                                </CardContent>
                                          </Card>
                                    </CardContent>
                              </Card>
                        </Box>
                  </Container>
            </>
      )
}

export default Experience