import { motion, TargetAndTransition } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const LoginAnimation = (props: Props) => {
  const enterFromLeft: TargetAndTransition = {
    x: ["-100%", "0%"],
    opacity: [0, 1],
    transition: {
      x: {
        duration: 1,
        ease: "easeIn",
      },
      opacity: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div initial={{ x: "-100%" }} animate={enterFromLeft}>
      {props.children}
    </motion.div>
  );
};

export default LoginAnimation;
