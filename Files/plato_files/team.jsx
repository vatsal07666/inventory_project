import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function team(){
    return(
        <Box id='team' sx={{my:12, scrollMarginTop: '185px',}}>
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Box sx={{position:'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", mb: 8 }}>
                        <Typography variant="h4" sx={{fontWeight:'600'}} gutterBottom> TEAM </Typography>
                        <Typography variant="h4" sx={{position:'absolute', fontSize:'50px', fontWeight:'600', opacity:0.07, top:'-30px'}} gutterBottom> TEAM </Typography>
                    </Box>

                    <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:3, mt:10}}>
                        <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 48%', md: '0 0 23%' }, maxWidth: { xs: '100%', sm: '48%', md: '23%' }, position: 'relative', overflow: 'hidden', cursor: 'pointer',
                            '&:hover .overlay': { opacity: 1, }, '&:hover .details': { transform: 'translateY(0)', opacity: 1, } }}>
                            {/* Image */}
                            <Box component="img" src="/plato_images/team/team-1.jpg" alt="team-1" sx={{ width: '100%'}}/>

                            {/* Gradient Overlay */}
                            <Box className="overlay" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))', opacity: 0,
                                transition: 'opacity 0.4s ease-in-out', zIndex: 1, }}/>

                            {/* Details Sliding In */}
                            <Box className="details" sx={{ position: 'absolute', bottom: 30, width: '100%', color: 'white', textAlign: 'center',
                                transform: 'translateY(100%)', opacity: 0, transition: 'all 0.4s ease-in-out', zIndex: 2, }}>
                                <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 600 }}> Waltor White </Typography>
                                <Typography variant="body1" sx={{ fontSize: '12px', fontStyle: 'italic', mb: 2 }}>
                                    Chief Executive Officer
                                </Typography>
                                <Box sx={{ fontSize: '20px', display: 'flex', justifyContent: 'center', gap: 4, }}>
                                    <FaXTwitter /> <FaFacebook /> <FaInstagram /> <FaLinkedin />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 48%', md: '0 0 23%' }, maxWidth: { xs: '100%', sm: '48%', md: '23%' }, position: 'relative', overflow: 'hidden', cursor: 'pointer',
                            '&:hover .overlay': { opacity: 1, }, '&:hover .details': { transform: 'translateY(0)', opacity: 1, } }}>
                            {/* Image */}
                            <Box component="img" src="/plato_images/team/team-2.jpg" alt="team-2" sx={{ width: '100%'}}/>

                            {/* Gradient Overlay */}
                            <Box className="overlay" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))', opacity: 0,
                                transition: 'opacity 0.4s ease-in-out', zIndex: 1, }}/>

                            {/* Details Sliding In */}
                            <Box className="details" sx={{ position: 'absolute', bottom: 30, width: '100%', color: 'white', textAlign: 'center',
                                transform: 'translateY(100%)', opacity: 0, transition: 'all 0.4s ease-in-out', zIndex: 2, }}>
                                <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 600 }}> Sarah Jhonson </Typography>
                                <Typography variant="body1" sx={{ fontSize: '12px', fontStyle: 'italic', mb: 2 }}>
                                    Product Manager
                                </Typography>
                                <Box sx={{ fontSize: '20px', display: 'flex', justifyContent: 'center', gap: 4, }}>
                                    <FaXTwitter /> <FaFacebook /> <FaInstagram /> <FaLinkedin />
                                </Box>
                            </Box>
                        </Box>
                        
                        <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 48%', md: '0 0 23%' }, maxWidth: { xs: '100%', sm: '48%', md: '23%' }, position: 'relative', overflow: 'hidden', cursor: 'pointer',
                            '&:hover .overlay': { opacity: 1, }, '&:hover .details': { transform: 'translateY(0)', opacity: 1, } }}>
                            {/* Image */}
                            <Box component="img" src="/plato_images/team/team-3.jpg" alt="team-3" sx={{ width: '100%'}}/>

                            {/* Gradient Overlay */}
                            <Box className="overlay" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))', opacity: 0,
                                transition: 'opacity 0.4s ease-in-out', zIndex: 1, }}/>

                            {/* Details Sliding In */}
                            <Box className="details" sx={{ position: 'absolute', bottom: 30, width: '100%', color: 'white', textAlign: 'center',
                                transform: 'translateY(100%)', opacity: 0, transition: 'all 0.4s ease-in-out', zIndex: 2, }}>
                                <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 600 }}> William Anderson </Typography>
                                <Typography variant="body1" sx={{ fontSize: '12px', fontStyle: 'italic', mb: 2 }}>
                                    CTO
                                </Typography>
                                <Box sx={{ fontSize: '20px', display: 'flex', justifyContent: 'center', gap: 4, }}>
                                    <FaXTwitter /> <FaFacebook /> <FaInstagram /> <FaLinkedin />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ flex: { xs: '0 0 100%', sm: '0 0 48%', md: '0 0 23%' }, maxWidth: { xs: '100%', sm: '48%', md: '23%' }, position: 'relative', overflow: 'hidden', cursor: 'pointer',
                            '&:hover .overlay': { opacity: 1, }, '&:hover .details': { transform: 'translateY(0)', opacity: 1, } }}>
                            {/* Image */}
                            <Box component="img" src="/plato_images/team/team-4.jpg" alt="team-4" sx={{ width: '100%'}}/>

                            {/* Gradient Overlay */}
                            <Box className="overlay" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))', opacity: 0,
                                transition: 'opacity 0.4s ease-in-out', zIndex: 1, }}/>

                            {/* Details Sliding In */}
                            <Box className="details" sx={{ position: 'absolute', bottom: 30, width: '100%', color: 'white', textAlign: 'center',
                                transform: 'translateY(100%)', opacity: 0, transition: 'all 0.4s ease-in-out', zIndex: 2, }}>
                                <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 600 }}> Amanda Japson</Typography>
                                <Typography variant="body1" sx={{ fontSize: '12px', fontStyle: 'italic', mb: 2 }}>
                                    Accountant
                                </Typography>
                                <Box sx={{ fontSize: '20px', display: 'flex', justifyContent: 'center', gap: 4, }}>
                                    <FaXTwitter /> <FaFacebook /> <FaInstagram /> <FaLinkedin />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>
        </Box>
    );
}

export default team;