"use client";

// External Imports
import { useClickAway } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

// Local Imports
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/ui/wrapper";

const MotionButton = motion.create(Button);

export const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const ref = useClickAway<HTMLDivElement>(() => {
    setOpen(false);
  });

  const submit = () => {
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);

    setTimeout(() => {
      setOpen(false);
    }, 3300);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter" &&
        open &&
        formState === "idle"
      ) {
        submit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, formState]);

  const variants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  };

  return (
    <Wrapper>
      <div className="flex h-[500px] w-full items-center justify-center">
        <MotionButton
          layoutId="feedback-button-and-popover"
          onClick={() => {
            setOpen(true);
            setFormState("idle");
            setFeedback("");
          }}
          variant={"white"}
          className="relative flex items-center border border-neutral-300"
          style={{ borderRadius: 10 }}
        >
          <motion.span
            layoutId="feedback-span-and-placeholder"
            className="h-full"
          >
            Feedback
          </motion.span>
        </MotionButton>

        <AnimatePresence>
          {open ? (
            <motion.div
              layoutId="feedback-button-and-popover"
              className="absolute h-[192px] w-[364px] max-w-[calc(100%_-_1rem)] overflow-hidden bg-[#f5f6f7] p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04)] outline-hidden"
              style={{ borderRadius: 12 }}
              ref={ref}
            >
              <motion.span
                aria-hidden
                layoutId="feedback-span-and-placeholder"
                className="absolute top-[17px] left-[16px] text-sm text-[#63635d] data-[feedback=true]:opacity-0!"
                data-feedback={feedback ? "true" : "false"}
              >
                Feedback
              </motion.span>

              <AnimatePresence mode="popLayout">
                {formState === "success" ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -32,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      type: "spring",
                      duration: 0.4,
                      bounce: 0,
                    }}
                    className="flex h-full flex-col items-center justify-center px-3 text-center [&>svg]:-mt-1"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
                        fill="#11DD66"
                        fillOpacity="0.16"
                      />
                      <path
                        d="M12.1334 16.9667L15.0334 19.8667L19.8667 13.1M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
                        stroke="#11DD66"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="mt-2 mb-1 text-sm font-semibold text-[#21201c]">
                      Feedback received!
                    </h3>
                    <p className="text-sm text-[#63635d]">
                      Thanks for checking out Braui.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    exit={{
                      opacity: 0,
                      y: 8,
                      filter: "blur(4px)",
                    }}
                    transition={{
                      type: "spring",
                      duration: 0.4,
                      bounce: 0,
                    }}
                    key={"form"}
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!feedback) return;
                      submit();
                    }}
                    className="rounded-lg border border-[#e6e7e8] bg-white"
                  >
                    <textarea
                      autoFocus
                      placeholder="Feedback"
                      onChange={(e) => setFeedback(e.target.value)}
                      className="h-[128px] w-full resize-none rounded-t-lg p-3 text-sm text-black outline-hidden placeholder:opacity-0"
                      required
                    />

                    {/* Footer (Kinda) */}
                    <motion.div className="relative flex h-12 items-center px-2.5">
                      <svg
                        className="absolute top-[-1px] right-0 left-0"
                        width="352"
                        height="2"
                        viewBox="0 0 352 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 1H352"
                          stroke="#E6E7E8"
                          strokeDasharray="4 4"
                        />
                      </svg>

                      {/* Half Circle Left */}
                      <div className="absolute -top-1.5 left-0 translate-x-[-1.5px]">
                        <svg
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2029_22)">
                            <path
                              d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
                              fill="#F5F6F7"
                            />
                            <path
                              d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
                              stroke="#E6E7E8"
                              strokeWidth="1"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2029_22">
                              <rect width="6" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      {/* Half Circle Right */}
                      <div className="absolute -top-1.5 right-0 translate-x-[1.5px] rotate-180">
                        <svg
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2029_22)">
                            <path
                              d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
                              fill="#F5F6F7"
                            />
                            <path
                              d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
                              stroke="#E6E7E8"
                              strokeWidth="1"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2029_22">
                              <rect width="6" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <MotionButton
                        disabled={formState !== "idle"}
                        type="submit"
                        size={"sm"}
                        className="relative ml-auto h-7 w-32 overflow-hidden rounded-lg bg-linear-to-b from-brand-2 to-brand-4 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:justify-center [&>span]:drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.16)]"
                      >
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={formState}
                            transition={{
                              type: "spring",
                              bounce: 0,
                              duration: 0.3,
                            }}
                            initial="initial"
                            animate="visible"
                            exit="exit"
                            variants={variants}
                          >
                            {formState === "loading" ? (
                              <RotatingLines
                                visible
                                width="16"
                                strokeColor="rgba(0, 0, 0, 0.65)"
                              />
                            ) : (
                              <span>Send feedback</span>
                            )}
                          </motion.span>
                        </AnimatePresence>
                      </MotionButton>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
};
