"use client";

// External Imports
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

// Local Imports
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/ui/wrapper";

type Game = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
};

const MotionButton = motion.create(Button);

export const GamesList = () => {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Wrapper>
      {/* Modal */}
      <AnimatePresence>
        {activeGame ? (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                duration: 0.5,
                bounce: 0.2,
              }}
              className="absolute inset-0 z-10 bg-black/50 pointer-events-none"
            />

            {/* Active Game */}
            <div className="absolute inset-0 grid place-items-center z-10 px-4">
              <motion.div
                layoutId={`game-${activeGame.title}`}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.2,
                }}
                className="flex flex-col items-start gap-4 overflow-hidden bg-background p-4 h-fit max-w-xl mx-4 w-full cursor-pointer"
                ref={ref}
                style={{ borderRadius: 12 }}
              >
                {/* Header */}
                <div className="flex w-full items-center gap-4">
                  {/* Header Image */}
                  <motion.div
                    layoutId={`game-image-${activeGame.title}`}
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      bounce: 0.2,
                    }}
                    className="relative size-14 overflow-hidden"
                    style={{
                      borderRadius: 12,
                    }}
                  >
                    <Image
                      src={activeGame.image}
                      alt={activeGame.title}
                      fill
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* Header Other */}
                  <div className="flex grow items-center justify-between">
                    <div className="flex flex-col p-0">
                      <motion.h2
                        layoutId={`game-title-${activeGame.title}`}
                        transition={{
                          type: "spring",
                          duration: 0.5,
                          bounce: 0.2,
                        }}
                        className="text-sm font-semibold"
                      >
                        {activeGame.title}
                      </motion.h2>
                      <motion.p
                        layoutId={`game-desc-${activeGame.title}`}
                        transition={{
                          type: "spring",
                          duration: 0.5,
                          bounce: 0.2,
                        }}
                        className="text-sm text-neutral-400"
                      >
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <MotionButton
                      layoutId={`game-get-btn-${activeGame.title}`}
                      transition={{
                        type: "spring",
                        duration: 0.5,
                        bounce: 0.2,
                      }}
                      variant={"secondary"}
                      size={"xs"}
                      className="rounded-full"
                    >
                      Get
                    </MotionButton>
                  </div>
                </div>

                {/* Description */}
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
                  transition={{ duration: 0.1 }}
                  className="text-sm text-neutral-400"
                >
                  {activeGame.longDescription}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      {/* List */}
      <ul className="relative flex flex-col items-center p-0 mx-12 max-w-md w-full">
        {GAMES.map((game) => (
          <motion.li
            layoutId={`game-${game.title}`}
            transition={{
              type: "spring",
              duration: 0.5,
              bounce: 0.2,
            }}
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            className="group flex w-full cursor-pointer items-center gap-4 p-0"
          >
            <motion.div
              layoutId={`game-image-${game.title}`}
              transition={{
                type: "spring",
                duration: 0.5,
                bounce: 0.2,
              }}
              className="relative size-14 overflow-hidden"
              style={{
                borderRadius: 12,
              }}
            >
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover object-center"
              />
            </motion.div>
            <div className="flex grow items-center justify-between border-b border-neutral-800/50 group-last:border-none">
              <div className="flex flex-col py-4">
                <motion.h2
                  layoutId={`game-title-${game.title}`}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    bounce: 0.2,
                  }}
                  className="text-sm font-semibold"
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`game-desc-${game.title}`}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    bounce: 0.2,
                  }}
                  className="text-sm text-neutral-400"
                >
                  {game.description}
                </motion.p>
              </div>
              <MotionButton
                layoutId={`game-get-btn-${game.title}`}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.2,
                }}
                variant={"secondary"}
                size={"xs"}
                className="rounded-full"
              >
                Get
              </MotionButton>
            </div>
          </motion.li>
        ))}
      </ul>
    </Wrapper>
  );
};

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
