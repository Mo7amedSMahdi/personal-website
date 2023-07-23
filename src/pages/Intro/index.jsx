import { Box } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../components/AnimatedText";

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#190B28",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#685762",
    fontSize: { xs: "3rem", md: "5rem" },
    fontWeight: 600,
    fontFamily: "var(--ff-tektur)",
  },
};
const greetings = [
  "Salame",
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Hallo",
  "Salut",
  "Hej",
  "Ahoj",
];

const Index = () => {
  const [index, setIndex] = useState(0);
  const [replay, setReplay] = useState(true);
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleReplay();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 600);
  };

  return (
    <Box sx={styles.container}>
      <motion.div
        className="App"
        initial="hidden"
        // animate="visible"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className="container">
          <AnimatedText type="heading1" text={greetings[index]} />
        </div>
      </motion.div>
    </Box>
  );
};

export default Index;
