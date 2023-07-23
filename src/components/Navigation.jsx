import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

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

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Navigation = (isMobile = false) => (
  <motion.ul variants={variants} style={isMobile ? null : style}>
    {items.map((item) => (
      <MenuItem i={item.id} key={item.id} title={item.title} />
    ))}
  </motion.ul>
);
