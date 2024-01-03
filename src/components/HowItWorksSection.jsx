import React from "react";
import { Typography, Box, Grid, Stack } from "@mui/material";

import blueFlames from "../images/nice_blue_flames_clean_c.png";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const HowItWorksSection = () => {
  return (
    <Box
      sx={{
        width: { xs: "calc(100% - 58px)", md: "calc(100% - 88px)" },
        borderRadius: "10px",
        paddingBottom: 6,
        backgroundColor: "#100F1A",
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
          opacity: 0.5, // Set the desired opacity
          zIndex: 3, // Ensure it's above the background but below the content
        },
      }}
    >
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        {/* Adjusted line */}
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              position: "relative",
              zIndex: 5,
              alignItems: "center",
              display: "flex",
              width: { xs: "80%", sm: "75%", md: "70" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 5,
              }}
            >
              <EditCalendarIcon
                fontSize="large"
                sx={{ color: "primary.secondary", marginRight: 1 }}
                style={{
                  fill: "currentColor",
                  stroke: "white",
                  strokeWidth: 0.4,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  display: "flex",
                  fontWeight: "750",
                  textShadow: `
1px 1px 3px rgba(0, 0, 0, 0.1),
2px 2px 6px rgba(0, 0, 0, 0.2),
3px 3px 9px rgba(0, 0, 0, 0.3),
4px 4px 12px rgba(0, 0, 0, 0.4),
5px 5px 15px rgba(0, 0, 0, 0.5)
`,
                  opacity: 1,
                  zIndex: 10,
                  textAlign: "center",
                }}
              >
                &nbsp;Book
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "650",
                paddingTop: { xs: 4, sm: 4, md: 6 },
                textShadow: `
1px 1px 3px rgba(0, 0, 0, 0.1),
2px 2px 6px rgba(0, 0, 0, 0.2),
3px 3px 9px rgba(0, 0, 0, 0.3),
4px 4px 12px rgba(0, 0, 0, 0.4),
5px 5px 15px rgba(0, 0, 0, 0.5)
`,
                opacity: 1,
                zIndex: 10,
                alignSelf: { xs: "center", md: "normal" },
                textAlign: { xs: "center", md: "left" },
                fontSize: "1.1rem",
              }}
            >
              - Scedule your private coaching now
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              position: "relative",
              zIndex: 5,
              alignItems: "center",
              display: "flex",
              width: { xs: "80%", sm: "75%", md: "70" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: { xs: 10, sm: 11, md: 5 },
              }}
            >
              <SchoolIcon
                fontSize="large"
                sx={{ color: "primary.secondary", marginRight: 1 }}
                style={{
                  fill: "currentColor",
                  stroke: "white",
                  strokeWidth: 0.4,
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "white",
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
                  opacity: 1,
                  zIndex: 10,
                  textAlign: "center",
                }}
              >
                &nbsp;Learn
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "650",
                paddingTop: { xs: 4, sm: 4, md: 6 },
                textShadow: `
1px 1px 3px rgba(0, 0, 0, 0.1),
2px 2px 6px rgba(0, 0, 0, 0.2),
3px 3px 9px rgba(0, 0, 0, 0.3),
4px 4px 12px rgba(0, 0, 0, 0.4),
5px 5px 15px rgba(0, 0, 0, 0.5),
6px 6px 18px rgba(0, 0, 0, 0.6),
7px 7px 21px rgba(0, 0, 0, 0.7)
`,
                opacity: 1,
                zIndex: 10,
                alignSelf: { xs: "center", md: "normal" },
                textAlign: { xs: "center", md: "left" },
                fontSize: "1.1rem",
              }}
            >
              - Meet me on our scheduled session.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "650",
                paddingTop: { xs: 2, sm: 3.5, md: 4 },
                textShadow: `
1px 1px 3px rgba(0, 0, 0, 0.1),
2px 2px 6px rgba(0, 0, 0, 0.2),
3px 3px 9px rgba(0, 0, 0, 0.3),
4px 4px 12px rgba(0, 0, 0, 0.4),
5px 5px 15px rgba(0, 0, 0, 0.5),
6px 6px 18px rgba(0, 0, 0, 0.6),
7px 7px 21px rgba(0, 0, 0, 0.7)
`,
                opacity: 1,
                zIndex: 10,
                alignSelf: { xs: "center", md: "normal" },
                textAlign: { xs: "center", md: "left" },
                fontSize: "1.1rem",
              }}
            >
              - Learn basic fundamentals and deeper concepts.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "650",
                paddingTop: { xs: 2, sm: 3.5, md: 4 },
                textShadow: `
1px 1px 3px rgba(0, 0, 0, 0.1),
2px 2px 6px rgba(0, 0, 0, 0.2),
3px 3px 9px rgba(0, 0, 0, 0.3),
4px 4px 12px rgba(0, 0, 0, 0.4),
5px 5px 15px rgba(0, 0, 0, 0.5),
6px 6px 18px rgba(0, 0, 0, 0.6),
7px 7px 21px rgba(0, 0, 0, 0.7)
`,
                opacity: 1,
                zIndex: 10,
                alignSelf: { xs: "center", md: "normal" },
                textAlign: { xs: "center", md: "left" },
                fontSize: "1.1rem",
              }}
            >
              - Set goals.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              position: "relative",
              zIndex: 5,
              alignItems: "center",
              display: "flex",
              width: { xs: "80%", sm: "75%", md: "70" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: { xs: 10, sm: 11, md: 5 },
              }}
            >
              <EmojiEventsIcon
                fontSize="large"
                sx={{
                  color: "primary.secondary",
                  marginRight: 1,
                }}
                style={{
                  fill: "currentColor",
                  stroke: "white",
                  strokeWidth: 0.4,
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "white",
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
                  opacity: 1,
                  zIndex: 10,
                  textAlign: "center",
                }}
              >
                &nbsp;Climb
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "650",
                paddingTop: { xs: 4, sm: 4, md: 6 },
                paddingLeft: { xs: 0, sm: 0, md: 3 },
                textShadow: `
1px 1px 3px rgba(0, 0, 0, 0.1),
2px 2px 6px rgba(0, 0, 0, 0.2),
3px 3px 9px rgba(0, 0, 0, 0.3),
4px 4px 12px rgba(0, 0, 0, 0.4),
5px 5px 15px rgba(0, 0, 0, 0.5),
6px 6px 18px rgba(0, 0, 0, 0.6),
7px 7px 21px rgba(0, 0, 0, 0.7)
`,
                opacity: 1,
                zIndex: 10,
                alignSelf: { xs: "center", md: "normal" },
                textAlign: { xs: "center", md: "left" },
                fontSize: "1.1rem",
              }}
            >
              - Implement what you have learned from our coaching.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "650",
                paddingTop: { xs: 6, sm: 6, md: 7 },
                textShadow: `
1px 1px 3px rgba(0, 0, 0, 0.1),
2px 2px 6px rgba(0, 0, 0, 0.2),
3px 3px 9px rgba(0, 0, 0, 0.3),
4px 4px 12px rgba(0, 0, 0, 0.4),
5px 5px 15px rgba(0, 0, 0, 0.5),
6px 6px 18px rgba(0, 0, 0, 0.6),
7px 7px 21px rgba(0, 0, 0, 0.7)
`,
                opacity: 1,
                zIndex: 10,
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              Climb to your dream rank.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
