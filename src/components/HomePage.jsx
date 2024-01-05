import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
  Fade,
} from "@mui/material";
import HeaderHome from "../components/HeaderHome";
import { useScroll } from "./ScrollContext";
import aledosHero from "../images/gen_2_hero_o.png";
import IntroductionSection from "./IntroductionSection";
import HowItWorksSection from "./HowItWorksSection";
import theme from "../theme";

import skyImage from "../images/stars.png";
import TestimonialSection from "./TestimonialSection";

export default function HomePage() {
  const [typographyVariant, setTypographyVariant] = useState("h3");
  const { scrollToAbout, setScrollToAbout } = useScroll();
  const aboutRef = useRef(null);

  useEffect(() => {
    const updateVariant = () => {
      if (window.innerWidth < theme.breakpoints.values.md) {
        setTypographyVariant("h3");
      } else {
        setTypographyVariant("h2");
      }
    };

    updateVariant();
    window.addEventListener("resize", updateVariant);

    return () => {
      window.removeEventListener("resize", updateVariant);
    };
  }, []);

  useEffect(() => {
    if (scrollToAbout && aboutRef.current) {
      const yOffset = -150; // Number of pixels you want to scroll above the element
      const elementPosition = aboutRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + yOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

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
          width={"100%"}
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
                  xs: "22.5rem",
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
                  backgroundSize: { xs: "140% auto", sm: "100% auto" },
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
                <Fade in={true} timeout={700}>
                  <Typography
                    component="div"
                    variant={typographyVariant}
                    sx={{
                      color: "white",
                      position: "relative",
                      zIndex: 2,
                      maxWidth: { xs: "85%", sm: "65%", md: "60%", lg: "60%" },
                      marginTop: { xs: "0%", sm: "5%", md: "5%", lg: "15%" },
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
                </Fade>
                <Fade in={true} timeout={1000}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      color: "primary.secondary",
                      zIndex: 2,
                      maxWidth: { xs: "85%", sm: "60%", md: "50%" },
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
                </Fade>
              </Stack>
            </Box>
          </Fade>
          <Stack
            sx={{
              // #382145
              background: "linear-gradient(to bottom, #09000F, #2C1A4C)",
              justifyContent: "center",
              alignItems: "center",
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
                opacity: 0.055, // Set the desired opacity
                zIndex: 1, // Ensure it's above the background but below the content
              },
              "& > *": {
                // Ensures that children of Stack are above the overlay
                position: "relative",
                zIndex: 2,
              },
            }}
          >
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
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
                  paddingX: 1,
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
                  opacity: 0.8,
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
                  paddingTop: { xs: 4, sm: 6, md: 8 },
                  paddingBottom: { xs: 6, sm: 8, md: 10, xl: 12 },
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
            <IntroductionSection />
          </Stack>
          <Stack
            minHeight={600}
            sx={{
              width: "100%",
              background: "linear-gradient(to bottom, #2C1A4C, #100F1A)",
              alignItems: "center",
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
                opacity: 0.055, // Set the desired opacity
                zIndex: 2, // Ensure it's above the background but below the content
              },
              "& > *": {
                // Ensures that children of Stack are above the overlay
                position: "relative",
                zIndex: 2,
              },
            }}
          >
            <Stack
              maxWidth={1500}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              sx={{ paddingTop: { xs: 0, sm: 4, md: 6 } }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "750",
                  paddingTop: { xs: 2, sm: 3, md: 4 },
                  paddingBottom: { xs: 6, sm: 8, md: 10, xl: 12 },
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
                How it works?
              </Typography>
              <HowItWorksSection />
            </Stack>
          </Stack>
          <Stack
            minHeight={800}
            sx={{
              width: "100%",
              background: "linear-gradient(to bottom, #100F1A, #4C2CBF)",
              alignItems: "center",
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
                opacity: 0.055, // Set the desired opacity
                zIndex: 2, // Ensure it's above the background but below the content
              },
              "& > *": {
                // Ensures that children of Stack are above the overlay
                position: "relative",
                zIndex: 2,
              },
            }}
          >
            <Stack
              maxWidth={1500}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              sx={{ paddingTop: { xs: 0, sm: 4, md: 6 } }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  fontWeight: "750",
                  paddingTop: { xs: 2, sm: 3, md: 4 },
                  paddingX: 3,
                  paddingBottom: { xs: 6, sm: 8, md: 10, xl: 12 },
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
                Hear from the Summoners
              </Typography>
              <TestimonialSection />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
