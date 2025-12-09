import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function footer(){
    return(
        <Box sx={{background:'black', pt:8, pb:5}}>
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Box sx={{color:'white', display:'flex', flexDirection:{xs: 'column', md: 'row'}, justifyContent:'space-between', flexWrap: 'wrap', rowGap: 4,}}>
                        <Box sx={{ flex: { xs: '100%', md: '45%', lg: '35%' }}}>
                            <Typography variant='h4' sx={{fontWeight:'600', mb:5}}>Plato</Typography>
                            <Typography variant='body1' sx={{mb:2, fontSize:'13.5px', opacity:0.8}}>A108 Adam Street <br /> New York, NY 535022</Typography>
                            <Typography variant='body1'>
                                <Typography component='span' sx={{fontWeight:'600', fontSize:'13.5px'}}>Phone: </Typography>
                                <Typography component='span' sx={{fontSize:'13.5px', opacity:0.8}}> +1 5589 55488 55 </Typography>
                            </Typography>
                            <Typography variant='body1'>
                                <Typography component='span' sx={{fontWeight:'600', fontSize:'13.5px'}}>Email: </Typography>
                                <Typography component='span' sx={{fontSize:'13.5px', opacity:0.8}}> info@example.com </Typography>
                            </Typography>
                            <Box sx={{ fontSize: '20px', display: 'flex', gap: 2, mt:3, opacity:0.8 }}>
                                <Box sx={{border:'2px solid white', borderRadius:'50%', px:1.2, pt:1, fontSize:'18px', transition:'0.3s ease-in-out', '&:hover':{color:'#4EB478', borderColor:'#4EB478'}}}>
                                    <FaXTwitter />
                                </Box>   
                                <Box sx={{border:'2px solid white', borderRadius:'50%', px:1.2, pt:1, fontSize:'18px', transition:'0.3s ease-in-out', '&:hover':{color:'#4EB478', borderColor:'#4EB478'}}}>
                                    <FaFacebook />
                                </Box>   
                                <Box sx={{border:'2px solid white', borderRadius:'50%', px:1.2, pt:1, fontSize:'18px', transition:'0.3s ease-in-out', '&:hover':{color:'#4EB478', borderColor:'#4EB478'}}}>
                                    <FaInstagram />
                                </Box>   
                                <Box sx={{border:'2px solid white', borderRadius:'50%', px:1.2, pt:1, fontSize:'18px', transition:'0.3s ease-in-out', '&:hover':{color:'#4EB478', borderColor:'#4EB478'}}}>
                                    <FaLinkedin />
                                </Box>   
                            </Box>
                        </Box>

                        <Box sx={{flex: { xs: '100%', sm: '50%', md: '25%', lg: '20%' }, display:'flex', flexDirection:'column', rowGap:2}}>
                            <Typography variant='h6' sx={{fontWeight:'600'}}>Useful Links</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Home</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>About Us</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Services</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Terms Of Service</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Privacy Policy</Typography>
                        </Box>

                        <Box sx={{flex: { xs: '100%', sm: '50%', md: '25%', lg: '20%' }, display:'flex', flexDirection:'column', rowGap:2,}}>
                            <Typography variant='h6' sx={{fontWeight:'600'}}>Our services</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Web Design</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Web development</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Product Management</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Marketing</Typography>
                            <Typography variant='body1' sx={{ fontSize:'13.5px', opacity:0.8}}>Graphic Design</Typography>
                        </Box>

                        <Box sx={{ flex: { xs: '100%', md: '100%', lg: '25%' }, display:'flex', flexDirection:'column', rowGap:2}}>
                            <Typography variant='h6' sx={{fontWeight:'600'}}>Our Newsletter</Typography>
                            <Typography variant='body1' sx={{fontSize:'12.5px'}}>
                                Subscribe to our newsletter and receive the latest news about our products and services!
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{color:'white', mt:10, textAlign:'center'}}>
                        <Typography variant='body1' sx={{fontSize:'14px'}}>
                            <FaRegCopyright /> Copyright Plato All Rights Reserved
                        </Typography>
                    </Box>
                </Container>
            </React.Fragment>
        </Box>
    );
}

export default footer;