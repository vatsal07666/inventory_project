import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsQuestionCircle } from "react-icons/bs";

function questions(){
    return(
        <Box sx={{my:12}}>
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Box>
                        <Box sx={{position:'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", mb: 8 }}>
                            <Typography variant="h4" sx={{fontWeight:'600'}} gutterBottom> FREQUENTLY ASKED QUESTIONS </Typography>
                            <Typography variant="h4" sx={{position:'absolute', fontSize:'50px', fontWeight:'600', opacity:0.05, top:'-30px'}} gutterBottom> FREQUENTLY ASKED QUESTIONS </Typography>
                            <Typography variant="body1" sx={{color:'gray'}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit </Typography>
                        </Box>

                        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', rowGap:'20px'}}>
                            <Box sx={{maxWidth:'800px', backgroundColor:'transparent', boxShadow:'none'}}>
                                <Accordion disableGutters elevation={0} sx={{ py:1, transition:'0.4s ease-in-out',
                                    "&:before": { display: "none" }, // removes the thin divider line
                                        backgroundColor: "#f0f0f0",
                                        boxShadow: "none",
                                    "&.Mui-expanded": { backgroundColor: "#4EB478", // background when expanded
                                        boxShadow: "none", // ensure no shadow when expanded
                                        color:'white'
                                    }
                                }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} 
                                        aria-controls="panel1-content" id="panel1-header" 
                                        sx={{"& .MuiSvgIcon-root": {color: "gray",}, "&.Mui-expanded .MuiSvgIcon-root": {color: "#f0f0f0", }}}>

                                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:2}}>
                                        <Box sx={{fontSize:'24px', color:'#4EB478', ".Mui-expanded &": { color: "white" }}}><BsQuestionCircle /></Box>
                                        <Typography component="span" 
                                                sx={{ transition:'0.2s', fontSize:'18px', '&:hover': {color:'#4EB478'},
                                                ".Mui-expanded &": { color: "white" }}}>
                                            Non consectetur a erat nam at lectus urna duis?
                                        </Typography>
                                    </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non 
                                        curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            <Box sx={{maxWidth:'800px', backgroundColor:'transparent', boxShadow:'none'}}>
                                <Accordion disableGutters elevation={0} sx={{ py:1, transition:'0.4s ease-in-out',
                                    "&:before": { display: "none" }, // removes the thin divider line
                                        backgroundColor: "#f0f0f0",
                                        boxShadow: "none",
                                    "&.Mui-expanded": { backgroundColor: "#4EB478", // background when expanded
                                        boxShadow: "none", // ensure no shadow when expanded
                                        color:'white'
                                    }
                                }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} 
                                        aria-controls="panel1-content" id="panel1-header" 
                                        sx={{"& .MuiSvgIcon-root": {color: "gray",}, "&.Mui-expanded .MuiSvgIcon-root": {color: "#f0f0f0", }}}>
                                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:2}}>
                                        <Box sx={{fontSize:'24px', color:'#4EB478', ".Mui-expanded &": { color: "white" }}}><BsQuestionCircle /></Box>
                                        <Typography component="span" 
                                                sx={{ transition:'0.2s', fontSize:'18px', '&:hover': {color:'#4EB478'},
                                                ".Mui-expanded &": { color: "white" }}}>
                                            Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                                        </Typography>
                                    </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit 
                                        laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. 
                                        Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa 
                                        tincidunt dui.
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            <Box sx={{maxWidth:'800px', backgroundColor:'transparent', boxShadow:'none'}}>
                                <Accordion disableGutters elevation={0} sx={{ py:1, transition:'0.4s ease-in-out',
                                    "&:before": { display: "none" }, // removes the thin divider line
                                        backgroundColor: "#f0f0f0",
                                        boxShadow: "none",
                                    "&.Mui-expanded": { backgroundColor: "#4EB478", // background when expanded
                                        boxShadow: "none", // ensure no shadow when expanded
                                        color:'white'
                                    }
                                }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} 
                                        aria-controls="panel1-content" id="panel1-header" 
                                        sx={{"& .MuiSvgIcon-root": {color: "gray",}, "&.Mui-expanded .MuiSvgIcon-root": {color: "#f0f0f0", }}}>
                                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:2}}>
                                        <Box sx={{fontSize:'24px', color:'#4EB478', ".Mui-expanded &": { color: "white" }}}><BsQuestionCircle /></Box>
                                        <Typography component="span" 
                                                sx={{ transition:'0.2s', fontSize:'18px', '&:hover': {color:'#4EB478'},
                                                ".Mui-expanded &": { color: "white" }}}>
                                            Dolor sit amet consectetur adipiscing elit pellentesque?
                                        </Typography>
                                    </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar 
                                        elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque 
                                        eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis 
                                        sed odio morbi quis
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            <Box sx={{maxWidth:'800px', backgroundColor:'transparent', boxShadow:'none'}}>
                                <Accordion disableGutters elevation={0} sx={{ py:1, transition:'0.4s ease-in-out',
                                    "&:before": { display: "none" }, // removes the thin divider line
                                        backgroundColor: "#f0f0f0",
                                        boxShadow: "none",
                                    "&.Mui-expanded": { backgroundColor: "#4EB478", // background when expanded
                                        boxShadow: "none", // ensure no shadow when expanded
                                        color:'white'
                                    }
                                }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} 
                                        aria-controls="panel1-content" id="panel1-header" 
                                        sx={{"& .MuiSvgIcon-root": {color: "gray",}, "&.Mui-expanded .MuiSvgIcon-root": {color: "#f0f0f0", }}}>
                                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:2}}>
                                        <Box sx={{fontSize:'24px', color:'#4EB478', ".Mui-expanded &": { color: "white" }}}><BsQuestionCircle /></Box>
                                        <Typography component="span" 
                                                sx={{ transition:'0.2s', fontSize:'18px', '&:hover': {color:'#4EB478'},
                                                ".Mui-expanded &": { color: "white" }}}>
                                            Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                                        </Typography>
                                    </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet 
                                        id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque 
                                        elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            <Box sx={{maxWidth:'800px', backgroundColor:'transparent', boxShadow:'none'}}>
                                <Accordion disableGutters elevation={0} sx={{ py:1, transition:'0.4s ease-in-out',
                                    "&:before": { display: "none" }, // removes the thin divider line
                                        backgroundColor: "#f0f0f0",
                                        boxShadow: "none",
                                    "&.Mui-expanded": { backgroundColor: "#4EB478", // background when expanded
                                        boxShadow: "none", // ensure no shadow when expanded
                                        color:'white'
                                    }
                                }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} 
                                        aria-controls="panel1-content" id="panel1-header" 
                                        sx={{"& .MuiSvgIcon-root": {color: "gray",}, "&.Mui-expanded .MuiSvgIcon-root": {color: "#f0f0f0", }}}>
                                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:2}}>
                                        <Box sx={{fontSize:'24px', color:'#4EB478', ".Mui-expanded &": { color: "white" }}}><BsQuestionCircle /></Box>
                                        <Typography component="span" 
                                                sx={{ transition:'0.2s', fontSize:'18px', '&:hover': {color:'#4EB478'},
                                                ".Mui-expanded &": { color: "white" }}}>
                                            Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                                        </Typography>
                                    </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante 
                                        in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum 
                                        est. Purus gravida quis blandit turpis cursus in
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </React.Fragment>
        </Box>
    );
}

export default questions;