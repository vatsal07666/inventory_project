import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsBinoculars } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

function service(){
    return(
        <Box id='service' sx={{background:'#FFFFFF', my:12, scrollMarginTop: '185px',}}>
            <React.Fragment>
                <CssBaseline/>
                <Container>
                    <Box sx={{position:'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", mb: 8 }}>
                        <Typography variant="h4" sx={{fontWeight:'600'}} gutterBottom> SERVICES </Typography>
                        <Typography variant="h4" sx={{position:'absolute', fontSize:'50px', fontWeight:'600', opacity:0.07, top:'-30px'}} gutterBottom> SERVICES </Typography>
                        <Typography variant="body1" sx={{color:'gray'}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit </Typography>
                    </Box>
        
                    <Box sx={{display:'flex', flexDirection:{sm:'column', md:'row', lg:'row'}, flexWrap:'wrap', rowGap:6}}>
                        <Box component={Link} to="/services" sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, textDecoration:'none', display:'flex', gap:2, cursor:'pointer' ,'&:hover h6':{color:'#4EB478', transition:'all 0.3s ease'}, '&:hover .icon':{background:'green', color:'white', transition:'all 0.3s ease'}}}>
                            <Box className="icon" sx={{display:'flex', alignItems:'center', background:'#e4ffefff', color:'#4EB478', fontSize:'30px', py:2.5, px:2.8, borderRadius:1}}>
                                <BsBriefcase />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8, color:'black'}}>Lorem Ipsum</Typography>
                                <Typography variant='body1' sx={{fontSize:'14px', opacity:0.8, color:'black'}}>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</Typography>
                            </Box>
                        </Box>
            
                        <Box component={Link} to="/services" sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, textDecoration:'none', display:'flex', gap:2, cursor:'pointer' ,'&:hover h6':{color:'#4EB478', transition:'all 0.3s ease'}, '&:hover .icon':{background:'green', color:'white', transition:'all 0.3s ease'}}}>
                            <Box className="icon" sx={{display:'flex', alignItems:'center', background:'#e4ffefff', color:'#4EB478', fontSize:'30px', py:2.5, px:2.8, borderRadius:1}}>
                                <BsCardChecklist />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8, color:'black'}}>Dolor Sitema</Typography>
                                <Typography variant='body1' sx={{fontSize:'14px', opacity:0.8, color:'black'}}>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa</Typography>
                            </Box>
                        </Box>
            
                        <Box component={Link} to="/services" sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, textDecoration:'none', display:'flex', gap:2, cursor:'pointer' ,'&:hover h6':{color:'#4EB478', transition:'all 0.3s ease'}, '&:hover .icon':{background:'green', color:'white', transition:'all 0.3s ease'}}}>
                            <Box className="icon" sx={{display:'flex', alignItems:'center', background:'#e4ffefff', color:'#4EB478', fontSize:'30px', py:2.5, px:2.8, borderRadius:1}}>
                                <BsBarChart />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8, color:'black'}}>Sed ut perspiciatis</Typography>
                                <Typography variant='body1' sx={{fontSize:'14px', opacity:0.8, color:'black'}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</Typography>
                            </Box>
                        </Box>
            
                        <Box component={Link} to="/services" sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, textDecoration:'none', display:'flex', gap:2, cursor:'pointer' ,'&:hover h6':{color:'#4EB478', transition:'all 0.3s ease'}, '&:hover .icon':{background:'green', color:'white', transition:'all 0.3s ease'}}}>
                            <Box className="icon" sx={{display:'flex', alignItems:'center', background:'#e4ffefff', color:'#4EB478', fontSize:'30px', py:2.5, px:2.8, borderRadius:1}}>
                                <BsBinoculars />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8, color:'black'}}>Magni Dolores</Typography>
                                <Typography variant='body1' sx={{fontSize:'14px', opacity:0.8, color:'black'}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</Typography>
                            </Box>
                        </Box>
            
                        <Box component={Link} to="/services" sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, textDecoration:'none', display:'flex', gap:2, cursor:'pointer' ,'&:hover h6':{color:'#4EB478', transition:'all 0.3s ease'}, '&:hover .icon':{background:'green', color:'white', transition:'all 0.3s ease'}}}>
                            <Box className="icon" sx={{display:'flex', alignItems:'center', background:'#e4ffefff', color:'#4EB478', fontSize:'30px', py:2.5, px:2.8, borderRadius:1}}>
                                <BsBrightnessHigh />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8, color:'black'}}>Nemo Enim</Typography>
                                <Typography variant='body1' sx={{fontSize:'14px', opacity:0.8, color:'black'}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praese</Typography>
                            </Box>
                        </Box>
            
                        <Box component={Link} to="/services" sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, textDecoration:'none', display:'flex', gap:2, cursor:'pointer' ,'&:hover h6':{color:'#4EB478', transition:'all 0.3s ease'}, '&:hover .icon':{background:'green', color:'white', transition:'all 0.3s ease'}}}>
                            <Box className="icon" sx={{display:'flex', alignItems:'center', background:'#e4ffefff', color:'#4EB478', fontSize:'30px', py:2.5, px:2.8, borderRadius:1}}>
                                <SlCalender />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8, color:'black'}}>Eiusmod Tempor</Typography>
                                <Typography variant='body1' sx={{fontSize:'14px', opacity:0.8, color:'black'}}>Et harum quidem rerum facilis est et expedita distinctio dasa fermo lind saca</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>
        </Box>
    );
}

export default service;