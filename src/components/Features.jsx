import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
const Features = () => {
    const CustomSwitch = styled((props) => <Switch {...props} />)(({ theme }) => ({
        '&.MuiSwitch-root': {
          width: '68px',
          height: '49px',
        },
        '&  .MuiButtonBase-root': {
          top: '6px',
          left: '6px',
        },
        '&  .MuiButtonBase-root.Mui-checked .MuiSwitch-thumb': {
          backgroundColor: '#5D87FF',
        },
        '& .MuiSwitch-thumb': {
          width: '18px',
          height: '18px',
          borderRadius: '6px',
        },
      
        '& .MuiSwitch-track': {
          backgroundColor: theme.palette.grey[200],
          opacity: 1,
          borderRadius: '5px',
        },
        '& .MuiSwitch-switchBase': {
          '&.Mui-checked': {
            '& + .MuiSwitch-track': {
              backgroundColor: 'primary',
              opacity: 0.18,
            },
          },
        },
      }));
  return (
    <>
            <Grid item xs={7}>
            <Box sx={{padding:"30px",boxShadow: '0px 2px 6px rgba(37,83,185,0.1)',borderRadius:"10px"}}>
            <Typography component="h5" sx={{fontSize:"18px" , fontWeight:"600", color:"#2A3547"}}>Customized Features</Typography>
            <Typography component="p" sx={{fontSize:"14px" , fontWeight:"400", color:"#7C8FAC" , marginTop:"12px",marginBottom:"24px"}}>Toggle the boxes for demonstration of customization options.</Typography>
            <Grid container>
              <Grid item xs={6}>
              <Box sx={{display:"flex"}}>
              <CustomSwitch />
              <Typography component="span" sx={{fontSize:"15px" , fontWeight:"500", color:"#2A3547" , alignSelf:"center"}}>Collapse</Typography>
              </Box>
              </Grid>
              <Grid item xs={6}>
              <Box sx={{display:"flex"}}>
              <CustomSwitch />
              <Typography component="span" sx={{fontSize:"15px" , fontWeight:"500", color:"#2A3547" , alignSelf:"center"}}>RTL</Typography>
              </Box>
              </Grid>
              <Grid item xs={6}>
              <Box sx={{display:"flex"}}>
              <CustomSwitch />
              <Typography component="span" sx={{fontSize:"15px" , fontWeight:"500", color:"#2A3547" , alignSelf:"center"}}>User Profile</Typography>
              </Box>
              </Grid>
              <Grid item xs={6}>
              <Box sx={{display:"flex"}}>
              <CustomSwitch />
              <Typography component="span" sx={{fontSize:"15px" , fontWeight:"500", color:"#2A3547" , alignSelf:"center"}}>Dark Mode</Typography>
              </Box>
              </Grid>
            </Grid>
            </Box>
        </Grid>
    </>
  )
}

export default Features