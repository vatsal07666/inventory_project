import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function portfolio(){
    return(
        <Box id='portfolio' sx={{background:'#FFFFFF', mt:20, mb:10, scrollMarginTop: '185px',}}>
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Box sx={{position:'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", mb: 8 }}>
                        <Typography variant="h4" sx={{fontWeight:'600'}} gutterBottom> PORTFOLIO </Typography>
                        <Typography variant="h4" sx={{position:'absolute', fontSize:'50px', fontWeight:'600', opacity:0.07, top:'-30px'}} gutterBottom> PORTFOLIO </Typography>
                        <Typography variant="body1" sx={{color:'gray'}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit </Typography>
                    </Box>

                    <Box sx={{display:'flex', flexDirection:{xs: 'column', md: 'row', lg: 'row' }, flexWrap:'wrap', gap:3}}>
                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/app-1.jpg' alt='App 1' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>App 1</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/product-1.jpg' alt='Product 1' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Product 1</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/branding-1.jpg' alt='Branding 1' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Branding 1</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/books-1.jpg' alt='Books 1' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Books 1</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/app-2.jpg' alt='App 2' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>App 2</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/product-2.jpg' alt='Product 2' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Product 2</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/branding-2.jpg' alt='Branding 2' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Branding 2</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/books-2.jpg' alt='Books 2' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Books 2</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/app-3.jpg' alt='App 3' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>App 3</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/product-3.jpg' alt='Product 3' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Product 3</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/branding-3.jpg' alt='Branding 3' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Branding 3</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>

                        <Box sx={{width:{xs: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)'}, boxShadow: '0 8px 20px rgba(0,0,0,0.1)', overflow:'hidden', '&:hover .portfolio-image':{transform:'scale(1.05)'}}}>
                            <Box className='portfolio-image' component="img" src='/plato_images/portfolio/books-3.jpg' alt='Books 3' sx={{width:'100%', transition:'0.4s ease', cursor:'pointer'}}></Box>
                            <Box sx={{p:3}}>
                                <Typography variant='h6' sx={{fontWeight:'600', opacity:0.8}}>Books 3</Typography>
                                <Typography variant='body1' sx={{maxWidth:'300px', fontSize:'14px', opacity:0.8}}>Lorem ipsum, dolor sit amet consectetur</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>
        </Box>
    );
}

export default portfolio;