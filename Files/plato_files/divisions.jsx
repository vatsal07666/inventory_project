import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function devisions(){
    return(
        <Box sx={{background:'#FFFFFF', my:'60px'}}>
            <React.Fragment>
            <CssBaseline />
            <Container>
                <Box sx={{display:'flex', flexDirection:{sm:'column', md:'row', lg:'row'}, flexWrap:'wrap'}}>
                <Box sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, border:'1px solid rgba(0,0,0,0.2)', p:'40px'}}>
                    <Typography variant='h5' sx={{color:'#4EB478', mb:'20px'}}>01</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.6)', fontSize:'23px', fontWeight:'600', mb:'14px'}}>Lorem Ipsum</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.5)', fontSize:'15px'}}>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</Typography>
                </Box>
                <Box sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, border:'1px solid rgba(0,0,0,0.2)', p:'40px'}}>
                    <Typography variant='h5' sx={{color:'#4EB478', mb:'20px'}}>02</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.6)', fontSize:'23px', fontWeight:'600', mb:'14px'}}>Repellat Nihil</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.5)', fontSize:'15px'}}>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</Typography>
                </Box>
                <Box sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, border:'1px solid rgba(0,0,0,0.2)', p:'40px'}}>
                    <Typography variant='h5' sx={{color:'#4EB478', mb:'20px'}}>03</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.6)', fontSize:'23px', fontWeight:'600', mb:'14px'}}>Ad ad velit qui</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.5)', fontSize:'15px'}}>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</Typography>
                </Box>
                <Box sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, border:'1px solid rgba(0,0,0,0.2)', p:'40px'}}>
                    <Typography variant='h5' sx={{color:'#4EB478', mb:'20px'}}>04</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.6)', fontSize:'23px', fontWeight:'600', mb:'14px'}}>Repellendus molestiae</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.5)', fontSize:'15px'}}>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</Typography>
                </Box>
                <Box sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, border:'1px solid rgba(0,0,0,0.2)', p:'40px'}}>
                    <Typography variant='h5' sx={{color:'#4EB478', mb:'20px'}}>05</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.6)', fontSize:'23px', fontWeight:'600', mb:'14px'}}>Sapiente Magnam</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.5)', fontSize:'15px'}}>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</Typography>
                </Box>
                <Box sx={{width:{sm:'100%', md:'50%', lg:'33.33%'}, border:'1px solid rgba(0,0,0,0.2)', p:'40px'}}>
                    <Typography variant='h5' sx={{color:'#4EB478', mb:'20px'}}>06</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.6)', fontSize:'23px', fontWeight:'600', mb:'14px'}}>Facilis Impedit</Typography>
                    <Typography variant='body1' sx={{color:'rgba(0,0,0,0.5)', fontSize:'15px'}}>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</Typography>
                </Box>
                </Box>
            </Container>
            </React.Fragment>
        </Box>
    );
}

export default devisions;