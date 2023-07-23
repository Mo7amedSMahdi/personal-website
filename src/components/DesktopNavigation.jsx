import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./DesktopMenuItem";
import { Box, Typography } from "@mui/material";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const items = [
  {
    id: 0,
    title: "Home",
  },
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Contact",
  },
];

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginInline: "auto",
    width: "95%",
    borderRadius: "0px 0px 50px 50px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5.9px)",
    "& ul": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      width: "auto",
    },
  },
  logo: {
    position: "absolute",
    left: { xs: "90%", md: "40px" },
  },
};

export const DesktopNavigation = () => (
  <motion.dev
    style={{ position: "relative" }}
    initial={{ top: "-100px", opacity: 0 }}
    animate={{ top: "0px", opacity: 1 }}
    transition={{ type: "linear" }}
  >
    <Box sx={styles.container}>
      <Typography sx={styles.logo} variant="logo">
        M.S
      </Typography>
      <motion.ul variants={variants}>
        {items.map((item) => (
          <MenuItem i={item.id} key={item.id} title={item.title} />
        ))}
      </motion.ul>
    </Box>
  </motion.dev>
);
