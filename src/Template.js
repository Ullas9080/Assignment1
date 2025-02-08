import React from "react";
import Box from "@mui/material/Box";
import RoofingIcon from "@mui/icons-material/Roofing";
import { Grid2, Grid, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Slide1 from "./Components/Slide1/Slide1";
import Slide2 from "./Components/Slide2/Slide2";
const Template = () => {

  return (
    <>
      <Grid container spacing={{ md: 30, xl: 50 }}>
     <Slide1/>

    
<Slide2/>
      </Grid>
    </>
  );
};

export default Template;
