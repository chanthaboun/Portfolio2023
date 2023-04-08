import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from "../logo_image/Course_animation1.gif"
import ImageAPI from "../logo_image/API1.jpg"
import ImageHTML from "../logo_image/HTML.jpg"
import ImageCSS from "../logo_image/CSS.jpg"
import ImageJS from "../logo_image/JS.jpg"
import ImageReact from "../logo_image/React.jpg"
import ImageRedux from "../logo_image/Redux.jpg"
import ImageRLC from "../logo_image/HTML_CSS_React1.jpg"
import ImageRdux from "../logo_image/Redux_circle.jpg"
import ImageMater from "../logo_image/JSandMaterial.jpg"
import Imagedatabase from "../logo_image/database.jpg"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';




function Course() {
      const [expanded, setExpanded] = useState(false);

      const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
      };

      const  navigate = useNavigate();
      const  handleNavigate = (path) =>{
        navigate(path)
      } 

      return (
            <>
                  <Box sx={{ background: '#725bb0' }}>
                        <Container maxWidth='xl'>
                              <Box display={'flex'}>
                                    <Box flex={2} color='#fff' fontFamily={""}>
                                          <Typography textAlign={'center'}><i>Welcome to WangJing programer Course</i></Typography>
                                          <Typography textAlign={'center'}>Unlock your programing knownledge and get more and more.</Typography>
                                          <Button variant='contained' color='success' sx={{ marginLeft: 50, marginTop:3 }} onClick={() => handleNavigate('/register')}>join now</Button>
                                    </Box>
                                    <Box flex={1}>
                                          <img src={Image} alt="animation" width={500} height={300} />
                                    </Box>
                              </Box>
                              <Box display={'flex'} justifyContent='space-around'>
                                    <Box>
                                          <img src={ImageHTML} alt='html' width={250} />
                                          <img src={ImageAPI} alt='html' width={250} />
                                          <img src={ImageRedux} alt='html' width={250} />
                                          <img src={ImageRedux} alt='html' width={250} />
                                    </Box>
                              </Box>
                              <Box display={'flex'} justifyContent='space-around'>
                                    <Box>
                                          <img src={ImageJS} alt='css' width={250} />
                                          <img src={ImageReact} alt='css' width={250} />
                                          <img src={ImageCSS} alt='css' width={250} />
                                          <img src={ImageRedux} alt='html' width={250} />
                                    </Box>
                              </Box>
                        </Container>
                  </Box>
                  <Box sx={{ background: '#e9f0ea', padding:2}} textAlign='center'>
                        <Typography>To Be Full-Stack Web-Application Programmer Are Very Simple.</Typography>
                        <Typography>Find programming languages that you are looking for them and Start to learn &</Typography>
                        <Typography>start to be a full-stack (web) application programmer.</Typography><br/>
                        <Button variant='contained' color='warning'>More Details</Button>
                  </Box>
                  <Box textAlign={'center'}>
                        <Typography>What's inside</Typography>
                        <Typography>The course will be released updated frequently.</Typography>
                        <Typography>In additional, the available course wll be announce 2 weeks before start!</Typography>
                        <Box display={'flex'} justifyContent='space-around' className='logo'>
                              <Box gridColumn={2} >
                                    <Box className='Effect_logo'>
                                    <img src={ImageRLC} alt='logo' width={150} height={150} />
                                    </Box>
                                    <Typography variant='h5' >React Js</Typography>
                                    <Typography>[Available to starts]</Typography>
                                    <Typography>
                                          If you are starting from absolute<br />
                                          ZERO, we got you! We are going to<br />
                                          cover HTML, CSS, Modern Javascript<br />
                                          (ReactJS) and a tonne of extra's that<br />
                                          will propel you into the world of web<br />
                                          development!<br />
                                    </Typography>
                              </Box>
                              <Box gridColumn={2}>
                                    <img src={ImageRdux} alt='logo' width={150} height={150} />
                                    <Typography variant='h5'>Redux for Dummies</Typography>
                                    <Typography>[Available to starts]</Typography>
                                    <Typography>
                                          If there is one skill you NEED to land<br />
                                          the frontend job, it's REDUX.
                                    </Typography>
                              </Box>
                              <Box gridColumn={2}>
                                    <img src={ImageMater} alt='logo' width={150} height={150} />
                                    <Typography variant='h5'>Styling Mastery</Typography>
                                    <Typography>[Available to starts]</Typography>
                                    <Typography>
                                          If you need the responsive design &<br />
                                          modern styling, Material-UI is the<br />
                                          answer. In addition, Flexbox, CSS Grid<br />
                                          and SO MUCH MORE to make your<br />
                                          website the next big hit!
                                    </Typography>
                              </Box>
                              <Box gridColumn={2}>
                                    <img src={Imagedatabase} alt='logo' width={150} height={150} />
                                    <Typography variant='h5'>Styling Mastery</Typography>
                                    <Typography>[Available to starts]</Typography>
                                    <Typography>
                                          The world leader database are in<br />
                                          HERE! Application and database are<br />
                                          destiny couple. This is the unavoidable <br />
                                          choice.
                                    </Typography>
                              </Box>
                        </Box>
                  </Box>
                  {/* price section */}
                  <Box sx={{ background: '#e9f0ea' }}>
                        <Container maxWidth='xl'>
                              <Box>
                                    <Typography textAlign={'center'} variant='h5' sx={{fontFamily: "'Caveat', cursive"}}>Do not hesitate to maximize your skill... Join the #RASA Programmer!</Typography>
                                    <Typography textAlign={'center'} variant='h6'>
                                    <span className='color'>HURRY UP!</span>
                                     Available only <span className='color'>15</span> 
                                     students/course. Register will be closed14-05-2021 
                                    <span className='style'>(Opened)</span>
                                    </Typography>
                              </Box>
                              <Box display={'flex'} justifyContent='space-around' marginTop={5}>
                                    <Card className='Effect_Card1'>
                                          <CardContent>
                                                <Typography textAlign={'center'} variant='h5' color={'blue'}>
                                                      <b>
                                                            FULL-STACK (WEB)<br />
                                                            ADVANCED
                                                      </b>
                                                </Typography><br />
                                                <Typography textAlign={'center'}>
                                                      <Typography variant='h5' color={'red'}>
                                                            Discont 10%
                                                      </Typography>
                                                      <Typography variant='h6' color={"black"}>
                                                            <s><b>1,490,000 Kip</b></s>
                                                      </Typography>
                                                      <Typography variant='h5'>
                                                            <b>1,341,000 Kip</b>
                                                      </Typography>
                                                      per 48 hours
                                                </Typography><br />
                                                <Typography textAlign={'center'} variant='body1'><b><u>DETAILS</u></b></Typography><br />
                                                <Typography>
                                                      Grant Advanced topic knowledge “Distroy<br />
                                                      your knowledge barrier and maximize your skill”
                                                </Typography><br />
                                                <Typography><b>FRONTEND</b></Typography>
                                                <Typography>ReactJS, CSS & Material-UI (Advanced topic)</Typography><br />
                                                <Typography><b>BACKEND</b></Typography>
                                                <Typography>
                                                      Web API on ASP.NET (C#)-VB2019<br />
                                                      Authentication with JSON Web Token (JWT)<br />
                                                      security on Bearer and Oauth 2.0 authirization
                                                </Typography><br />
                                                <Typography><b>DATABASE</b></Typography>
                                                <Typography>
                                                      Firestore (NoSQL) & MS-SQL Server<br />
                                                      (Advanced topic)
                                                </Typography><hr /><br />
                                                <Typography>Create TWO practical projects</Typography><hr />
                                                <Typography>Hosting project to server</Typography><hr />
                                                <Typography>GOLD, support coaching after class</Typography><hr />
                                                <Typography>GOLD, consultation on your application project</Typography><hr />
                                                <Typography>NOTE: *Already Included beginner course</Typography>
                                                <Button variant='contained' color='error' sx={{ marginLeft: 15, marginTop: 2 }} onClick={() => handleNavigate('/register')}>Join now</Button>
                                          </CardContent>
                                    </Card>
                                    <Card sx={{ maxHeight: 830 }} className='Effect_Card1'>
                                          <CardContent >
                                                <Typography variant='h5' color={'blue'} textAlign='center'>
                                                      <b>
                                                            FULL-STACK (WEB)<br />
                                                            ADVANCED
                                                      </b>
                                                </Typography><br />
                                                <Typography textAlign={'center'}>
                                                      <Typography variant='h5' color={'red'}>
                                                            Discont 10%
                                                      </Typography>
                                                      <Typography variant='h6' color={"black"}>
                                                            <s><b>990,000 kip</b></s>
                                                      </Typography>
                                                      <Typography variant='h5'>
                                                            <b>891,000 kip</b>
                                                      </Typography>
                                                      per 32 hours
                                                </Typography><br />
                                                <Typography textAlign={'center'} variant='body1'><b><u>DETAILS</u></b></Typography><br />
                                                <Typography>
                                                      Grant fundamental knowledge from Zero to<br />
                                                      Max-basic skill
                                                </Typography><br />
                                                <Typography><b>FRONTEND</b></Typography>
                                                <Typography>ReactJS, CSS & Material-UI (Advanced topic)</Typography><br />
                                                <Typography><b>BACKEND</b></Typography>
                                                <Typography>
                                                      Web API on ASP.NET (C#)-VB2019
                                                </Typography><br />
                                                <Typography><b>DATABASE</b></Typography>
                                                <Typography>
                                                      Firestore (NoSQL) & MS-SQL Server
                                                </Typography><hr /><br />
                                                <Typography>Create ONE practical projects</Typography><hr />
                                                <Typography>Support coaching after class</Typography><hr />
                                                <Typography>GOLD, support coaching after class</Typography><hr />
                                                <Typography>Consulting on your application project out of class</Typography><hr />
                                                <Button variant='contained' color='error' sx={{ marginLeft: 15, marginTop: 2 }} onClick={() => handleNavigate('/register')}>Join now</Button>
                                          </CardContent>
                                    </Card>
                                    <Card sx={{ maxHeight: 760 }} className='Effect_Card1'>
                                          <CardContent>
                                                <Typography variant='h5' color={'blue'} textAlign='center'>
                                                      <b>
                                                            FULL STACK MODBILE<br />
                                                            APP (FLUTTER)<br />
                                                            FUNDAMENTAL<br />
                                                      </b>
                                                </Typography><br />
                                                <Typography textAlign={'center'} variant='h5'>
                                                      <b>N/A kip</b>
                                                </Typography>
                                                <Typography textAlign={'center'}>per xx hours</Typography><br />
                                                <Typography textAlign={'center'} variant='body1'><b><u>DETAILS</u></b></Typography><br />
                                                <Typography>
                                                      Access to Mobile APP skill from Zero to<br />
                                                      Max-basic
                                                </Typography><br />
                                                <Typography><b>FRONTEND</b></Typography>
                                                <Typography>Dart Programming language</Typography><br />
                                                <Typography><b>BACKEND</b></Typography>
                                                <Typography>Web API on ASP.NET (C#)-VB2019</Typography><br />
                                                <Typography><b>DATABASE</b></Typography>
                                                <Typography>Firestore (NoSQL) & MS-SQL Server</Typography><hr /><br />
                                                <Typography>Create one simple practical project</Typography><hr />
                                                <Typography>Support coaching after class</Typography><hr />
                                                <Typography>Consulting on your application project</Typography><hr />
                                                <Button variant='contained' color='error' sx={{ marginLeft: 10, marginTop: 2 }} onClick={() => handleNavigate('/register')}>Join now</Button>
                                          </CardContent>
                                    </Card>
                              </Box>

                              <Box display={'flex'} justifyContent='space-around' marginTop={10}>
                                    <Box >
                                          <Typography variant='h6' color={'#a903fc'} marginLeft={10}><b><u>Outline course</u></b></Typography>
                                          <Typography sx={{fontFamily: 'Modern Love Grunge'}}>
                                                <i>
                                                      Full-stack outline for beginner (Day 1 - 8)<br />
                                                      Full-stack outline for advanced (Day 1 -12)
                                                </i>
                                          </Typography>
                                    </Box>
                                    <Box >
                                          <Typography variant='h6' color={'#a903fc'} marginLeft={5}><b><u>Lessons</u></b></Typography>
                                          <Typography sx={{fontFamily: 'Cochocib Script Latin Pro'}}>
                                                <i>
                                                      ReactJS for beginner<br />
                                                      ReactJS for Advanced
                                                </i>
                                          </Typography>
                                          <Typography marginLeft={6} sx={{fontFamily: 'Cochocib Script Latin Pro'}}>
                                                <i>
                                                      HTML<br />
                                                      CSS
                                                </i>
                                          </Typography>
                                          <Typography sx={{fontFamily: 'Cochocib Script Latin Pro'}}>
                                                <i>
                                                      ADO.Net & Web API (C#)<br />
                                                      MS-SQL Server
                                                </i>
                                          </Typography>
                                          <Typography sx={{fontFamily: 'Cochocib Script Latin Pro'}}><i>Google Cloud Firestore (NoSQL)</i></Typography>
                                    </Box>
                                    <Box>
                                          <Typography variant='h6' color={'#a903fc'} marginLeft={10} ><b><u>History courses</u></b></Typography>
                                          <Typography sx={{fontFamily: 'Modern Love Grunge'}}>
                                                <i>
                                                      Course 1 (Beginner): 10-12-2023 to 10-01-2023<br />
                                                      Course 2 (Beginner): 23-01-2023 to 14-02-2023<br />
                                                      Course 3 (Advanced): 27-02-2023 to 13-03-2023<br />
                                                      Course 4 (Beginner): 20-03-2023 to 25-04-2023
                                                </i>
                                          </Typography>
                                    </Box>
                              </Box>
                        </Container>
                  </Box>
                  <Box marginTop={2}>
                        <Container maxWidth='xl'>
                              <Typography textAlign={'center'} variant='h4'>General Information and Conditions</Typography>
                              <Box className='font_lao'>
                              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1bh-content"
                                          id="panel1bh-header"
                                    >
                                          <Typography sx={{ width: '33%', flexShrink: 0 }} marginLeft={15} variant='h5' className='font_lao'>
                                                <b>ຂໍ້ມູນທົ່ວໄປ</b>
                                          </Typography>
                                          <Typography sx={{ color: 'text.secondary' }}>Overall course highlight and proposal</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography variant='h6' className='font_lao'>
                                                <b>ເປີດອີກແລ້ວ ກັບຫຼັກສູດ FULL STACK Web Application Programmer.</b>
                                          </Typography>
                                          <Typography className='font_lao'>
                                                ຫຼັກສູດເດີມ ເພີ່ມເຕີມຄືພັດທະນາເນື້ອຫາໃໝ່ທີ່ຄວບຄຸມຫຼາຍກວ່າເດີມ ແລະ ເປັນມືອາຊີບຫຼາຍຂຶ້ນ.
                                                ທີ່ຈະປ່ຽນໃຫ້ທ່ານກາຍເປັນນັກພັດທະນາໂປຼແກຼມ <b>(Full Stack Web Application Programmer) </b>
                                                ແບບມືອາຊີບໄດ້ໃນໄລຍະ<br />
                                                ເວລາອັນສັ້ນ ທີ່ຈະເຮັດໃຫ້ທ່ານເຂົ້າໃຈງ່າຍ <b>(Unlock your programming knowledge)</b> ແລະ ສາມາດພັດທະນາຕໍ່ໄດ້ດ້ວຍຕົວເອງ.<br /><br />
                                                ປັດຈະບັນ <b>UX/UI</b> ກຳລັງເປັນທີ່ນິຍົມໃນການພັດທະນາລະບົບຕ່າງໆ. ທ່ານຈະໄດ້ຮຽນຮູ້ທຸກຢ່າງກ່ຽວກັບເທັກໂນໂລຢີ່ຂອງໂປຼແກຼມທີ່ທັນສະໄໝ ແລະ ຖືກນຳໃຊ້ເປັນອັນດັບຕົ້ນໆຂອງໂລກ.
                                                ເຊິ່ງກວມເອົາການພັດທະນາຕັ້ງແຕ່ Frontend,<br />
                                                Backend ແລະ ລະບົບຖານຂໍ້ມູນ (Database).<br /><br />
                                                <b>Frontend:</b> ທ່ານຈະໄດ້ຮຽນຮູ້ການພັດທະນາລະບົບໂດຍການນຳໃຊ້ ReactJS (React JavaScript)
                                                ເປັນຫຼັກ ລວມກັບ HTML, CSS ແລະ Material UI ໃນການອອກແບບລະບົບ Frontend ໃຫ້ໄດ້ຕາມຄວາມຕ້ອງການຂອງທ່ານເອງ.<br /><br />
                                                <b>Backend:</b> ທ່ານຈະໄດ້ຮຽນຮູ້ກ່ຽວກັບການພັດທະນາລະບົບໂດຍການນຳໃຊ້ Visual Studio 2019 ເພື່ອສ້າງ Application Programming Interface (API) ໃຫ້ຢູ່ໃນຮູບແບບ JSON ຫຼື XML ພ້ອມກັບສ້າງ API<br />
                                                ໃຫ້ມີຄວາມປອດໄພ ໂດຍມີການລະບຸຕົວຕົນຜ່ານ JSON Web Token (JWT).<br /><br />
                                                <b>Database:</b> ທ່ານຈະໄດ້ຮຽນຮູ້ກ່ຽວກັບການພັດທະນາລະບົບຖານຂໍ້ມູນໂດຍການນຳໃຊ້ Clound Firestore (NoSQL) ໃນການຂຽນຂໍ້ມູນລົງ ແລະ ດຶງມາໃຊ້ງານແບບ Real Time.
                                                ພ້ອມກັບການຮຽນຮູ້ SQL Server ຂຽນ Procedure ຕ່າງໆເພື່ອປະມວນຜົນ ແລະ ສົ່ງຂໍ້ມູນໃຫ້ກັບ Backend ນຳໄປໃຊ້ງານສ້າງ API.<br /><br />
                                                <b>Text editer:</b> ທ່ານຈະໄດ້ຮຽນຮູ້ກ່ຽວກັບການນຳໃຊ້ໂປຼແກຼມ Visual Studio Code ຈາກ Microsoft ລວມທັງ Extension ຕ່າງໆທີ່ເປັນປະໂຫຍດໃນການຂຽນໂປຼແກຼມ.ການປະຕິບັດຕົວຈິງ ເຊິ່ງເປັນສິ່ງສຳຄັນໃນຫຼັກສູດນີ້<br />
                                                ເພື່ອໃຫ້ສາມາດພັດທະນາໄດ້ດ້ວຍຕົວເອງ. ການປະຕິບັດຕົວຈິງຈະຄວບຄຸມການຈຳລອງລະບົບ<br /><br />
                                                <b>Netflix:</b>  ໂດຍການດຶງເອົາ API ຈາກ The movies Database (TMDB) ມາໃຊ້ງານຈິງ ແລະ ສາມາດເບິ່ງ movies trailers ໄດ້.<br /><br />
                                                <b>Gmail:</b>  ຈຳລອງໜ້າຕ່າງ ແລະ function ການໃຊ້ງານສົ່ງ-ຮັບອີເມລແບບ Real ສ້າງໜຶ່ງ Website ຂອງຕົວເອງ ພ້ອມກັບສາມາດ upload ຂຶ້ນ Firebase Google Cloud ແລະ ສາມາດນຳໃຊ້ໄດ້ຈິງ.
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel2bh-content"
                                          id="panel2bh-header"
                                    >
                                          <Typography sx={{ width: '33%', flexShrink: 0 }} variant='h5' className='font_lao'><b>ເໝາະສຳລັບຜູ້ທີ່</b></Typography>
                                    </AccordionSummary><br />
                                    <AccordionDetails>
                                          <Typography variant='body1' className='font_lao'><b>ຫຼັກສູດນີ້ ເໝາະສົມສຳລັບ</b></Typography>
                                          <Typography className='font_lao'>
                                                1. ຜູ້ທີ່ຕ້ອງການຈະເປັນ Full Stack Web Application Programmer ໃນລະຍະເວລາອັນສັ້ນ ເພື່ອນຳໄປໃຊ້ງານໃນການສ້າງລະບົບ ຫຼື ສະໝັກວຽກ.<br />
                                                2. ຜູ້ທີ່ຕ້ອງການຈະຮຽນຮູ້ ເພື່ອສ້າງ Website ຕົວເອງ.<br />
                                                3. ຜູ້ທີ່ຕ້ອງການຮຽນຮູ້ NoSQL Database ແລະ SQL Database ເພື່ອຂຽນ Procedure ໃນລະບົບຖານຂໍ້ມູນ.<br />
                                                4. ຜູ້ທີ່ຕ້ອງການຈະຮຽນຮູ້ການພັດທະນາ ຫຼື ສ້າງ Application Programming Interface (API) ໃນແບບທໍາມະດາ ແລະ ແບບທີ່ຕ້ອງໃຊ້ລະບຸຕົວຕົນຜ່ານ JSON Web Token Security Algorithm.<br />
                                                5. ນັກສຶກສາທີ່ຈະໄປຮຽນຢູ່ມະຫາວິທະຍາໄລ ຫຼື ຮຽນຢູ່ມະຫາວິທະຍາໄລແລ້ວກໍ່ສາມາດຮຽນໄດ້.<br />
                                                6. ຜູ້ທີ່ມີຄວາມສົນໃຈໃນວິຊາ Computer Programming.<br />
                                                ນອກນັ້ນ ທ່ານຍັງຈະໄດ້ຮັບການແບ່ງປັນຄວາມຮູ້ຈາກປະສົບການຈິງນອກເໜືອຈາກຫຼັກສູດຂ້າງຕົ້ນທີ່ບໍ່ມີສອນໃນຫຼັກສູດຂອງມະຫາວິທະຍາໄລ.
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel3bh-content"
                                          id="panel3bh-header"
                                    >
                                          <Typography sx={{ width: '33%', flexShrink: 0 }} variant='h5' className='font_lao'>
                                                <b>Course Study</b>
                                          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography className='font_lao'>
                                                ຫຼັກສູດນີ້ ຈະສອນສະເພາະແຕ່ວັນເສົາ ແລະ ວັນອາທິດ, ວັນລະ 4 ຊົ່ວໂມງເທົ່ານັ້ນ. ເລີ່ມສອນວັນທີ 20 ມີນາ 2023 ເປັນຕົ້ນໄປ.<br />
                                                ເຮົາມີ 2 ຫຼັກສູດ ໃຫ້ທ່ານເລືອກຮຽນຕາມລາຍລະອຽດໃນ Outline Course
                                          </Typography>
                                          <Typography className='font_lao'>
                                                <b>1. GEGINNER COURSE</b> (ສອນທັງໝົດຢູ່ 32 ຊົ່ວໂມງ):<br /><br />
                                                <b>Frontend:</b> React JS Fundamentals, HTML, CSS & Material-UI<br /><br />
                                                <b>Backend:</b> C# in ASP.Net (Visual Studio 2019)<br /><br />
                                                <b>Database:</b> Google Clound Firestore (NoSQL) & Microsoft SQL Server<br /><br />
                                                <b>Practical Project:</b> One practical project clone and one for build your own website<br /><br />
                                                <b>2. ADVANCED COURSE </b>  (ສອນທັງໝົດຢູ່ 48 ຊົ່ວໂມງ):<br /><br />
                                                <b>Frontend:</b>  React JS Fundamental + Advanced, HTML, CSS & Material UI (Advanced Topic)<br /><br />
                                                <b>Backend:</b>  C# in ASP.Net (Visual Studio 2019) (Advanced Topic)<br /><br />
                                                <b>Database:</b>  Google Clound Firestore (NoSQL) & Microsoft SQL Server<br /><br />
                                                <b>Practical Project:</b> Two practical project clone and one for build your own website
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>
                              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel4bh-content"
                                          id="panel4bh-header"
                                    >
                                          <Typography sx={{ width: '33%', flexShrink: 0 }} variant='h5' className='font_lao'><b>ເງື່ອນໄຂທົ່ວໄປ</b></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                          <Typography className='font_lao'>
                                                ຫຼັກສູດນີ້ ຈະສອນສະເພາະແຕ່ວັນເສົາ ແລະ ວັນອາທິດ, ວັນລະ 4 ຊົ່ວໂມງເທົ່ານັ້ນ. ເລີ່ມສອນວັນທີ 20 ມີນາ 2023 ເປັນຕົ້ນໄປ.<br/>
                                                ເຮົາມີ 2 ຫຼັກສູດ ໃຫ້ທ່ານເລືອກຮຽນຕາມລາຍລະອຽດໃນ Outline Course<br/>
                                                ນັກຮຽນທຸກຄົນຕ້ອງມີ ຄອມພິວເຕີ ສ່ວນຕົວ (Laptop) ເພາະຈະໃຊ້ອຸປະກອນສ່ວນຕົວໃນການຮຽນການສອນ<br/>
                                                ທາງຜູ້ຝຶກສອນຈະມີບົດຮຽນໃຫ້ທັງໝົດ (ສະບັບພາສາອັງກິດ)<br/>
                                          </Typography>
                                    </AccordionDetails>
                              </Accordion>
                              </Box>
                        </Container>
                  </Box>
                  <hr style={{boxShadow: "initial"}}/>
            </>
      )
}

export default Course