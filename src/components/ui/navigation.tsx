"use client";

// External Imports
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TbList, TbX } from "react-icons/tb";
import { useOnClickOutside } from "usehooks-ts";

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

  const ref = useRef(null);
  useOnClickOutside(ref, () => setNavOpen(false));

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
    <Container className="sticky bottom-0 right-0 flex justify-end z-50 py-6">
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
                className="shrink-0 text-neutral-200 group-hover:text-neutral-100 transition duration-150"
              />
            ) : (
              <TbList
                size={24}
                strokeWidth={2.5}
                className="shrink-0 text-neutral-200 group-hover:text-neutral-100 transition duration-150"
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
                className="absolute bottom-[125%] right-0 flex flex-col min-w-64 p-2 bg-neutral-800 rounded-2xl shadow-lg overflow-auto max-h-[40dvh]"
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
                        className="absolute z-[60] inset-0 bg-neutral-950 rounded-xl"
                      />
                    ) : null}

                    <div
                      className={cn(
                        "relative z-[70] flex items-center gap-2 rounded-xl px-3 py-3 overflow-hidden text-neutral-400 transition",
                        activeItem === page.href && "text-neutral-100"
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
