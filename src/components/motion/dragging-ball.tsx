"use client";

// External Imports
import { motion, useMotionValue, useTransform } from "motion/react";
import { useRef } from "react";

// Local Imports
import { Wrapper } from "@/components/ui/wrapper";

export const DraggingBall = () => {
  const boundingBox = useRef(null);

  const y = useMotionValue(0);
  // if the y value is 100 or more, the opacity will be 0
  const opacity = useTransform(y, [0, 200], [1, 0]);

  return (
    <>
      <Wrapper>
        <div
          ref={boundingBox}
          className="flex h-80 w-full justify-center overflow-hidden border border-neutral-800 bg-neutral-950 p-6"
        >
          <motion.div
            drag
            // this prevents the element from being dragged outside of the bounding box
            dragConstraints={boundingBox}
            dragMomentum={false}
            className="bg-brand-4 h-10 w-10 cursor-grab rounded-full"
          />
        </div>

        <div className="flex h-80 w-full justify-center overflow-hidden border border-neutral-800 bg-neutral-950 p-6">
          <motion.div
            onPan={(_, info) => {
              y.set(info.offset.y);
            }}
            onPanEnd={() => y.set(0)}
            style={{ y, opacity }}
            className="bg-brand-4 h-10 w-10 cursor-grab rounded-full"
          />
        </div>
      </Wrapper>
    </>
  );
};
