import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Bar(){
    const [scroll, setScroll] = useState(false);

    // Scroll event to change AppBar background
    useEffect(() => {
        const handleScroll = () => {
        setScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            <Box sx={{ backgroundImage: 'url(/plato_images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', position: 'absolute', width: '100%', height: '100%', }} />

            {/* Black overlay */}
            <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.68)', position: 'absolute', width: '100%', height: '100%' }} />

            <React.Fragment>
                <CssBaseline />
                    <AppBar position="fixed" sx={{ backgroundColor: scroll ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
                                                    boxShadow: 'none',
                                                    transition: 'background-color 0.3s, box-shadow 0.3s',
                                                    zIndex: 1000,
                                                }} >
                    <Container>
                        <Box sx={{ position: 'relative', zIndex: 2, py:2 }}>
                            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                                <Typography variant="h4" sx={{color:'white', fontWeight:'bold', cursor:'pointer'}}>Plato</Typography>

                                <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 4, fontWeight:'bold', }}>
                                    <Typography component='a' href={'#'} sx={{ color: "#4EB478", cursor: 'pointer', textDecoration:'none', fontWeight:600, }}>Home</Typography>
                                    <Typography component='a' href={'#about'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>About</Typography>
                                    <Typography component='a' href={'#service'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Services</Typography>
                                    <Typography component='a' href={'#portfolio'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Portfolio</Typography>
                                    <Typography component='a' href={'#pricing'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Pricing</Typography>
                                    <Typography component='a' href={'#team'} sx={{ cursor: 'pointer', textDecoration:'none', color:'white', fontWeight:600, '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Team</Typography>
                                    <Typography component='a' href={'#contact'} sx={{ cursor: 'pointer', fontWeight:600, textDecoration:'none', color:'white', '&:hover': {color:'#4EB478', transition:'0.2s'} }}>Contact</Typography>
                                </Box>
                            </Toolbar>
                        </Box>
                    </Container>
                    </AppBar>


                    <Container>
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minHeight: { xs: 'calc(100vh - 430px)', lg: '0vh' }, textAlign:'center', py:'240px'}}> 
                            <Box sx={{display:'inline-flex', flexDirection:'column', justifyContent:'center', alignItems:'center', position: 'relative', zIndex: 2, color:'white', textAlign:'center'}}>
                            <Typography variant='h3' sx={{fontWeight:'600', mb:'10px', fontSize: '3rem',}}>
                                Start your new digital<br/> experience with Plato
                            </Typography>
                            <Typography variant='h5'>
                                We are team of talented designers making websites with Bootstrap
                            </Typography>
                            <Link href="#about" sx={{textDecoration:'none', color:'white', border:'3px solid #4EB478', borderRadius:'5px', p:'6px 40px', mt:'30px', 
                                '&:hover': { backgroundColor: '#4EB478', transition:'0.3s'}, }}> Get Started </Link>
                            </Box>
                        </Box>
                    </Container>
            </React.Fragment>
        </Box>
    );
}

export default Bar;

// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

// function Bar() {
//   const [elevate, setElevate] = useState(false);

//   // Scroll event to change AppBar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setElevate(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <Box sx={{ position: 'relative', minHeight: '100vh' }}>
//       {/* Background image */}
//       <Box
//         sx={{
//           backgroundImage: 'url(/plato_images/hero-bg.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           zIndex: -2,
//         }}
//       />

//       {/* Black overlay */}
//       <Box
//         sx={{
//           backgroundColor: 'rgba(0, 0, 0, 0.68)',
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           zIndex: -1,
//         }}
//       />

//       <React.Fragment>
//         <CssBaseline />

//         {/* Fixed AppBar */}
//         <AppBar
//           position="fixed"
//           sx={{
//             backgroundColor: elevate ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
//             boxShadow: 'none',
//             transition: 'background-color 0.3s, box-shadow 0.3s',
//             zIndex: 1000,
//           }}
//         >
//           <Container>
//             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py:3 }}>
//               <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
//                 Plato
//               </Typography>

//               <Box
//                 sx={{
//                   display: { xs: 'none', lg: 'flex' },
//                   gap: 4,
//                   fontWeight: 'bold',
//                 }}
//               >
//                 {['Home', 'About', 'Service', 'Portfolio', 'Pricing', 'Team', 'Contact'].map((text) => (
//                   <Typography
//                     key={text}
//                     component="a"
//                     href={`#${text.toLowerCase()}`}
//                     sx={{
//                       cursor: 'pointer',
//                       textDecoration: 'none',
//                       color: 'white',
//                       fontWeight: 600,
//                       '&:hover': {
//                         color: '#4EB478',
//                         transition: '0.2s',
//                       },
//                     }}
//                   >
//                     {text}
//                   </Typography>
//                 ))}
//               </Box>
//             </Toolbar>
//           </Container>
//         </AppBar>

//         {/* Spacer to offset fixed AppBar */}
//         <Toolbar />

//         <Container>
//           {/* Hero Section */}
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               minHeight: { xs: 'calc(100vh - 430px)', lg: '0vh' },
//               textAlign: 'center',
//               my: '240px',
//             }}
//           >
//             <Box
//               sx={{
//                 display: 'inline-flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 position: 'relative',
//                 zIndex: 2,
//                 color: 'white',
//                 textAlign: 'center',
//               }}
//             >
//               <Typography
//                 variant="h3"
//                 sx={{ fontWeight: '600', mb: '10px', fontSize: '3rem' }}
//               >
//                 Start your new digital
//                 <br /> experience with Plato
//               </Typography>
//               <Typography variant="h5">
//                 We are team of talented designers making websites with Bootstrap
//               </Typography>
//               <Link
//                 href="#about"
//                 sx={{
//                   textDecoration: 'none',
//                   color: 'white',
//                   border: '3px solid #4EB478',
//                   borderRadius: '5px',
//                   p: '6px 40px',
//                   mt: '30px',
//                   '&:hover': {
//                     backgroundColor: '#4EB478',
//                     transition: '0.3s',
//                   },
//                 }}
//               >
//                 Get Started
//               </Link>
//             </Box>
//           </Box>
//         </Container>
//       </React.Fragment>
//     </Box>
//   );
// }

// export default Bar;
