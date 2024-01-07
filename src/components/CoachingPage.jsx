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
          League of Legends Midlane Coaching | LOL Coaching - Aledos Coaching
        </title>
        <meta
          name="description"
          content="League of Legends Midlane Coaching by LoL coach Aledos. Unlock your potential."
        />
        <meta
          property="og:title"
          content="League of Legends Midlane Coaching | LOL Coaching - Aledos Coaching"
        />
        <meta
          property="og:description"
          content="League of Legends Midlane Coaching by LoL coach Aledos. Unlock your potential."
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
              minHeight: { xs: 1500, sm: 1500, md: 700, lg: 500 },
              height: "100%",
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
                  xs: "-114rem",
                  sm: "-117rem",
                  md: "-87rem",
                  lg: "-94rem",
                  xl: "-122rem",
                },
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 30,
                textShadow: `
                1px 1px 3px rgba(0, 0, 0, 0.1),
                2px 2px 6px rgba(0, 0, 0, 0.2),
                3px 3px 9px rgba(0, 0, 0, 0.3),
                4px 4px 12px rgba(0, 0, 0, 0.4),
                5px 5px 15px rgba(0, 0, 0, 0.5),
                6px 6px 18px rgba(0, 0, 0, 0.6),
                7px 7px 21px rgba(0, 0, 0, 0.7)
                `,
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
                width: { xs: "calc(100% - 45px)", md: "calc(100% - 128px)" },
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
                      image={freePlanImage}
                      sx={{
                        height: { xs: 190, sm: 210, md: 220 },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontWeight={600}
                        component="div"
                        paddingBottom={1}
                      >
                        Free Climbing Plan
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Goal setting
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Champion pool
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Mindset
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Step by step plan to climb
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
                          styles={{
                            fontWeight: 550,
                            boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.3)",
                            color: "#fff",
                            backgroundColor: "#58336D",
                            border: 0,
                            outline: 0,
                            padding: "0.8rem 1.2rem",
                            fontSize: "0.9rem",
                            borderRadius: "0.25rem",
                            cursor: "pointer",
                          }}
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
                      alt="1on1"
                      image={normalPlanImage}
                      sx={{
                        height: { xs: 190, sm: 210, md: 220 },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontWeight={600}
                        component="div"
                        paddingBottom={1}
                      >
                        1 on 1 Coaching Session
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - 2 hour coaching
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Climbing plan
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Full VOD session
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Personalized learning objectives
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
                          styles={{
                            fontWeight: 550,
                            boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.3)",
                            color: "#fff",
                            backgroundColor: "#58336D",
                            border: 0,
                            outline: 0,
                            padding: "0.8rem 1.2rem",
                            fontSize: "0.9rem",
                            borderRadius: "0.25rem",
                            cursor: "pointer",
                          }}
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
                      alt="mentorship"
                      image={proPlanImage}
                      sx={{
                        height: { xs: 190, sm: 210, md: 220 },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontWeight={600}
                        component="div"
                        paddingBottom={1}
                      >
                        Monthly Mentorship
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - 5 Coaching Sessions
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Climbing plan
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        - Daily Accountability
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
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
                          styles={{
                            fontWeight: 550,
                            boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.3)",
                            color: "#fff",
                            backgroundColor: "#58336D",
                            border: 0,
                            outline: 0,
                            padding: "0.8rem 1.2rem",
                            fontSize: "0.9rem",
                            borderRadius: "0.25rem",
                            cursor: "pointer",
                          }}
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
