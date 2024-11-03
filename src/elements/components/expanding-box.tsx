"use client";

// External Imports
import { motion } from "framer-motion";
import { useState } from "react";

// Local Imports
import { buttonVariants } from "@/shared/components/button";
import { Wrapper } from "@/shared/components/wrapper";

export const ExpandingBox = () => {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <Wrapper>
      <motion.button
        layout
        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
        className={buttonVariants({ variant: "white" })}
        onClick={() => setShowSecond((s) => !s)}
      >
        Animate
      </motion.button>
      {showSecond ? (
        <motion.div
          layoutId="element"
          style={{ borderRadius: 12 }}
          className="size-24 bg-brand-400"
        />
      ) : (
        <motion.div
          layoutId="element"
          style={{ borderRadius: 12 }}
          className="size-12 bg-brand-400"
        />
      )}
    </Wrapper>
  );
};
