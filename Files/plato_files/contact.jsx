import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function contact(){
    return(
        <Box id='contact' sx={{my:12, scrollMarginTop: '185px',}}>
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Box sx={{position:'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", mb: 8 }}>
                        <Typography variant="h4" sx={{fontWeight:'600'}} gutterBottom> CONTACT </Typography>
                        <Typography variant="h4" sx={{position:'absolute', fontSize:'50px', fontWeight:'600', opacity:0.07, top:'-30px'}} gutterBottom> CONTACT </Typography>
                        <Typography variant="body1" sx={{color:'gray'}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit </Typography>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:{ xs: 'column', md: 'column', lg: 'row' }, gap:5, boxShadow:'0 8px 20px rgba(0,0,0,0.2)', px:{ xs: 2, sm: 3, md: 4 }, py:{ xs: 3, md: 5 }}}>
                        <Box sx={{width:{md:'100%', lg:'33.33%'}, display:'flex', alignItems:'center', gap:2 , '&:hover .contact-icon':{backgroundColor:'#4EB478', color:'white'}}}>
                            <Box className='contact-icon' sx={{ color:'#4EB478', fontSize:'30px', px:2, pb:0.2, pt:1.5, border:'1px solid #4EB478', borderRadius:'100%', textAlign:'center', transition:'all 0.4s ease-in-out', }}><CiLocationOn /></Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600'}}>Address</Typography>
                                <Typography component='span' sx={{fontSize:'13px'}}>A108 Adam Street, New York, NY 535022</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{md:'100%', lg:'33.33%'}, display:'flex', alignItems:'center', gap:2 , '&:hover .contact-icon':{backgroundColor:'#4EB478', color:'white'}}}>
                            <Box className='contact-icon' sx={{ color:'#4EB478', fontSize:'30px', px:2, pb:0.2, pt:1.5, border:'1px solid #4EB478', borderRadius:'100%', textAlign:'center', transition:'all 0.4s ease-in-out', }}><CiPhone /></Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600'}}>Contact Us</Typography>
                                <Typography component='span' sx={{fontSize:'14px'}}>+1 5589 55488 55</Typography>
                            </Box>
                        </Box>
                        
                        <Box sx={{width:{md:'100%', lg:'33.33%'}, display:'flex', alignItems:'center', gap:2 , '&:hover .contact-icon':{backgroundColor:'#4EB478', color:'white'}}}>
                            <Box className='contact-icon' sx={{ color:'#4EB478', fontSize:'30px', px:2, pb:0.2, pt:1.5, border:'1px solid #4EB478', borderRadius:'100%', textAlign:'center', transition:'all 0.4s ease-in-out', }}><BsEnvelope /></Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600'}}>Email Us</Typography>
                                <Typography component='span' sx={{fontSize:'14px'}}>info@example.com</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{my:10, display:'flex', flexDirection:'column', rowGap:4, boxShadow:'0 8px 30px rgba(0,0,0,0.2)', px:4, py:5}}>
                        <Box sx={{display:'flex', gap:4}}>
                            <Box sx={{ width: '50%', maxWidth: '100%' }}>
                                <TextField fullWidth label="Your Name" id="fullWidth" />
                            </Box>
                            <Box sx={{ width: '50%', maxWidth: '100%' }}>
                                <TextField fullWidth label="Your Email" id="fullWidth" />
                            </Box>
                        </Box>
                        
                        <Box sx={{ width: '100%', maxWidth: '100%' }}>
                            <TextField fullWidth label="Subject" id="fullWidth" />
                        </Box>
                        
                        <Box sx={{width:'100%'}}>
                            <TextareaAutosize aria-label="minimum height" minRows={6} placeholder="Message"
                                style={{ width: "100%", padding: "12px", borderRadius: "8px", borderColor: "rgba(0, 0, 0, 0.23)",
                                        fontFamily: "inherit", fontSize: "16px",}}/>
                        </Box>
                        
                        <Box sx={{textAlign:'center'}}>
                            <Link href="#" sx={{textDecoration:'none', background:'#4EB478', color:'white', borderRadius:'5px', p:'16px 40px', mt:'30px', 
                                '&:hover': { backgroundColor: '#3a9c63', opacity:0.7, transition:'0.3s'}, }}> Send Message </Link>
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>
        </Box>
    );
}

export default contact;