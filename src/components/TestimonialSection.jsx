import React from "react";
import testimonial_chall from "../images/testimonial_chall.png";
import {
  Stack,
  Box,
  Typography,
  Paper,
  useTheme,
  Grid,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        width: { xs: "calc(100% - 58px)", md: "calc(100% - 88px)" },
      }}
    >
      <Carousel interval={4000} showArrows={false} showStatus={false}>
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            overflow: "hidden",
            maxWidth: { xs: "400px", md: "800px" },
            width: "100%",
            margin: "auto",
            marginBottom: 7,
            backgroundColor: "primary.main",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  flex: 1,
                  p: 5,
                  pt: { xs: 4, md: 10 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "common.white",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  “I had the chance to work with Aledos during my time in the
                  MLA. He was a great help reviewing games and talking about
                  builds, mindset, and concepts. He was a great help during my
                  challenger climb and is a great coach.”
                </Typography>
                <Divider color="white"></Divider>
                <Typography variant="h5" sx={{ paddingY: 3 }}>
                  Janosch (Cloud)
                </Typography>
                <Typography
                  variant="body2"
                  color={"white"}
                  component={MuiLink}
                  href="https://www.twitch.tv/cloud_v2_"
                  target="_blank"
                >
                  https://www.twitch.tv/cloud_v2_
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display={{ xs: "none", sm: "none", md: "block" }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  backgroundColor: "transparent",
                }}
              >
                <Box
                  component="img"
                  src={testimonial_chall}
                  alt="Ninja"
                  sx={{
                    width: "80%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            overflow: "hidden",
            maxWidth: { xs: "400px", md: "800px" },
            width: "100%",
            margin: "auto",
            marginBottom: 7,
            backgroundColor: "primary.main",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  flex: 1,
                  p: 5,
                  pt: { xs: 4, md: 10 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "common.white",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  “I had the chance to work with Aledos during my time in the
                  MLA. He was a great help reviewing games and talking about
                  builds, mindset, and concepts. He was a great help during my
                  challenger climb and is a great coach.”
                </Typography>
                <Divider color="white"></Divider>
                <Typography variant="h5" sx={{ paddingY: 3 }}>
                  Janosch (Cloud)
                </Typography>
                <Typography
                  variant="body2"
                  color={"white"}
                  component={MuiLink}
                  href="https://www.twitch.tv/cloud_v2_"
                  target="_blank"
                >
                  https://www.twitch.tv/cloud_v2_
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display={{ xs: "none", sm: "none", md: "block" }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  backgroundColor: "transparent",
                }}
              >
                <Box
                  component="img"
                  src={testimonial_chall}
                  alt="Ninja"
                  sx={{
                    width: { xs: "0%", md: "80%" },
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Carousel>
    </Box>
  );
};

export default TestimonialSection;
