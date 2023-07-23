import * as React from "react";
import { motion } from "framer-motion";
import { Box, Stack, Typography } from "@mui/material";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const animationVariants = {
  open: {
    width: "100%",
    transition: {
      duration: 0.3,
      type: "Tween",
      stiffness: 200,
      damping: 15,
    },
  },
  closed: {
    width: "0%",
    transition: {
      duration: 0.3,
      type: "Inertia",
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, title }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Stack>
        <Typography variant="menu-item" type="mobile-menu">
          {title}
        </Typography>
        <motion.div
          variants={animationVariants}
          animate={isHovered ? "open" : "closed"}
          style={{ background: "#FF008C", height: "4px", borderRadius: "6px" }}
        />
      </Stack>
    </motion.li>
  );
};
