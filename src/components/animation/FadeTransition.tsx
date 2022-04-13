import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const AnimationWrapper = styled.div`
  transition: all 1s ease-in-out;
  opacity: ${({ isVisible }: any) => (isVisible ? 1 : 0)};
`;

export function FadeTransition({ children }: { children: JSX.Element }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={Math.random()}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 2 }}
          // animate={{ opacity: isVisible ? 1 : 0 }}
          // transition={{ delay: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
