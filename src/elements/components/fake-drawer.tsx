"use client";

// External Imports
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";

// Local Imports
import { Button } from "@/shared/components/button";
import { Wrapper } from "@/shared/components/wrapper";

const MotionButton = motion.create(Button);

export const FakeDrawer = () => {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <Wrapper>
      {/* Toggle Button */}
      <MotionButton
        layout
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0.3,
        }}
        variant={"white"}
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </MotionButton>

      {/* Content */}
      <motion.div
        animate={{
          height: bounds.height,
        }}
        className="flex flex-col gap-2 overflow-hidden bg-white text-background rounded-2xl w-80"
      >
        <div ref={ref} className="p-4 [&>p]:text-neutral-600">
          <h1 className="font-semibold">Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>

          <AnimatePresence initial={false} mode="popLayout">
            {showExtraContent ? (
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  duration: 0.15,
                }}
              >
                This extra content will change the height of the drawer. Some
                even more content to make the drawer taller and taller and
                taller...
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </Wrapper>
  );
};
