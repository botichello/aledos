import React, { useRef, useLayoutEffect, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Stack,
  Grid,
} from "@mui/material";
import HeaderHome from "../components/HeaderHome";
import { useScroll } from "./ScrollContext";
import aledosHero from "../images/gen_2_hero_o.png";
import videoThumbnail from "../images/kassa_op.jpg";
import challEmblem from "../images/Challenger_emblem.png";

export default function HomePage() {
  const { scrollToAbout, setScrollToAbout } = useScroll();
  const aboutRef = useRef(null);

  useEffect(() => {
    if (scrollToAbout && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToAbout(false); // Reset the state
    }
  }, [scrollToAbout, setScrollToAbout]);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderHome scrollRef={aboutRef} />
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
          <Box
            sx={{
              position: "relative",
              backgroundColor: "black",
              width: "100%",
              maxWidth: 2100,
              height: "100%",
              minHeight: {
                xs: "25.5rem",
                sm: "30rem",
                md: "40rem",
                lg: "50rem",
                xl: "60rem",
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
                backgroundImage: `url(${aledosHero})`,
                backgroundSize: { xs: "135% auto", sm: "100% auto" },
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                opacity: { xs: 0.6, sm: 0.95 },
              },
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: "white",
                  position: "relative",
                  zIndex: 2,
                  maxWidth: { xs: "70%", sm: "65%", md: "60%", lg: "60%" },
                  marginTop: { xs: "5%", md: "5%", lg: "15%" },
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "750",
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
                LEAGUE OF LEGENDS PRIVATE COACHING
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  color: "primary.secondary",
                  zIndex: 2,
                  maxWidth: { xs: "70%", sm: "60%", md: "50%" },
                  marginTop: "3%",
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "750",
                  textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3),
      4px 4px 12px rgba(0, 0, 0, 0.4),
      5px 5px 15px rgba(0, 0, 0, 0.5),
      6px 6px 18px rgba(0, 0, 0, 0.6),
      7px 7px 21px rgba(0, 0, 0, 0.7),
      8px 8px 24px rgba(0, 0, 0, 0.8),
      9px 9px 27px rgba(0, 0, 0, 0.9)
    `,
                }}
              >
                UNLOCK YOUR POTENTIAL
              </Typography>
            </Stack>
          </Box>
          <Stack
            sx={{
              minWidth: "100%",
              background: "linear-gradient(to bottom, black, #382145)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                minWidth: "100%",
                width: "100%",
              }}
            >
              <Typography
                ref={aboutRef}
                variant="h5"
                sx={{
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "750",
                  textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3),
      4px 4px 12px rgba(0, 0, 0, 0.4),
      5px 5px 15px rgba(0, 0, 0, 0.5),
      6px 6px 18px rgba(0, 0, 0, 0.6),
      7px 7px 21px rgba(0, 0, 0, 0.7)
    `,
                  transform: "skew(-12deg)",
                  opacity: 0.7,
                }}
              >
                "The balance of power must be preserved."
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "750",
                  paddingTop: 8,
                  paddingBottom: 14,
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
                Who am I?
              </Typography>
            </Stack>
            <Stack maxWidth={1500} display={"flex"}>
              <Grid
                container
                paddingX={3}
                spacing={{ xs: 3, md: 10 }}
                paddingBottom={14}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      overflow: "hidden",
                      borderRadius: "10px",
                      display: "flex",
                    }}
                  >
                    <video
                      src="https://neace.gg/wp-content/uploads/2022/05/NEACE-Coaching_Video.mp4"
                      controls // Add controls for play, pause, etc.
                      poster={videoThumbnail}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "100%",
                        borderColor: "white",
                        border: 1,
                        zIndex: 2,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    position: "relative",
                    "&::before": {
                      // Create the overlay
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `url(${challEmblem})`,
                      backgroundSize: { xs: "70%", sm: "60%", md: "70%" },
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      opacity: 0.175, // Set the desired opacity
                      zIndex: 0, // Ensure it's above the background but below the content
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "center", sm: "center", md: "normal" },
                      paddingTop: { xs: 5, sm: 5, md: 0 },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        textAlign: "center",
                        display: "flex",
                        fontWeight: "750",
                        paddingTop: 3,
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
                      My name is Aledos.
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        textAlign: "center",
                        display: "flex",
                        fontWeight: "750",
                        paddingTop: 3,
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
                      Ex Challenger.
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        display: "flex",
                        fontWeight: "750",
                        paddingTop: 3,
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
                      The face of Kassadin.
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        display: "flex",
                        fontWeight: "750",
                        textAlign: {
                          xs: "center",
                          sm: "left",
                          md: "left",
                          lg: "left",
                        },
                        paddingTop: 3,
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
                      Working as a professional private coach since 2019.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
