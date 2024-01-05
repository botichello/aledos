import React from "react";
import testimonial_chall from "../images/testimonial_chall.png";
import testimonial_gm from "../images/testimonial_gm.png";
import kende from "../images/kende.png";
import nyle from "../images/nyle.png";
import janosch from "../images/janosch.png";
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
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        width: { xs: "calc(100% - 58px)", md: "calc(100% - 88px)" },
      }}
    >
      <Carousel
        infiniteLoop
        interval={7000}
        showStatus={false}
        swipeable={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return hasPrev ? (
            <div
              style={{
                position: "absolute", // for top-0, bottom-0, left-0
                top: 0,
                bottom: 0,
                left: 0,
                display: "flex", // for flex
                justifyContent: "center", // for justify-center
                alignItems: "center", // for items-center
                p: 3, // for p-3 (padding)
                opacity: 0.3, // for opacity-30
                cursor: "pointer", // for cursor-pointer
                zIndex: 20, // for z-20
                "&:hover": {
                  opacity: 1.0, // for hover:opacity-100
                },
              }}
              onClick={clickHandler}
            >
              <NavigateBeforeIcon fontSize="large" style={{ color: "white" }} />
            </div>
          ) : (
            <></>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return hasNext ? (
            <div
              style={{
                position: "absolute", // for top-0, bottom-0, left-0
                top: 0,
                bottom: 0,
                right: 0,
                display: "flex", // for flex
                justifyContent: "center", // for justify-center
                alignItems: "center", // for items-center
                p: 3, // for p-3 (padding)
                opacity: 0.3, // for opacity-30
                cursor: "pointer", // for cursor-pointer
                zIndex: 20, // for z-20
                "&:hover": {
                  opacity: 1.0, // for hover:opacity-100
                },
              }}
              onClick={clickHandler}
            >
              <NavigateNextIcon fontSize="large" style={{ color: "white" }} />
            </div>
          ) : (
            <></>
          );
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: { xs: "600px", md: "800px" },
              width: "calc(100%-10px)",
              marginX: "5px",
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 2,
                    }}
                  >
                    <Box
                      component={"img"}
                      src={janosch}
                      sx={{
                        display: "flex",
                        height: 43,
                        maxWidth: 43,
                        marginRight: 2,
                      }}
                    ></Box>
                    <Typography variant="h5" sx={{ paddingY: 2 }}>
                      Janosch (Cloud)
                    </Typography>
                  </Box>
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
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: { xs: "600px", md: "800px" },
              width: "calc(100%-10px)",
              marginX: "5px",
              marginBottom: 7,
              pr: 0,
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
                    league journey. He has unique ways of looking at the game
                    and isn't afraid to defy the popular opinion if he thinks it
                    isn't right. ... Not to mention how light-hearted he always
                    is. It's always just a great experience overall.”
                  </Typography>
                  <Divider color="white"></Divider>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 2,
                    }}
                  >
                    <Box
                      component={"img"}
                      src={nyle}
                      sx={{
                        display: "flex",
                        height: 43,
                        maxWidth: 43,
                        marginRight: 2,
                      }}
                    ></Box>
                    <Typography variant="h5" sx={{ paddingY: 2 }}>
                      Nyle
                    </Typography>
                  </Box>
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
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              overflow: "hidden",
              maxWidth: { xs: "600px", md: "800px" },
              width: "calc(100%-10px)",
              marginX: "5px",
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
                wanted to learn the game a bit more to achieve higher ranks, so
                i went to Afterglow Esports to learn. There i joined for the mid
                lane coaching sessions which was run down by a mid lane coach
                Aledos, who helped me to get there where i am now, he taught me
                the way to achieve my goal effectively on my own, and give me
                the push to do it.
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
                “I have been playing league for 8-9 years. .. He taught me the
                way to achieve my goal effectively on my own, and give me the
                push to do it. <br />
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
                    height: 43,
                    maxWidth: 43,
                    marginRight: 2,
                  }}
                ></Box>
                <Typography variant="h5" sx={{ paddingY: 2 }}>
                  Kevendeve
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Carousel>
    </Box>
  );
};

export default TestimonialSection;
