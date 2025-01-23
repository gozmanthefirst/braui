"use client";

// External Imports
import { useClickAway } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbList, TbX } from "react-icons/tb";

// Local Imports
import { Container } from "@/components/ui/container";
import { motionPages } from "@/data/motion-pages";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  const pathname = usePathname();

  const [navOpen, setNavOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(pathname);

  const ref = useClickAway<HTMLDivElement>(() => {
    setNavOpen(false);
  });

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setNavOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Container className="sticky right-0 bottom-0 z-50 flex justify-end py-6">
      <div ref={ref} className="relative size-10 cursor-pointer rounded-xl">
        <Image
          src={"/images/squircle.png"}
          alt="Logo"
          fill
          className="shadow-md"
        />
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={navOpen ? "open" : "closed"}
            onClick={() => setNavOpen((n) => !n)}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{
              type: "spring",
              duration: 0.15,
              bounce: 0.1,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {navOpen ? (
              <TbX
                size={24}
                strokeWidth={2.5}
                className="shrink-0 text-neutral-200 transition duration-150 group-hover:text-neutral-100"
              />
            ) : (
              <TbList
                size={24}
                strokeWidth={2.5}
                className="shrink-0 text-neutral-200 transition duration-150 group-hover:text-neutral-100"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <AnimatePresence initial={false}>
          {navOpen ? (
            <>
              <motion.div
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: 5,
                  x: 5,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  x: 0,
                }}
                exit={{
                  scale: 0.95,
                  opacity: 0,
                  y: 5,
                  x: 5,
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.2,
                }}
                className="absolute right-0 bottom-[125%] flex max-h-[40dvh] min-w-64 flex-col overflow-auto rounded-2xl bg-neutral-800 p-2 shadow-lg"
              >
                {motionPages.map((page) => (
                  <Link
                    key={page.value}
                    href={page.href}
                    prefetch
                    onFocus={() => setActiveItem(page.href)}
                    onMouseEnter={() => setActiveItem(page.href)}
                    onMouseLeave={() => setActiveItem(pathname)}
                    className="relative"
                  >
                    {/* Hover BG */}
                    {activeItem === page.href ? (
                      <motion.div
                        layoutId="item-bg"
                        transition={{
                          type: "spring",
                          duration: 0.3,
                          bounce: 0.2,
                        }}
                        className="absolute inset-0 z-60 rounded-xl bg-neutral-950"
                      />
                    ) : null}

                    <div
                      className={cn(
                        "relative z-70 flex items-center gap-2 overflow-hidden rounded-xl px-3 py-3 text-neutral-400 transition",
                        activeItem === page.href && "text-neutral-100",
                      )}
                    >
                      <page.icon size={18} />
                      <span className="text-sm">{page.name}</span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </Container>
  );
};
