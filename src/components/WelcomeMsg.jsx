import React from 'react'
import Grid from '@mui/material/Grid';
import Customerimg from "../assets/images/customer-support1.png";
import  Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const WelcomeMsg = () => {
  return (
    <>
    <Grid item xs={7} >
               <Grid container sx={{backgroundColor:"#ECF2FF" , padding:"30px" , borderRadius:"10px"}}>
              <Grid item xs={6}>
            <Box>
            <Typography variant="h1" component="h2" sx={{fontSize:"24px" , fontWeight:"600", color:"#2A3547"}}>MUI Sidebar / React Sidebar</Typography>
            <Typography component="p" sx={{fontSize:"14px" , fontWeight:"400", color:"#7C8FAC" , marginTop:"20px" , paddingRight:"5rem"}}>Customizable sidebar nav built with react and typescript</Typography>
            <Box sx={{display:"flex" , gap:"10px"}}>
            <Box sx={{display:"flex" , marginTop:"40px"}}>
            <Typography component="span" sx={{fontSize:"11px" , fontWeight:"300", color:"#fff",paddingX:"6px" , paddingY:"2px" ,backgroundColor:"#555555"}}>license</Typography>
            <Typography component="span" sx={{fontSize:"11px" , fontWeight:"300", color:"#fff",paddingX:"6px" , paddingY:"2px", backgroundColor:"#5D87FF"}}>MIT</Typography>
            </Box>
            <Box sx={{display:"flex" , marginTop:"40px"}}>
            <Typography component="span" sx={{fontSize:"11px" , fontWeight:"300", color:"#fff",paddingX:"6px" , paddingY:"2px" ,backgroundColor:"#555555"}}>react</Typography>
            <Typography component="span" sx={{fontSize:"11px" , fontWeight:"300", color:"#fff",paddingX:"6px" , paddingY:"2px", backgroundColor:"#49BEFF"}}> &gt=16.8.0</Typography>
            </Box>
            </Box>
            </Box>
              </Grid>
              <Grid item xs={6} sx={{
                    textAlign: "right",
                    marginTop: "-4rem",
                    position: "relative",
                    top: "33px",
                    left:"13px"
              }}>
              <Box component="img" src={Customerimg}/>
              </Grid>
           </Grid>
           </Grid>
    </>
  )
}

export default WelcomeMsg