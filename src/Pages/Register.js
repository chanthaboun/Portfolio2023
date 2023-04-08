import React, { useState } from 'react'
import { Box, Container, Typography, Button, Card, CardContent, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Image from "../logo_image/Course_animation1.gif"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageRegister from '../logo_image/Register_animation.gif'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Register() {
      const [expanded, setExpanded] = useState(false);

      const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
      };
      return (
            <>
                  <Box sx={{ background: '#725bb0' }}>
                        <Container maxWidth='xl'>
                              <Box display={'flex'}>
                                    <Box flex={2} color='#fff' textAlign={'center'}>
                                          <Typography>Welcome to WangJing programer Course</Typography>
                                          <Typography>Unlock your programing knownledge and get more and more.</Typography><br/>
                                          <Button variant='contained' color='success' >join now</Button>
                                    </Box>
                                    <Box flex={1}>
                                          <img src={Image} alt="animation" width={500} height={300} />
                                    </Box>
                              </Box>
                              <Box >
                                    <Container maxWidth='xl'>
                                          <Typography textAlign={'center'} variant='h4' color={'#fff'}>General Information and Conditions</Typography>
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
                                                                  ຫຼັກສູດນີ້ ຈະສອນສະເພາະແຕ່ວັນເສົາ ແລະ ວັນອາທິດ, ວັນລະ 4 ຊົ່ວໂມງເທົ່ານັ້ນ. ເລີ່ມສອນວັນທີ 20 ມີນາ 2023 ເປັນຕົ້ນໄປ.<br />
                                                                  ເຮົາມີ 2 ຫຼັກສູດ ໃຫ້ທ່ານເລືອກຮຽນຕາມລາຍລະອຽດໃນ Outline Course<br />
                                                                  ນັກຮຽນທຸກຄົນຕ້ອງມີ ຄອມພິວເຕີ ສ່ວນຕົວ (Laptop) ເພາະຈະໃຊ້ອຸປະກອນສ່ວນຕົວໃນການຮຽນການສອນ<br />
                                                                  ທາງຜູ້ຝຶກສອນຈະມີບົດຮຽນໃຫ້ທັງໝົດ (ສະບັບພາສາອັງກິດ)<br />
                                                            </Typography>
                                                      </AccordionDetails>
                                                </Accordion>
                                          </Box>
                                    </Container>
                              </Box>
                        </Container>
                  </Box><hr/>
                  <Box marginTop={5}>
                        <Container maxWidth='lg'>
                              <Typography textAlign={'center'} variant='h5'>Welcome to Register form</Typography>
                              <Card>
                                    <CardContent>
                                          <Box display={'flex'}>
                                                <Box flex={1}>
                                                      <img src={ImageRegister} alt='Animation' width={400} height={300} />
                                                </Box>
                                                <Box flex={1}>
                                                      <Card>
                                                            <CardContent>
                                                                  <Typography textAlign={'center'}>Register Form</Typography>
                                                                  <Typography>General Information</Typography>
                                                                  <Stack spacing={2}>
                                                                        <Box display={'flex'}>
                                                                              <TextField fullWidth label="full-name" id="fullWidth" />
                                                                              <TextField label="Age" id="fullWidth" type='number' />
                                                                        </Box>
                                                                        <TextField fullWidth label="Occupation" id="fullWidth" />
                                                                        <TextField fullWidth label="Address" id="fullWidth" />
                                                                        <Box display={'flex'}>
                                                                              <TextField fullWidth label="Phone number" id="fullWidth" />
                                                                              <TextField fullWidth label="E-mail Address" id="fullWidth" />
                                                                        </Box>
                                                                        <Typography><b>Course selection</b></Typography>
                                                                        <Box display={'flex'}>
                                                                              <FormControl variant="standard" sx={{ marginLeft: 15, minWidth: 150 }}>
                                                                                    <InputLabel id="demo-simple-select-standard-label">Select Course</InputLabel>
                                                                                    <Select
                                                                                          labelId="demo-simple-select-standard-label"
                                                                                          id="demo-simple-select-standard"
                                                                                          onChange={handleChange}
                                                                                          label="Age"
                                                                                    >
                                                                                          <MenuItem value={10}>Beginner Course</MenuItem>
                                                                                          <MenuItem value={20}>Advanced Course</MenuItem>
                                                                                    </Select>
                                                                              </FormControl>
                                                                              <FormControl variant="standard" sx={{ marginLeft: 1, minWidth: 150 }}>
                                                                                    <InputLabel id="demo-simple-select-standard-label">Select Course</InputLabel>
                                                                                    <Select
                                                                                          labelId="demo-simple-select-standard-label"
                                                                                          id="demo-simple-select-standard"
                                                                                          onChange={handleChange}
                                                                                          label="Age"
                                                                                    >
                                                                                          <MenuItem value={10}>Sat-Sun (8:00-12:00)</MenuItem>
                                                                                          <MenuItem value={20}>Sat-Sun (13:00-17:00)</MenuItem>
                                                                                    </Select>
                                                                              </FormControl>
                                                                        </Box>
                                                                        <Box>
                                                                              <TextField fullWidth label="Expectation" multiline rows={2} id="fullWidth" />
                                                                              <Button variant='contained' color='success'><KeyboardArrowUpIcon />submit</Button>
                                                                              <Button variant='contained' color='primary'><RefreshIcon />refresh</Button>
                                                                        </Box>
                                                                  </Stack>
                                                            </CardContent>
                                                      </Card>
                                                </Box>
                                          </Box>
                                    </CardContent>
                              </Card>
                        </Container>
                  </Box>
                  <hr/>
            </>
      )
}
