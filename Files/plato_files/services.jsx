import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import service_image from './services.jpg';
import { useState, useEffect } from 'react';

function Services() {
  const [scroll, setScroll] = useState(false);
  
      // Scroll event to change AppBar background
      useEffect(() => {
          const handleScroll = () => {
          setScroll(window.scrollY > 50);
          };
  
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <>
      {/* Header Section Starts */}
        <React.Fragment>
          <CssBaseline />
            <AppBar id='services' position="fixed" sx={{ backgroundColor: scroll ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
                                                    boxShadow: 'none',
                                                    transition: 'background-color 0.3s, box-shadow 0.3s',
                                                    zIndex: 1000,
                                                }} >
              <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                    <Typography variant="h4" sx={{color:'white', fontWeight:'bold', cursor:'pointer'}}>Plato</Typography>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 4, fontWeight:'bold', }}>
                      <Typography component='a' href={'#home'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Home</Typography>
                      <Typography component='a' href={'#about'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>About</Typography>
                      <Typography component='a' href={'#services'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Services</Typography>
                      <Typography component='a' href={'#portfolio'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Portfolio</Typography>
                      <Typography component='a' href={'#pricing'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Pricing</Typography>
                      <Typography component='a' href={'#team'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Team</Typography>
                      <Typography component='a' href={'#contact'} sx={{ cursor: 'pointer', fontWeight:600, textDecoration:'none', color:'white', '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Contact</Typography>
                    </Box>
                </Toolbar>
              </Container>
            </AppBar>
        </React.Fragment>
      {/* Header Section Ends */}


      {/* Page Title Section Starts */}
      <Box sx={{backgroundColor: 'rgba(0, 0, 0, 1)'}}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Box sx={{ textAlign:'center', color:'white', pt:20, pb:8, display:'flex', flexDirection:'column', gap:1.5 }}>
              <Typography variant='h3' sx={{fontWeight:'600'}}>Service Details</Typography>
              <Typography variant='body1' sx={{fontSize:'16px'}}>
                <Typography component={Link} to="/" sx={{color:'#4EB478', textDecoration:'none', fontWeight:600}}>Home</Typography>
                <Typography component='span' sx={{color:'gray'}}> &nbsp;&nbsp;/&nbsp;&nbsp; </Typography>
                <Typography component='span' sx={{fontWeight:'600'}}>Service Details</Typography>
                
              </Typography>
            </Box>
          </Container>
        </React.Fragment>
      </Box>
      {/* Page Title Section Ends */}


      {/* Main Section Starts */}
      <Box sx={{my:12}}>
        <React.Fragment>
          < CssBaseline/>
            <Container>
              <Box sx={{position:'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", mb: 10 }}>
                <Typography variant="h4" sx={{fontWeight:'600'}} gutterBottom> SERVICES </Typography>
                <Typography variant="h4" sx={{position:'absolute', fontSize:'50px', fontWeight:'600', opacity:0.07, top:'-30px'}} gutterBottom> SERVICES </Typography>
                <Typography variant="body1" sx={{color:'gray'}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit </Typography>
              </Box>

              <Box sx={{display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, width: "100%", gap: 3 }}>
                {/* Left Section */}
                <Box sx={{width:'30%'}}>
                  <Box sx={{border:'1px solid', borderColor:'rgba(0,0,0,0.1)', p:4, display:'flex', flexWrap:'wrap', flexDirection:'column', gap:3, mb:4}}>
                    <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                      <Typography component='span' sx={{borderRadius:'100px', background:'#4EB478', py:2.5, px:'1.5px'}}></Typography>
                      <Typography component='span' sx={{fontSize:'18px', fontWeight:'600'}}>Web Design</Typography>
                    </Box>

                    <Box sx={{display:'flex', alignItems:'center', gap:2, '&:hover .stick':{background:'#4EB478',}}}>
                      <Typography className='stick' component='span' sx={{borderRadius:'100px', background:'rgba(0,0,0,0.2)', py:2.5, px:'1.5px', transition:'0.4s'}}></Typography>
                      <Typography component='span' sx={{fontSize:'17px', color:'rgba(0,0,0,0.4)'}}>Software Development</Typography>
                    </Box>

                    <Box sx={{display:'flex', alignItems:'center', gap:2, '&:hover .stick':{background:'#4EB478',}}}>
                      <Typography className='stick' component='span' sx={{borderRadius:'100px', background:'rgba(0,0,0,0.2)', py:2.5, px:'1.5px', transition:'0.4s'}}></Typography>
                      <Typography component='span' sx={{fontSize:'17px', color:'rgba(0,0,0,0.4)'}}>Product Management</Typography>
                    </Box>

                    <Box sx={{display:'flex', alignItems:'center', gap:2, '&:hover .stick':{background:'#4EB478',}}}>
                      <Typography className='stick' component='span' sx={{borderRadius:'100px', background:'rgba(0,0,0,0.2)', py:2.5, px:'1.5px', transition:'0.4s'}}></Typography>
                      <Typography component='span' sx={{fontSize:'17px', color:'rgba(0,0,0,0.4)'}}>Graphic Design</Typography>
                    </Box>
                    
                    <Box sx={{display:'flex', alignItems:'center', gap:2, '&:hover .stick':{background:'#4EB478',}}}>
                      <Typography className='stick' component='span' sx={{borderRadius:'100px', background:'rgba(0,0,0,0.2)', py:2.5, px:'1.5px', transition:'0.4s'}}></Typography>
                      <Typography component='span' sx={{fontSize:'17px', color:'rgba(0,0,0,0.4)'}}>Marketing</Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant='h6' sx={{fontWeight:'600',mb:1}}>Enim qui eos rerum in delectus</Typography>
                    <Typography variant='body1' sx={{fontSize:'15px'}}>
                      Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut 
                      non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.
                    </Typography>
                  </Box>
                </Box>

                {/* Right Section */}
                <Box sx={{width:'70%'}}>
                  <Box component="img" src={service_image} alt="Service Image" sx={{ width: "100%", borderRadius: 2, mb: 2 }}/>
                  <Typography component='span' sx={{fontWeight:'600', fontSize:'28px'}}>
                    Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas
                  </Typography>
                  <Typography sx={{opacity:0.8, mb:'15px', mt:'5px'}} gutterBottom>
                    Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et 
                    doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis 
                    fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
                  </Typography>

                  <Box sx={{display:'flex', flexDirection:'column', gap:1.5}}>
                    <Box sx={{display:'flex', gap:1}}>
                        <Box sx={{width:'4%', color:'#4EB478', p:'1px', borderRadius:'50%', fontSize: "20px", fontWeight:'bold', display: "flex", alignItems: "center",
                        justifyContent: "center",}}><FaRegCircleCheck /></Box>
                        <Typography>Aut eum totam accusantium voluptatem.</Typography>
                    </Box>

                    <Box sx={{display:'flex', gap:1}}>
                        <Box sx={{width:'4%', color:'#4EB478', p:'1px', borderRadius:'50%', fontSize: "20px", fontWeight:'bold', display: "flex", alignItems: "center",
                        justifyContent: "center",}}><FaRegCircleCheck /></Box>
                        <Typography>Assumenda et porro nisi nihil nesciunt voluptatibus.</Typography>
                    </Box>

                    <Box sx={{display:'flex', gap:1}}>
                        <Box sx={{width:'4%', color:'#4EB478', p:'1px', borderRadius:'50%', fontSize: "20px", fontWeight:'bold', display: "flex", alignItems: "center",
                        justifyContent: "center",}}><FaRegCircleCheck /></Box>
                        <Typography>
                        Ullamco laboris nisi ut aliquip ex ea
                        </Typography>
                    </Box>

                    <Typography variant="body1" sx={{color:'gray', mt:'20px'}}>
                      Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi 
                      optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
                    </Typography>
                    <Typography variant="body1" sx={{color:'gray'}}>
                      Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae 
                      mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio 
                      ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam 
                      vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae 
                      ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. 
                      Sunt eum quia impedit dolore alias explicabo ea.
                    </Typography>
                </Box>

                </Box>
              </Box>
            </Container>
        </React.Fragment>
      </Box>
      {/* Main Section Ends */}
      

      {/* Footer Section Starts */}
      <Box sx={{background:'black', pt:8, pb:5}}>
        <React.Fragment>
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
      {/* Footer Section Ends */}
    </>
  );
}

export default Services;