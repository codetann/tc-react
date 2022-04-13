import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: JSX.Element;
  isMounted: boolean;
}

export function FadeTest({ children, isMounted }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ delay: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
