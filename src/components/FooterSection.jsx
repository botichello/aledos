import React, { useState, useEffect } from "react";
import { Stack, Box, Link, Button, Divider } from "@mui/material";
import logo from "../images/logo_2_no_bg_no_hand_2.png";

export default function FooterSection() {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          backgroundColor: "#121441",
          borderTop: 2,
          borderColor: "#CEADFF",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Link href="/">
          <Box
            component={"img"}
            src={logo}
            maxHeight={{ xs: 100, sm: 100, md: 150, lg: 150 }}
            height={{ xs: 130, sm: 130, md: 150, lg: 150 }}
            sx={{ display: "flex" }}
          />
        </Link>
        <Link href="/coaching">
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
            Book your coaching now
          </Button>
        </Link>
        <Box width={120} paddingTop={2.5}>
          <Divider
            sx={{ backgroundColor: "#CEADFF", borderBottomWidth: 2 }}
          ></Divider>
        </Box>
        <Box
          justifyContent={"center"}
          display={"flex"}
          width={"100%"}
          height={"100%"}
          marginLeft={-4}
          paddingBottom={2}
        >
          <Link
            href="https://www.aledos.lol/"
            target="_blank"
            sx={{ height: "26px", width: "26px", paddingY: 2, paddingX: 0.75 }}
          >
            <Button>
              <svg
                className="custom-height-width" // discord
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
              </svg>
            </Button>
          </Link>
          <Link
            href="https://www.aledos.lol/"
            target="_blank"
            sx={{ height: "26px", width: "26px", paddingY: 2, paddingX: 0.75 }}
          >
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg" // youtube
                className="custom-height-width"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </Button>
          </Link>
          <Link
            href="https://www.twitch.tv/aledosxd"
            target="_blank"
            sx={{ height: "26px", width: "26px", paddingY: 2, paddingX: 0.75 }}
          >
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg" // twitch
                className="custom-height-width"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
          <Link
            href="https://twitter.com/Aledosxd"
            target="_blank"
            sx={{ height: "26px", width: "26px", paddingY: 2, paddingX: 0.75 }}
          >
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="custom-height-width"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </Button>
          </Link>
        </Box>
      </Stack>
    </>
  );
}
