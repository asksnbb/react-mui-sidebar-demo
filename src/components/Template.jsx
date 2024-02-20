import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Templateimg from "../assets/images/Modernize-Bootstrap.jpg";

const Template = () => {
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        fontWeight:"600",
        padding: '10px 16px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#5D87FF',
        borderColor: '#5D87FF',
        marginTop:"12px",
        '&:hover': {
          backgroundColor: '#4f73d9',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
      });
  return (
    <>
            <Grid item xs={7} >
           <Grid container sx={{ borderRadius:"10px",boxShadow:'0px 2px 6px rgba(37,83,185,0.1)'}}>
              <Grid item xs={6}>
              <Box component="img" src={Templateimg} sx={{width:"100%",display:"flex"}} />
              </Grid>
              <Grid item xs={6} sx={{alignSelf:"center" , paddingLeft:"40px"}}>
            <Box>
            <Typography variant="h1" component="h2" sx={{fontSize:"22px" , fontWeight:"600", color:"#5D87FF"}}>Modernize React Admin Dashboard Template</Typography>
            <Typography component="p" sx={{fontSize:"14px" , fontWeight:"400", color:"#7C8FAC" , marginTop:"20px",paddingRight:"5rem"}}>Buy now the pro version for many more features.</Typography>
            <BootstrapButton variant="contained" disableRipple>Check the Template</BootstrapButton>
            </Box>
              </Grid>
           </Grid>

        </Grid>
    </>
  )
}

export default Template
