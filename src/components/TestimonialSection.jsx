import React from "react";
import testimonial_chall from "../images/testimonial_chall.png";
import testimonial_gm from "../images/testimonial_gm.png";
import kende from "../images/kende.png";
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
            maxWidth: { xs: "600px", md: "800px" },
            width: "100%",
            margin: "auto",
            marginBottom: 7,
            backgroundColor: "primary.main",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={7}>
              <Box
                sx={{
                  flex: 1,
                  p: 5,
                  pt: { xs: 4, md: 8 },
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
              md={5}
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
                  alt="Cloud"
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
            maxWidth: { xs: "600px", md: "800px" },
            width: "100%",
            margin: "auto",
            marginBottom: 7,
            backgroundColor: "primary.main",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={7}>
              <Box
                sx={{
                  flex: 1,
                  p: 5,
                  pt: { xs: 4, md: 7 },
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
                  “Aledos was one of the best people I've worked with in my
                  league journey. He has unique ways of looking at the game and
                  isn't afraid to defy the popular opinion if he thinks it isn't
                  right. ... Not to mention how light-hearted he always is. It's
                  always just a great experience overall.”
                </Typography>
                <Divider color="white"></Divider>
                <Typography variant="h5" sx={{ paddingY: 3 }}>
                  Nyle
                </Typography>
                <Typography
                  variant="body2"
                  color={"white"}
                  component={MuiLink}
                  href="https://twitter.com/nylenasirlol"
                  target="_blank"
                >
                  https://twitter.com/nylenasirlol
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
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
                  src={testimonial_gm}
                  alt="Nyle"
                  sx={{
                    width: { xs: "0%", md: "80%" },
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
            maxWidth: { xs: "600px", md: "800px" },
            width: "100%",
            margin: "auto",
            marginBottom: 7,
            backgroundColor: "primary.main",
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: 5,
              pt: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "common.white",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontFamily: "Poppins, sans-serif",
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              “ Hi, my name is Kende, I have been playing league for 8-9 years
              or more. I was stuck in silver and then gold for so long, so i
              wanted to learn the game a bit more to achieve higher ranks, so i
              went to Afterglow Esports to learn. There i joined for the mid
              lane coaching sessions which was run down by a mid lane coach
              Aledos, who helped me to get there where i am now, he taught me
              the way to achieve my goal effectively on my own, and give me the
              push to do it.
              <br />
              <br /> As i said my actual rank was gold/gold 2, however after a
              1,5-2 month and weekly 1-2 coaching sessions with a bunch of vod
              reviews and knowledge gathering and learning sessions, i managed
              myself from gold 2 into diamond 1.
              <br />
              <br /> It was a crazy fast journey with lot of work and insane
              outcome, which gave me enough confidence and knowledge to climb
              more to Master, and now even further.”
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                fontFamily: "Poppins, sans-serif",
                display: { xs: "block", sm: "block", md: "none" },
              }}
            >
              “I have been playing league for 8-9 years. .. He taught me the way
              to achieve my goal effectively on my own, and give me the push to
              do it. <br />
              <br />
              My actual rank was gold/gold 2, however after a 1,5-2 month and
              weekly 1-2 coaching sessions with a bunch of vod reviews and
              knowledge gathering and learning sessions, i managed myself from
              gold 2 into diamond 1. <br />
              <br />
              It was a crazy fast journey with lot of work and insane outcome,
              which gave me enough confidence and knowledge to climb more to
              Master, and now even further.”
            </Typography>
            <Divider color="white"></Divider>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 3,
              }}
            >
              <Box
                component={"img"}
                src={kende}
                sx={{
                  display: "flex",
                  height: 40,
                  maxWidth: 40,
                  marginRight: 2,
                }}
              ></Box>
              <Typography variant="h5" sx={{ paddingY: 2 }}>
                Kevendeve
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Carousel>
    </Box>
  );
};

export default TestimonialSection;
