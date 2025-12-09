import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function callAction(){
    return(
        <Box sx={{width:'100%', backgroundImage:'url(/plato_images/cta-bg.jpg)', backgroundSize:'cover', backgroundPosition:'center',
                    backgroundAttachment:'fixed', py: 10, color:'white', position:'relative'}}>
            {/* Dark overlay */}
            <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.45)' }}/>
            
            <React.Fragment>
            <CssBaseline/>
            <Container sx={{position:'relative', zIndex:1}}>
                <Box sx={{textAlign:'center'}}>
                  <Typography variant='h4' sx={{fontWeight:'600', mb:2}}>Call To Action</Typography>
                  <Typography variant='body1' sx={{maxWidth:'950px', mx:'auto', mb:4}}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                  <Link href="#" sx={{textDecoration:'none', color:'white', border:'3px solid #FFFFFF', borderRadius:'5px', p:'15px 50px', mt:'30px', 
                      '&:hover': { backgroundColor: '#4EB478', transition:'0.4s', border:'none'}, }}> Call To Action </Link>
                </Box>
              </Container>
            </React.Fragment>
        </Box>
    );
} 

export default callAction;