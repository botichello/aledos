import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
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
import blueFlames from "../images/nice_blue_flames_clean_c.png";
import IntroductionSection from "./IntroductionSection";
import theme from "../theme";

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
              <Fade in={true} timeout={600}>
                <Typography
                  component="div"
                  variant={typographyVariant}
                  sx={{
                    color: "white",
                    position: "relative",
                    zIndex: 2,
                    maxWidth: { xs: "70%", sm: "65%", md: "60%", lg: "60%" },
                    marginTop: { xs: "5%", sm: "7%", md: "5%", lg: "15%" },
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
              <Fade in={true} timeout={900}>
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
              </Fade>
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
            <IntroductionSection />
          </Stack>
          <Stack
            minHeight={800}
            sx={{
              width: "100%",
              background: "linear-gradient(to bottom, #382145, #141D29)",
              alignItems: "center",
            }}
          >
            <Stack
              maxWidth={1500}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              paddingTop={10}
            >
              <Box
                sx={{
                  width: "calc(100% - 88px)",
                  height: 500,
                  borderRadius: "10px",
                  display: "flex",
                  position: "relative",
                  "&::before": {
                    // Create the overlay
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${blueFlames})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    borderRadius: "10px",
                    border: 3,
                    borderColor: "#E7D7FF",
                    opacity: 0.475, // Set the desired opacity
                    zIndex: 0, // Ensure it's above the background but below the content
                  },
                }}
              ></Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
