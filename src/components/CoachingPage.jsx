import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  AppBar,
  Box,
  Stack,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Fade,
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";
import HeaderCoaching from "./HeaderCoaching";
import coachingHeroFlames from "../images/coaching_flames_crop_clean_upscaled.png";
import freePlanImage from "../images/Kassadin_new.jpg";
import normalPlanImage from "../images/cosmic-kassadin-wallpapers.jpg";
import skyImage from "../images/night_bg_small.jpg";
import proPlanImage from "../images/kassa.jpg";
import { PopupButton } from "react-calendly";

export default function CoachingPage() {
  return (
    <>
      <Helmet>
        <title>
          League of Legends Private Coaching | LOL Coaching - Aledos Coaching
        </title>
        <meta
          name="description"
          content="League of Legends Private Coaching by LoL coach Aledos. Unlock your potential."
        />
        <meta
          property="og:title"
          content="League of Legends Private Coaching | LOL Coaching - Aledos Coaching"
        />
        <meta
          property="og:description"
          content="League of Legends Private Coaching by LoL coach Aledos. Unlock your potential."
        />
      </Helmet>
      <HeaderCoaching></HeaderCoaching>
      <Stack
        sx={{
          backgroundColor: "black",
          marginTop: { xs: "-90px", sm: "-160px" },
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: -1,
        }}
      >
        <Stack
          maxWidth={2000}
          display={"flex"}
          minWidth={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Fade in={true} timeout={300}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#09000F",
                width: "100%",
                maxWidth: 2100,
                height: "100%",
                minHeight: {
                  xs: "20.5rem",
                  sm: "25rem",
                  md: "35rem",
                  lg: "45rem",
                  xl: "59rem",
                },
                display: "flex",
                alignItems: "center", // Vertical alignment
                justifyContent: "center", // Horizontal alignment
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(9, 0, 15, 1) 100%), url(${coachingHeroFlames})`,
                  backgroundSize: "100% auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top",
                  opacity: 0.7,
                },
              }}
            ></Box>
          </Fade>
          <Stack
            sx={{
              minWidth: "100%",
              minHeight: { xs: 1300, sm: 1000, md: 700, lg: 500 },
              background: "linear-gradient(to bottom, #09000F, #0D1695)",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              position: "relative", // Needed for the absolute positioning of the pseudo-element
              "&::before": {
                // Pseudo-element for the overlay image
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${skyImage})`, // Replace with your image path
                backgroundSize: "cover",
                backgroundRepeat: "repeat-y",
                backgroundPosition: "center",
                opacity: 0.3, // Set the desired opacity
                zIndex: 1, // Ensure it's above the background but below the content
              },
              "& > *": {
                // Ensures that children of Stack are above the overlay
                position: "relative",
                zIndex: 2,
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                margin: "auto",
                position: "absolute",
                height: 100,
                textAlign: "center",
                color: "white",
                fontWeight: 600,
                paddingX: { xs: 3, sm: 4, md: 5 },
                top: {
                  xs: "-102rem",
                  sm: "-85.5rem",
                  md: "-87rem",
                  lg: "-94rem",
                  xl: "-122rem",
                },
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 30,
              }}
            >
              Choose your path
            </Typography>
            <Grid
              container
              spacing={3}
              justifyContent={"center"}
              display={"flex"}
              height={"100%"}
              sx={{
                maxWidth: { xs: 2042, md: 1972 },
                width: { xs: "calc(100% - 58px)", md: "calc(100% - 128px)" },
                margin: "auto",
                position: "absolute",
                top: {
                  xs: "-18rem",
                  sm: "-18.5rem",
                  md: "-37rem",
                  lg: "calc(-60.5rem + 100px)",
                  xl: "-78.5rem",
                },
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                display={"flex"}
                justifyContent="center"
                sx={{ pr: 3 }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 350,
                      width: "100%",
                      maxHeight: 500,
                      height: "100%",
                      borderRadius: "10px",
                      border: 1,
                      borderColor: "#E7D7FF",
                      backgroundColor: "#E7D7FF",
                      display: "flex", // Make sure the card uses flex layout
                      flexDirection: "column", // Stack children vertically
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="free"
                      height="220"
                      image={freePlanImage}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontWeight={600}
                        component="div"
                      >
                        Free Climbing Plan
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        - Climbing plan
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        - 30 min
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 650, color: "text.main", pl: 2 }}
                        >
                          Free
                        </Typography>
                      </Box>
                      <Box>
                        <PopupButton
                          url={"https://calendly.com/aledos/climbingplan"}
                          text="BOOK NOW"
                          rootElement={document.getElementById("root")}
                          styles={{ fontWeight: 550 }}
                        ></PopupButton>
                      </Box>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                display={"flex"}
                justifyContent="center"
                sx={{
                  pr: 3, // Negative vertical margin
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 350,
                      width: "100%",
                      maxHeight: 500,
                      height: "100%",
                      borderRadius: "10px",
                      border: 1,
                      borderColor: "#E7D7FF",
                      backgroundColor: "#E7D7FF",
                      display: "flex", // Make sure the card uses flex layout
                      flexDirection: "column", // Stack children vertically
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="free"
                      height="220"
                      image={normalPlanImage}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontWeight={600}
                        component="div"
                      >
                        1 on 1 Coaching Session (Midlane)
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        - Climbing plan
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        - Complete VOD review
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        - 1:30 hour
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 650, color: "text.main", pl: 2 }}
                        >
                          50 €
                        </Typography>
                      </Box>
                      <Box>
                        <PopupButton
                          url={"https://calendly.com/aledos/coaching-session"}
                          text="BOOK NOW"
                          rootElement={document.getElementById("root")}
                          styles={{ fontWeight: 550 }}
                        ></PopupButton>
                      </Box>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                display={"flex"}
                justifyContent="center"
                sx={{
                  pr: 3, // Negative vertical margin
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 350,
                      width: "100%",
                      maxHeight: 500,
                      height: "100%",
                      borderRadius: "10px",
                      border: 1,
                      borderColor: "#E7D7FF",
                      backgroundColor: "#E7D7FF",
                      display: "flex", // Make sure the card uses flex layout
                      flexDirection: "column", // Stack children vertically
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="free"
                      height="220"
                      image={proPlanImage}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontWeight={600}
                        component="div"
                      >
                        Monthly Mentorship (Midlane)
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        - Climbing plan
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        - 5 Coaching Sessions
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        - Daily Accountability
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        ...
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 650, color: "text.main", pl: 2 }}
                        >
                          200 €
                        </Typography>
                      </Box>
                      <Box>
                        <PopupButton
                          url={"https://calendly.com/aledos/mentorship"}
                          text="BOOK NOW"
                          rootElement={document.getElementById("root")}
                          styles={{ fontWeight: 550 }}
                        ></PopupButton>
                      </Box>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
