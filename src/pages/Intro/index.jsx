import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  useAnimation,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const bgColors = [
  "hsl(108, 66%, 63%)",
  "hsl(81, 58%, 70%)",
  "hsl(0, 0%, 100%)",
];

const Index = () => {
  const [index, setIndex] = useState(0);
  const [replay, setReplay] = useState(true);
  const placeholderText = [{ type: "heading1", text: "Framer Motion" }];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const x = useMotionValue(index);
  const xInput = [0, 1, 2];

  // const background = useTransform(
  //   x,
  //   xInput,
  //   [
  //     "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
  //     "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
  //     "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  //   ],
  //   { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  // );

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
      {/* <GreetingAnimation greeting={greeting} /> */}
      <motion.div
        style={styles.container}
        animate={{
          backgroundColor:
            index > bgColors.length - 1 ? bgColors[0] : bgColors[index],
        }}
        transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }}
      >
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
      </motion.div>
    </Box>
  );
};

export default Index;
