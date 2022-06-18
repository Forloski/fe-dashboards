import { motion, TargetAndTransition } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const ToggleThemeBtnAnimation = (props: Props) => {
  const enter: TargetAndTransition = {
    opacity: [0, 1],
    transition: {
      opacity: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const exit: TargetAndTransition = {
    opacity: [1, 0],
    scale: [1, 0.8],
    transition: {
      opacity: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div animate={enter} whileTap={exit} whileHover={{ scale: 1.2 }}>
      {props.children}
    </motion.div>
  );
};

export default ToggleThemeBtnAnimation;
