import React from "react";
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
import proPlanImage from "../images/kassa.jpg";

export default function CoachingPage() {
  return (
    <>
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
                  xl: "55rem",
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
              minHeight: 1000,
              // #382145
              background: "linear-gradient(to bottom, #09000F, #0D1695)",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Grid
              container
              spacing={4}
              justifyContent={"center"}
              display={"flex"}
              height={"100%"}
              sx={{
                maxWidth: { xs: 2042, md: 1972 },
                width: { xs: "calc(100% - 58px)", md: "calc(100% - 128px)" },
                margin: "auto",
                position: "absolute",
                top: {
                  xs: "16rem",
                  sm: "18.5rem",
                  md: "20.5rem",
                  lg: "25.5rem",
                  xl: "26.5rem",
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
                sx={{ pr: 4 }}
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
                      maxWidth: 345,
                      width: "100%",
                      maxHeight: 400,
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
                      height="190"
                      image={freePlanImage}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography gutterBottom variant="h5" component="div">
                        First Free Session
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - Climbing plan
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                      <Button size="normal" variant="contained">
                        Learn More
                      </Button>
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
                  pr: 4, // Negative vertical margin
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
                      maxWidth: 345,
                      width: "100%",
                      maxHeight: 400,
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
                      height="190"
                      image={normalPlanImage}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography gutterBottom variant="h5" component="div">
                        1 Coaching Session
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - Climbing plan
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                      <Button size="normal" variant="contained">
                        Learn More
                      </Button>
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
                  pr: 4, // Negative vertical margin
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
                      maxWidth: 345,
                      width: "100%",
                      maxHeight: 400,
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
                      height="190"
                      image={proPlanImage}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {" "}
                      {/* flexGrow to make it expand */}
                      <Typography gutterBottom variant="h5" component="div">
                        1 Month Private Coaching
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        - Climbing plan
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                      <Button size="normal" variant="contained">
                        Learn More
                      </Button>
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
