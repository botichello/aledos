import React from "react";
import { Typography, Box, Grid, Stack } from "@mui/material";
import videoThumbnail from "../images/kassa_op.jpg";
import challEmblem from "../images/Challenger_emblem.png";

const IntroductionSection = () => {
  return (
    <Stack maxWidth={1500} display={"flex"}>
      <Grid
        container
        spacing={{ xs: 3, md: 5, lg: 10 }}
        paddingBottom={10}
        sx={{
          paddingX: { xs: 0, sm: 2, md: 2, lg: 3 },
        }}
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
            component={"img"}
            src={videoThumbnail}
            border={1.5}
            borderColor={"#CBC2D7"}
            //
            sx={{
              width: "calc(100% - 48px)",
              height: "auto",
              overflow: "hidden",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            {/* <video
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
            /> */}
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
              top: 20,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${challEmblem})`,
              backgroundSize: { xs: "70%", sm: "60%", md: "70%" },
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.275, // Set the desired opacity
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
                paddingTop: { xs: 0, sm: 0, md: 3 },
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
              Challenger.
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
              Kassadin expert.
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
              Working as a professional private coach since 2020.
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
              1000+ coaching sessions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default IntroductionSection;
