import * as React from "react";
import { motion } from "framer-motion";
import { Box, Stack, Typography } from "@mui/material";

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

export const MenuItem = ({ i, title }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ marginBottom: "0" }}
    >
      <Stack>
        <Typography variant="menu-item">{title}</Typography>
        <motion.div
          variants={animationVariants}
          animate={isHovered ? "open" : "closed"}
          style={{ background: "#FF008C", height: "4px", borderRadius: "6px" }}
        />
      </Stack>
    </motion.li>
  );
};
