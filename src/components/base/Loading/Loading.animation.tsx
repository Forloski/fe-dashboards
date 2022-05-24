import { motion } from "framer-motion";

type Props = {
  style: {
    height: number;
    width: number;
  };
  children: React.ReactNode;
};

const LoadingAnimation = (props: Props) => {
  const { style, children } = props;

  const rotationAnimation = {
    rotateY: 360,
    transition: {
      rotateY: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <motion.div style={style} animate={rotationAnimation}>
      {children}
    </motion.div>
  );
};

export default LoadingAnimation;
