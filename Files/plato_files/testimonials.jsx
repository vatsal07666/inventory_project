import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";

const testimonialssettings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
};

function testimonials(){
    return(
        <Box sx={{width:'100%', backgroundImage:'url(/plato_images/testimonials-bg.jpg)', backgroundSize:'cover', backgroundPosition:'center', py: 10, color:'white', position:'relative'}}>    
        {/* Dark overlay */}
        <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.7)' }}/>
            <React.Fragment>
                <CssBaseline />
                <Container sx={{position:'relative', zIndex:1}}>
                    <Slider {...testimonialssettings} className='slider'>
                        <Box sx={{textAlign:'center'}}>
                            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Box component='img' src='/plato_images/testimonials/testimonials-1.jpg' alt='testimonials-1' sx={{width:'9%', borderRadius:'50%',
                                    background:'rgba(255, 255, 255, 0.2)', p:1, mb:1}}/>
                                <Typography variant='h6' sx={{fontWeight:'600'}}>Saul Goodman</Typography>
                                <Typography variant='body1' sx={{opacity:0.5, fontSize:'16px'}}>Ceo & Founder</Typography>
                                <Box sx={{color:'orange', fontSize:'18px', mt:2}}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </Box>
                            </Box>
                            <Typography variant='body1' sx={{maxWidth:'950px', mx:'auto', mt:2.5, mb:4}}>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, 
                                ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                            </Typography>
                        </Box>
            
                        <Box sx={{textAlign:'center'}}>
                            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Box component='img' src='/plato_images/testimonials/testimonials-2.jpg' alt='testimonials-2' sx={{width:'9%', borderRadius:'50%',
                                    background:'rgba(255, 255, 255, 0.2)', p:1, mb:1}}/>
                                <Typography variant='h6' sx={{fontWeight:'600'}}>Sara Wilsson</Typography>
                                <Typography variant='body1' sx={{opacity:0.5, fontSize:'16px'}}>Designer</Typography>
                                <Box sx={{color:'orange', fontSize:'18px', mt:2}}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </Box>
                            </Box>
                            <Typography variant='body1' sx={{maxWidth:'950px', mx:'auto', mt:2.5}}>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit 
                                fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                            </Typography>
                        </Box>
            
                        <Box sx={{textAlign:'center'}}>
                            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Box component='img' src='/plato_images/testimonials/testimonials-3.jpg' alt='testimonials-3' sx={{width:'9%', borderRadius:'50%',
                                    background:'rgba(255, 255, 255, 0.2)', p:1, mb:1}}/>
                                <Typography variant='h6' sx={{fontWeight:'600'}}>Jena Karlis</Typography>
                                <Typography variant='body1' sx={{opacity:0.5, fontSize:'16px'}}>Store Owner</Typography>
                                <Box sx={{color:'orange', fontSize:'18px', mt:2}}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </Box>
                            </Box>
                            <Typography variant='body1' sx={{maxWidth:'950px', mx:'auto', mt:2.5}}>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore 
                                quem eram duis noster aute amet eram fore quis sint minim.
                            </Typography>
                        </Box>
            
                        <Box sx={{textAlign:'center'}}>
                            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Box component='img' src='/plato_images/testimonials/testimonials-4.jpg' alt='testimonials-4' sx={{width:'9%', borderRadius:'50%',
                                    background:'rgba(255, 255, 255, 0.2)', p:1, mb:1}}/>
                                <Typography variant='h6' sx={{fontWeight:'600'}}>Matt Brandon</Typography>
                                <Typography variant='body1' sx={{opacity:0.5, fontSize:'16px'}}>Freelancer</Typography>
                                <Box sx={{color:'orange', fontSize:'18px', mt:2}}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </Box>
                            </Box>
                            <Typography variant='body1' sx={{maxWidth:'950px', mx:'auto', mt:2.5}}>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim 
                                duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                            </Typography>
                        </Box>
            
                        <Box sx={{textAlign:'center'}}>
                            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Box component='img' src='/plato_images/testimonials/testimonials-5.jpg' alt='testimonials-5' sx={{width:'9%', borderRadius:'50%',
                                    background:'rgba(255, 255, 255, 0.2)', p:1, mb:1}}/>
                                <Typography variant='h6' sx={{fontWeight:'600'}}>John Larson</Typography>
                                <Typography variant='body1' sx={{opacity:0.5, fontSize:'16px'}}>Entrepreneur</Typography>
                                <Box sx={{color:'orange', fontSize:'18px', mt:2}}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </Box>
                            </Box>
                            <Typography variant='body1' sx={{maxWidth:'950px', mx:'auto', mt:2.5}}>
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis 
                                sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                            </Typography>
                        </Box>
                    </Slider>
                </Container>
            </React.Fragment>
        </Box>
    );
}

export default testimonials;