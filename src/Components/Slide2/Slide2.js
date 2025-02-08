import React from 'react'
import Box from "@mui/material/Box";
import RoofingIcon from "@mui/icons-material/Roofing";
import { Grid2, Grid, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Slide2 = () => {
    const Details = [
      "3 Bedrooms",
      "2 Bathrooms",
      "Living room",
      "Modern Kitchen",
      "Swimming Pool",
    ];
  return (
 
    <Grid item xs={6} sx={{ marginTop: "40px", fontWeight: "bold" }}>
    <Typography
      variant="h1"
      sx={{ color: "#FFB673", letterSpacing: "5px", fontWeight: "bold" }}
    >
      HOUSE
    </Typography>
    <Typography
      variant="h2"
      sx={{ color: "white", letterSpacing: "5px", fontWeight: "bold" }}
    >
      FOR SALE
    </Typography>
    <Typography
      variant="p"
      sx={{
        color: "silver",
        marginTop: "15px",
        textAlign: "center",
        text: "bold",
        marginLeft: "0px",
      }}
    >
      Explore the modern lifestyle. Spacios open area, high-quailty
      finished and carefully selected details come together to create a
      sophisticated ambiance
    </Typography>
    <Typography
      component="h4"
      variant="h5"
      sx={{ color: "white", marginTop: "20px", fontWeight: "bold" }}
    >
      PROPERTY FEATURES
    </Typography>
    <Divider
      sx={{
        backgroundColor: "orange",
        height: "2px",
        marginTop: "15px",
        marginBottom: "15px",
      }}
    />
    <Grid container md="4">
      {Details.map((i, index) => (
        <Grid item key={index} display="flex" sx={{ marginTop: "10px" }}>
          <CheckIcon sx={{ color: "orange", font: "bold" }} />
          <Typography variant="body" sx={{ color: "white" }}>
            {i}
          </Typography>
        </Grid>
      ))}

      <Grid
        sx={{
          position: "absolute",
          right: "0",
          color: "orange",
          fontWeight: "bold",
          fontfamily: "robo",
        }}
      >
        <Box component={"div"} sx={{ marginRight: "80px" }}>
          <Typography variant="h4">PRICE AT</Typography>
          <Typography variant="h4">$10.000</Typography>
        </Box>
      </Grid>

      <Box component={"div"}>
        <Box
          sx={{
            height: "50px",
            position: "absolute",
            backgroundColor: "#FFB673",
            bottom: "0",
            width: "300px",
            right: "0px",
          }}
        >
          <Box
            sx={{
              height: "50px",
              position: "absolute",
              backgroundColor: "#FFB673",
              bottom: "0",
              width: "50px",
              right: "270px",
              transform: "skewX(-40deg)",
            }}
          >
            {" "}
          </Box>
          <Box
            position={"absolute"}
            color={"#041939"}
            fontSize={"smaller"}
            paddingTop={"5px"}
          >
            <Typography variant="p" sx={{ paddingLeft: "20px" }}>
              @reallygreatsite
            </Typography>
            <Typography variant="p" sx={{ paddingLeft: "20px" }}>
              +123 456-78290
            </Typography>
            <br />
            <Typography variant="p" sx={{ paddingLeft: "20px" }}>
              123 Anywhere St,Any City,St 12345
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  </Grid>
  )
}

export default Slide2;