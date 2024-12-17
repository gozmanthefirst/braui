"use client";

// External Imports
import { AnimatePresence, motion } from "motion/react";
import { Dispatch, SetStateAction, useState } from "react";
import {
  TbBug,
  TbChecklist,
  TbChevronDown,
  TbCode,
  TbHistory,
  TbRocket,
} from "react-icons/tb";
import useMeasure from "react-use-measure";

// Local Imports
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/ui/wrapper";
import { cn } from "@/lib/utils/cn";
import { IconType } from "react-icons";

const MotionButton = motion.create(Button);

const accordionData = [
  {
    icon: TbCode,
    title: "What is Programming?",
    content:
      "The process of writing instructions for a computer to perform tasks using various programming languages.",
  },
  {
    icon: TbChecklist,
    title: "Coding Best Practices",
    content:
      "A set of guidelines to write clean, efficient, and maintainable code that ensures consistency and scalability.",
  },
  {
    icon: TbBug,
    title: "Debugging & Troubleshooting",
    content:
      "Identifying and fixing errors or bugs in code to ensure it behaves as expected.",
  },
  {
    icon: TbHistory,
    title: "Version Control",
    content:
      "Managing changes to source code using tools like Git to collaborate and track progress over time.",
  },
  {
    icon: TbRocket,
    title: "Testing & Deployment",
    content:
      "Writing tests to ensure code reliability and deploying applications to make them accessible to users.",
  },
];

export const Accordion = () => {
  const [activeData, setActiveData] = useState<string | null>(null);

  return (
    <Wrapper>
      <motion.div className="relative flex flex-col gap-4 mx-auto my-8 max-w-[500px] w-full">
        {/* Main */}
        <div
          className="border border-neutral-800 bg-neutral-900 overflow-hidden p-0.5"
          style={{
            borderRadius: 24,
          }}
        >
          {accordionData.map((accordion) => (
            <SingleAccordionData
              key={accordion.title}
              accordion={accordion}
              activeData={activeData}
              setActiveData={setActiveData}
            />
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
};

interface SGAProps {
  accordion: {
    icon: IconType;
    title: string;
    content: string;
  };
  activeData: string | null;
  setActiveData: Dispatch<SetStateAction<string | null>>;
}

export const SingleAccordionData = ({
  accordion,
  activeData,
  setActiveData,
}: SGAProps) => {
  const [ref, bounds] = useMeasure();

  return (
    <motion.div
      key={accordion.title}
      animate={{
        height: bounds.height,
      }}
      role="button"
      style={{
        borderRadius: 22,
      }}
      className={cn(
        "relative overflow-hidden transition duration-200 hover:bg-neutral-950/30",
        activeData === accordion.title &&
          "bg-neutral-950/50 hover:bg-neutral-950/50"
      )}
    >
      <div
        ref={ref}
        onClick={() => {
          if (activeData === accordion.title) {
            setActiveData(null);
            return;
          }

          setActiveData(accordion.title);
        }}
        className="flex flex-col gap-3 px-6 py-4"
      >
        <div className="flex items-center gap-3">
          <accordion.icon size={28} className="text-neutral-400" />

          <p className="text-neutral-200 text-lg">{accordion.title}</p>

          <motion.div
            animate={{
              rotate: activeData === accordion.title ? 180 : 0,
            }}
            transition={{
              type: "spring",
              duration: 0.2,
              bounce: 0,
            }}
            className="ml-auto"
          >
            <TbChevronDown size={28} className="text-neutral-500" />
          </motion.div>
        </div>

        <AnimatePresence initial={false} mode="popLayout">
          {activeData === accordion.title ? (
            <motion.p
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              className="text-neutral-400"
            >
              {accordion.content}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
