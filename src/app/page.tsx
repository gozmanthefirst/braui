// External Imports
import Link from "next/link";

// Local Imports
import { GameModal } from "@/components/braui/game-modal";
import { BrandedText } from "@/components/ui/branded-text";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";
import { instrumentSerif } from "@/styles/fonts";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-16 smd:gap-16 md:gap-20">
      <Container className="flex flex-col gap-2 md:gap-3">
        <h1
          className={cn(
            "text-4xl font-bold text-neutral-200 italic md:text-5xl",
            instrumentSerif.className,
          )}
        >
          Braui
        </h1>
        <p className="text-lg text-neutral-400 md:text-xl">
          A collection of{" "}
          <Link
            href={"https://github.com/gozmanthefirst/braui"}
            target="_blank"
          >
            <BrandedText>brilliant random animated UIs</BrandedText>
          </Link>
          , built by{" "}
          <Link href={"https://x.com/gozmanthefirst"} target="_blank">
            <BrandedText>Gozman</BrandedText>
          </Link>
          .
        </p>
      </Container>

      <div className="bg-red-/400">
        <GameModal />
      </div>
    </main>
  );
};

export default HomePage;
