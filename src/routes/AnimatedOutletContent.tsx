import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, type Transition } from "framer-motion";

type Props = {
  className?: string;
  context?: unknown;
};

const variants = {
  initial: { opacity: 0, x: 18 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -18 },
};

const transition: Transition = {
  duration: 0.28,
  ease: [0.16, 1, 0.3, 1],
};

export default function AnimatedOutletContent({ className, context }: Props) {
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
            // ✅ remove height: "100%" to prevent nested scroll issues
            willChange: "transform, opacity",
          }}
        >
          <Outlet context={context as any} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
