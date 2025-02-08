import React from 'react'
import Box from "@mui/material/Box";
import RoofingIcon from "@mui/icons-material/Roofing";
import { Grid2, Grid, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const Slide1 = () => {
  return (
       <Grid item sm={6}>
          <Box
            component="div"
            className="bg"
            sx={{
              border: "2px solid white",
              width: { xs: "100%", md: "600px", xl: "700px" },
              marginTop: "50px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginLeft: { xs: "0", md: "30px" },
              height: { xs: "400px", md: "400px", xl: "550px" },
            }}
          >
            {/* Tag */}
            <Box
              sx={{
                position: "absolute",
                color: "#041939",
                marginTop: "-100px",
                marginLeft: { sm: "10px", md: "20px" },
              }}
            >
              {/* Tag 1 */}
              <Box
                sx={{
                  backgroundColor: "#FFB673",
                  height: "100px",
                  width: "80px",
                  textAlign: "center",
                  paddingTop: "50px",
                }}
              >
                <RoofingIcon />
                <Typography
                  component="div"
                  sx={{
                    fontSize: "small",
                    fontFamily: "roboto",
                    color: "#041939",
                  }}
                >
                  Salford & Co.
                </Typography>
                <Typography component="p" sx={{ fontSize: "x-small" }}>
                  Real Estate
                </Typography>
              </Box>
              {/* Tag 2 */}
              <Box
                component="div"
                sx={{
                  backgroundColor: "#FFB673",
                  height: "60px",
                  width: "60px",
                  transform: "rotate(45deg)",
                  marginLeft: "9px",
                  borderRadius: "6px",
                  marginTop: "-30px",
                }}
              ></Box>
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                top: { md: "420px", xl: "550px" },
                left: { md: "150px", xl: "250px" },
              }}
            >
              <Grid2 container spacing={2}>
                <Box
                  className="img1"
                  component="img"
                  sx={{
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "2px solid white",
                    height: { sm: "40px", md: "80px", xl: "150px" },
                    width: { sm: "40px", md: "100px", xl: "150px" },
                    objectFit: "cover",
                  }}
                />
                <Box
                  className="img2"
                  component="img"
                  sx={{
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "2px solid white",
                    height: { sm: "40px", md: "80px", xl: "150px" },
                    width: { sm: "40px", md: "100px", xl: "150px" },
                    objectFit: "cover",
                  }}
                />
                <Box
                  className="img3"
                  component="img"
                  sx={{
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "2px solid white",
                    height: { sm: "40px", md: "80px", xl: "150px" },
                    width: { sm: "40px", md: "100px", xl: "150px" },
                    objectFit: "cover",
                  }}
                />
              </Grid2>
            </Box>
          </Box>

          <Box
            component="div"
            sx={{
              position: "absolute",
              backgroundColor: "#FFB673",
              height: "50px",
              width: "300px",
              bottom: "0",
              left: "0",
              transform: "skewX(50deg)",
              marginBottom: "0px",
              marginLeft: "-100px",
            }}
          ></Box>
        </Grid>
  )
}

export default Slide1;