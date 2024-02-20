import  Box from '@mui/material/Box'
import React from 'react'
import Grid from '@mui/material/Grid';
import WelcomeMsg from '../components/WelcomeMsg'
 import Features from '../components/Features';
 import Template from '../components/Template';
const SidebarInfo = () => {

  return (
    <>
      <Box sx={{marginLeft:"314px",py:'20px'}}>
      <Grid container spacing={3.75}>
          <WelcomeMsg/>
        <Grid item xs={5}></Grid>
         <Features/>
        <Grid item xs={5}></Grid>
         <Template/>
      </Grid>
      </Box>
    </>
  )
}

export default SidebarInfo