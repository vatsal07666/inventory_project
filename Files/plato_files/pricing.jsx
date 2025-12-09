import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

function pricing(){
    return(
        <Box id='pricing' sx={{my:20, scrollMarginTop: '185px',}}>
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Box sx={{position:'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", mb: 8 }}>
                        <Typography variant="h4" sx={{fontWeight:'600'}} gutterBottom> PRICING </Typography>
                        <Typography variant="h4" sx={{position:'absolute', fontSize:'50px', fontWeight:'600', opacity:0.07, top:'-30px'}} gutterBottom> PRICING </Typography>
                        <Typography variant="body1" sx={{color:'gray'}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit </Typography>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:{xs: "column", sm: "column", md: "column", lg: "row"}, boxShadow: '0 8px 20px rgba(0,0,0,0.2)'}}> 
                        <Box sx={{width:{xs:'100%', lg:'33.33%'}, px:4, py:6, boxShadow: "0 8px 20px rgba(0,0,0,0.1)", borderRadius: 2,}}> 
                            <Typography variant='h6' sx={{py:1}}>Free Plan</Typography> 
                            <Typography variant='body1' sx={{fontSize:'40px', color:'#4EB478', mb:4}}>
                            <sup>$</sup>0<sub style={{color:'black', opacity:0.3, fontSize:'20px'}}>/ month</sub>
                            </Typography> 
                            <Box sx={{display:'flex', alignItems:'center', color:'#4EB478', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1' sx={{color:'black', opacity:0.5}}>Quam adipiscing vitae proin</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', color:'#4EB478', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1' sx={{color:'black', opacity:0.5}}>Nec feugiat nisl pretium</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', color:'#4EB478', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1' sx={{color:'black', opacity:0.5}}>Nulla at volutpat diam uteera</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, opacity:0.3, mb:2}}> 
                                <FaXmark /> 
                                <Typography variant='body1' sx={{color:'black'}}><strike>Pharetra massa massa ultricies</strike></Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, opacity:0.3, mb:2}}> 
                                <FaXmark /> 
                                <Typography variant='body1' sx={{color:'black'}}><strike>Massa ultricies mi quis hendrerit</strike></Typography> 
                            </Box> 
                            <Box sx={{display:'flex', justifyContent:'center', mt:5}}> 
                                <Link href="#" sx={{fontSize:'16px', textDecoration:'none', color:'black', border:'1px solid black', borderRadius:'5px', 
                                    p:'10px 30px', opacity:0.3, '&:hover': { backgroundColor: '#4EB478', transition:'0.3s', opacity:1, border:'none', 
                                    color:'white'}, }}> 
                                    Buy Now 
                                </Link> 
                            </Box> 
                        </Box> 
                        
                        <Box sx={{width:{xs:'100%', lg:'33.33%'}, px:4, py:6, boxShadow: '0 32px 60px rgba(0,0,0,0.)', borderRadius:2, background:'#4EB478', color:'white'}}> 
                            <Typography variant='h6' sx={{py:1}}>Business Plan</Typography> 
                            <Typography variant='body1' sx={{fontSize:'40px', mb:4}}>
                            <sup>$</sup>49<sub style={{color:'white', fontSize:'20px'}}>/ month</sub>
                            </Typography> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1'>Quam adipiscing vitae proin</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1'>Nec feugiat nisl pretium</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1'>Nulla at volutpat diam uteera</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, mb:2}}> 
                                <FaCheck /> 
                                <Typography variant='body1'>Pharetra massa massa ultricies</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, mb:2}}> 
                                <FaCheck /> 
                                <Typography variant='body1'>Massa ultricies mi quis hendrerit</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', justifyContent:'center', mt:5}}> 
                                <Link href="#" sx={{fontSize:'16px', textDecoration:'none', color:'White', border:'1px solid white', borderRadius:'5px', 
                                    p:'10px 30px', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)', transition:'0.3s'}, }}> 
                                    Buy Now 
                                </Link> 
                            </Box> 
                        </Box> 
                        
                        <Box sx={{width:{xs:'100%', lg:'33.33%'}, px:4, py:6, boxShadow: '0 32px 60px rgba(0,0,0,0.1)', borderRadius:2}}> 
                            <Typography variant='h6' sx={{py:1}}>Free Plan</Typography> 
                            <Typography variant='body1' sx={{fontSize:'40px', color:'#4EB478', mb:4}}>
                            <sup>$</sup>29<sub style={{color:'black', opacity:0.3, fontSize:'20px'}}>/ month</sub>
                            </Typography> 
                            <Box sx={{display:'flex', alignItems:'center', color:'#4EB478', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1' sx={{color:'black', opacity:0.5}}>Quam adipiscing vitae proin</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', color:'#4EB478', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1' sx={{color:'black', opacity:0.5}}>Nec feugiat nisl pretium</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', color:'#4EB478', gap:1, mb:2}}> 
                                <FaCheck/> 
                                <Typography variant='body1' sx={{color:'black', opacity:0.5}}>Nulla at volutpat diam uteera</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, color:'#4EB478', mb:2}}> 
                                <FaCheck /> 
                                <Typography variant='body1' sx={{color:'black', opacity:0.5}}>Pharetra massa massa ultricies</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', alignItems:'center', gap:1, color:'#4EB478', mb:2}}> 
                                <FaCheck /> 
                                <Typography variant='body1' sx={{color:'black', opacity:0.5}}>Massa ultricies mi quis hendrerit</Typography> 
                            </Box> 
                            <Box sx={{display:'flex', justifyContent:'center', mt:5}}> 
                                <Link href="#" sx={{fontSize:'16px', textDecoration:'none', color:'black', border:'1px solid black', borderRadius:'5px', 
                                    p:'10px 30px', opacity:0.3, '&:hover': { backgroundColor: '#4EB478', transition:'0.3s', opacity:1, border:'none', 
                                    color:'white'}, }}> 
                                    Buy Now 
                                </Link> 
                            </Box> 
                        </Box> 
                    </Box>
                </Container>
            </React.Fragment>
        </Box>
    ); 
}

export default pricing;