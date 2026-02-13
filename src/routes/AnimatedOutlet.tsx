// src/routes/AnimatedOutlet.tsx
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Transition } from "framer-motion";

type Props = {
  className?: string;
  context?: unknown;
};

const variants = {
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -18, filter: "blur(10px)" },
};

const transition: Transition = {
  duration: 0.38,
  ease: [0.16, 1, 0.3, 1],
};

export default function AnimatedOutlet({ className, context }: Props) {
  const location = useLocation();

  return (
    <div className={className} style={{ position: "relative" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          style={{
            width: "100%",
            willChange: "transform, opacity, filter",
            transformOrigin: "center",
          }}
        >
          <Outlet context={context as any} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
