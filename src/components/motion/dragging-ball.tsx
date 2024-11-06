"use client";

// External Imports
import { motion, useMotionValue, useTransform } from "framer-motion";
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
          className="flex justify-center h-80 w-full p-6 bg-neutral-950 border border-neutral-800 overflow-hidden"
        >
          <motion.div
            drag
            // this prevents the element from being dragged outside of the bounding box
            dragConstraints={boundingBox}
            dragMomentum={false}
            className="h-10 w-10 rounded-full bg-brand-400 cursor-grab"
          />
        </div>

        <div className="flex justify-center h-80 w-full p-6 bg-neutral-950 border border-neutral-800 overflow-hidden">
          <motion.div
            onPan={(_, info) => {
              y.set(info.offset.y);
            }}
            onPanEnd={() => y.set(0)}
            style={{ y, opacity }}
            className="h-10 w-10 rounded-full bg-brand-400 cursor-grab"
          />
        </div>
      </Wrapper>
    </>
  );
};
