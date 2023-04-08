import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material';
import { Cursor } from 'react-simple-typewriter'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from '../logo_image/Animation2.gif'
import CreateIcon from '@mui/icons-material/Create';

function Aboutme() {
  return (
    <>
      <Box marginTop={3} textAlign='center'>
        <Typography variant='h4'>About me
          <span style={{ color: 'darkblue', fontSize: 40 }}>
            <Cursor />
          </span>
        </Typography>
      </Box>
      <Container maxWidth='lg'>
        <Card sx={{ backgroundColor: '#fff', display: 'flex', border:'solid 10px #fff'}}>
          <CardContent 
           sx={{borderRadius: 10, 
           border: 'solid 3px #f2faf4', 
           width:500, height: 300, 
           marginTop:10, marginLeft:3}}>
            <Box sx={{ backgroundColor: 'white',
             marginTop: 3, border: 'greenyellow'}} 
             flex={1}
             >
              <img src={Image} alt='box' width={400} height={250}/>
            </Box>
          </CardContent>
          <CardContent >
            <Box sx={{marginLeft: 10}}>
              <p style={{ fontFamily: "'Edu NSW ACT Foundation', cursive", color: "darkcyan"}}>
                <i>
                  Full stack web and mobile developer with background knowledge of<br /><br />
                  MERN stacks with redux, along with a knack of building applications<br /><br />
                  with utmost efficiency. Strong professional with a BSC willing to be an <br />
                  asset for an organization.
                </i>
              </p>
              <CreateIcon />   <i style={{fontFamily: "'Edu NSW ACT Foundation', cursive"}}>Full stack web development</i>
              <hr width="20" style={{ marginRight: 800, border: 'solid 2px', color: 'gray', marginTop: -5 }} />
              <CreateIcon />    <i style={{fontFamily: "'Edu NSW ACT Foundation', cursive"}}l>Interactive front end as per the design</i>
              <hr width="20" style={{ marginRight: 800, border: 'solid 2px', color: 'gray', marginTop: -5 }} />
              <CreateIcon />   <i style={{fontFamily: "'Edu NSW ACT Foundation', cursive"}}l>ReactJS</i>
              <hr width="20" style={{ marginRight: 800, border: 'solid 2px', color: 'gray', marginTop: -5 }} />
              <CreateIcon />   <i style={{fontFamily: "'Edu NSW ACT Foundation', cursive"}}l>Redux for state Management</i>
              <hr width="20" style={{ marginRight: 800, border: 'solid 2px', color: 'gray', marginTop: -5 }} />
              <CreateIcon />   <i style={{fontFamily: "'Edu NSW ACT Foundation', cursive"}}l>Building REST API </i>
              <hr width="20" style={{ marginRight: 800, border: 'solid 2px', color: 'gray', marginTop: -5 }} />
              <CreateIcon />   <i style={{fontFamily: "'Edu NSW ACT Foundation', cursive"}}l>Managing database</i>
              <hr width="20" style={{ marginRight: 800, border: 'solid 2px', color: 'gray', marginTop: -5 }} />
            </Box>
            <Box sx={{marginTop:3, marginLeft: 25}}>
              <Button variant='contained'>view my cv</Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default Aboutme