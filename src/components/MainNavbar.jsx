import React, { useRef, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "../hooks/useDimensions";
import { MenuToggle } from "../components/MenuToggle";
import { Navigation } from "../components/Navigation";
import { DesktopNavigation } from "../components/DesktopNavigation";
import { Container } from "@mui/material";

const styles = {
  container: {
    pt: "90px",
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MainNavbar = (props) => {
  const { window, children } = props;
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: { sm: "block", md: "none" } }}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div className="background" variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </Box>
      <Box sx={{ display: { sm: "none", md: "block" } }}>
        <motion.nav initial={{ width: "100%" }}>
          <DesktopNavigation />
        </motion.nav>
      </Box>
      <Container sx={styles.container}>{children}</Container>
    </Box>
  );
};

export default MainNavbar;
