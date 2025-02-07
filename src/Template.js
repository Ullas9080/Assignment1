import React from "react";
import Box from "@mui/material/Box";
import RoofingIcon from "@mui/icons-material/Roofing";
import { Grid2, Grid, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const Template = () => {
  const Details = [
    "3 Bedrooms",
    "2 Bathrooms",
    "Living room",
    "Modern Kitchen",
    "Swimming Pool",
  ];
  return (
    <>
      <Grid container spacing={{ md: 30, xl: 50 }}>
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

        {/* Right slide*/}

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
      </Grid>
    </>
  );
};

export default Template;
