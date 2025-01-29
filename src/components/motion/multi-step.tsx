"use client";

// External Imports
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useMemo, useState } from "react";
import useMeasure from "react-use-measure";

// Local Imports
import { Wrapper } from "@/components/ui/wrapper";
import { Button } from "../ui/button";

const MotionButton = motion.create(Button);

export const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className="mb-2 text-lg font-semibold">This is step one</h2>
            <p className="text-neutral-400">
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-1/2 animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-1/3 animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-full animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-4/5 animate-skeleton rounded-md bg-neutral-800" />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="mb-2 text-lg font-semibold">This is step two</h2>
            <p className="text-neutral-400">
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-1/2 animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-1/3 animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-4/5 animate-skeleton rounded-md bg-neutral-800" />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="mb-2 text-lg font-semibold">This is step three</h2>
            <p className="text-neutral-400">
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-1/2 animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-1/3 animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-1/4 animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-2/5 animate-skeleton rounded-md bg-neutral-800" />
              <div className="h-4 w-3/4 animate-skeleton rounded-md bg-neutral-800" />
            </div>
          </>
        );
    }
  }, [currentStep]);

  return (
    <Wrapper>
      <MotionConfig
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0,
        }}
      >
        <motion.div
          animate={{
            height: bounds.height,
          }}
          className="relative mx-auto my-[100px] max-w-[550px] overflow-hidden rounded-xl border border-neutral-800 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04)]"
        >
          <motion.div ref={ref} className="p-6">
            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={direction}
            >
              <motion.div
                key={`${currentStep}`}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
              >
                {content}
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex justify-between">
              <MotionButton
                layout
                variant={"secondary"}
                className="h-8 w-20 rounded-full text-neutral-300 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04)] disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentStep === 0}
                onClick={() => {
                  if (currentStep === 0) {
                    return;
                  }
                  setDirection(-1);
                  setCurrentStep((prev) => prev - 1);
                }}
              >
                Back
              </MotionButton>
              <MotionButton
                layout
                variant={"brand"}
                className="h-8 w-32 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04)] disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50"
                disabled={currentStep === 2}
                onClick={() => {
                  if (currentStep === 2) {
                    setCurrentStep(0);
                    setDirection(-1);
                    return;
                  }
                  setDirection(1);
                  setCurrentStep((prev) => prev + 1);
                }}
              >
                Continue
              </MotionButton>
            </div>
          </motion.div>
        </motion.div>
      </MotionConfig>
    </Wrapper>
  );
};

const variants = {
  initial: (direction: 1 | -1) => {
    return { x: `${110 * direction}%`, opacity: 0, filter: "blur(4px)" };
  },
  active: { x: "0%", opacity: 1, filter: "blur(0px)" },
  exit: (direction: 1 | -1) => {
    return { x: `${-110 * direction}%`, opacity: 0, filter: "blur(4px)" };
  },
};
