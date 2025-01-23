"use client";

// External Imports
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// Local Imports
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/ui/wrapper";
import { RotatingLines } from "react-loader-spinner";

const buttonCopy = {
  idle: "Send me a login link",
  loading: (
    <RotatingLines visible width="16" strokeColor="rgba(0, 0, 0, 0.65)" />
  ),
  success: "Login link sent!",
};

export const LoadingSpinnerButton = () => {
  const [buttonState, setButtonState] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const variants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  };

  return (
    <Wrapper>
      <div className="flex px-[120px] py-[40px] justify-center">
        <Button
          onClick={() => {
            // This code is just a placeholder
            setButtonState("loading");

            setTimeout(() => {
              setButtonState("success");
            }, 1750);

            setTimeout(() => {
              setButtonState("idle");
            }, 3500);
          }}
          disabled={buttonState !== "idle"}
          size={"sm"}
          className="relative overflow-hidden rounded-lg bg-gradient-to-b from-brand-200 to-brand-400 w-48 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:justify-center [&>span]:drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.16)]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={buttonState}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              initial="initial"
              animate="visible"
              exit="exit"
              variants={variants}
            >
              {buttonCopy[buttonState]}
            </motion.span>
          </AnimatePresence>
        </Button>
      </div>
    </Wrapper>
  );
};
