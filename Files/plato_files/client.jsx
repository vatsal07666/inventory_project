import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const clientsettings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 900, // screen width < 900px
            settings: {
            slidesToShow: 4,
            },
        },
        {
            breakpoint: 600, // screen width < 600px
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 400, // screen width < 400px
            settings: {
            slidesToShow: 1,
            },
        },
    ]
};
function client(){
    return(
        <Box sx={{ background: '#F9F9F9', py:'50px' }}>
            <React.Fragment>
            <CssBaseline />
            <Container>
                <Slider {...clientsettings} className='client-slider'>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box component="img" src="/plato_images/clients/client-1.png" alt="client-1" sx={{ maxWidth: '100px', width: '80%', height: 'auto', filter:'grayscale(100%)', opacity:0.6, transition: 'filter 0.3s ease-in-out', '&:hover':{filter:'grayscale(0%)', opacity:1}}} />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box component="img" src="/plato_images/clients/client-2.png" alt="client-2" sx={{ maxWidth: '100px', width: '80%', height: 'auto', filter:'grayscale(100%)', opacity:0.6, transition: 'filter 0.3s ease-in-out', '&:hover':{filter:'grayscale(0%)', opacity:1}}} />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box component="img" src="/plato_images/clients/client-3.png" alt="client-3" sx={{ maxWidth: '100px', width: '80%', height: 'auto', filter:'grayscale(100%)', opacity:0.6, transition: 'filter 0.3s ease-in-out', '&:hover':{filter:'grayscale(0%)', opacity:1}}} />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box component="img" src="/plato_images/clients/client-4.png" alt="client-4" sx={{ maxWidth: '100px', width: '80%', height: 'auto', filter:'grayscale(100%)', opacity:0.6, transition: 'filter 0.3s ease-in-out', '&:hover':{filter:'grayscale(0%)', opacity:1}}} />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box component="img" src="/plato_images/clients/client-5.png" alt="client-5" sx={{ maxWidth: '100px', width: '80%', height: 'auto', filter:'grayscale(100%)', opacity:0.6, transition: 'filter 0.3s ease-in-out', '&:hover':{filter:'grayscale(0%)', opacity:1}}} />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box component="img" src="/plato_images/clients/client-6.png" alt="client-6" sx={{ maxWidth: '100px', width: '80%', height: 'auto', filter:'grayscale(100%)', opacity:0.6, transition: 'filter 0.3s ease-in-out', '&:hover':{filter:'grayscale(0%)', opacity:1}}} />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box component="img" src="/plato_images/clients/client-7.png" alt="client-7" sx={{ maxWidth: '100px', width: '80%', height: 'auto', filter:'grayscale(100%)', opacity:0.6, transition: 'filter 0.3s ease-in-out', '&:hover':{filter:'grayscale(0%)', opacity:1}}} />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box component="img" src="/plato_images/clients/client-8.png" alt="client-8" sx={{ maxWidth: '100px', width: '80%', height: 'auto', filter:'grayscale(100%)', opacity:0.6, transition: 'filter 0.3s ease-in-out', '&:hover':{filter:'grayscale(0%)', opacity:1}}} />
                </Box>
                </Slider>
            </Container>
            </React.Fragment>
        </Box>
    );
}

export default client;