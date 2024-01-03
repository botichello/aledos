import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Link,
} from "@mui/material";
import { useScroll } from "./ScrollContext";

import logo from "../images/logo_2_no_bg_no_hand_2.png";

export default function HeaderCoaching({ scrollRef }) {
  const { setScrollToAbout } = useScroll();

  const handleAboutClick = () => {
    setTimeout(() => {
      setScrollToAbout(true);
    }, 600);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none",
        height: { xs: "90px", sm: "160px" },
        minHeight: { xs: "80px", sm: "160px" },
        backgroundColor: "transparent",
        color: "white",
        justifyContent: "center",
      }}
    >
      {/* Flex container to center the Toolbar content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "2100px",
            width: "100%",
            justifyContent: "center",
            display: "flex",
            px: { xs: 1, sm: 3, md: 3 },
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: "40px", sm: "70px" },
              height: "100%",
              width: "100%", // Ensure Toolbar takes the full width of the inner Box
            }}
          >
            <LinkRouter to="/">
              <Box
                component={"img"}
                src={logo}
                maxHeight={{ xs: 80, sm: 130, md: 170, lg: 180 }}
                height={{ xs: 80, sm: 130, md: 140, lg: 180 }}
                sx={{ flexGrow: 0 }}
              />
            </LinkRouter>
            <Box sx={{ flexGrow: 1 }} /> {/* Invisible spacer */}
            <LinkRouter
              to="/"
              onClick={handleAboutClick}
              style={{ textDecoration: "none", marginRight: "1.72%" }}
            >
              <Button
                sx={{
                  color: "white",
                  minWidth: "100px",
                  textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3),
      4px 4px 12px rgba(0, 0, 0, 0.4),
      5px 5px 15px rgba(0, 0, 0, 0.5),
      6px 6px 18px rgba(0, 0, 0, 0.6),
      7px 7px 21px rgba(0, 0, 0, 0.7)
    `,
                  display: { xs: "none", md: "block" },
                  fontWeight: 650,
                  letterSpacing: 0.3,
                }}
              >
                About me
              </Button>
            </LinkRouter>
            <Button
              sx={{
                marginRight: "3.82%",
                color: "white",
                textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3),
      4px 4px 12px rgba(0, 0, 0, 0.4),
      5px 5px 15px rgba(0, 0, 0, 0.5),
      6px 6px 18px rgba(0, 0, 0, 0.6),
      7px 7px 21px rgba(0, 0, 0, 0.7)
    `,
                fontWeight: 650,
                letterSpacing: 0.3,
                display: { xs: "none", md: "block" },
              }}
            >
              Testimonials
            </Button>
            <Link href="/" sx={{}}>
              <Button
                variant={"contained"}
                sx={{
                  flexGrow: 0,
                  paddingY: { xs: 1, sm: 1.75 },
                  size: { xs: "medium", sm: "large", md: "large" },
                  textShadow: `
      1px 1px 3px rgba(0, 0, 0, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.2),
      3px 3px 9px rgba(0, 0, 0, 0.3)
      `,
                  fontWeight: 650,
                  letterSpacing: 0.3,
                }}
              >
                Home Page
              </Button>
            </Link>
          </Toolbar>
        </Box>
      </Box>
    </AppBar>
  );
}
