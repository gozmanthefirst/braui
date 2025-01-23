// Local Imports
import { BrandedText } from "@/components/ui/branded-text";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";
import { instrumentSerif } from "@/styles/fonts";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
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
          <BrandedText>brilliant random animated UIs</BrandedText>, built by{" "}
          <Link href={"https://x.com/gozmanthefirst"} target="_blank">
            <BrandedText>Gozman</BrandedText>
          </Link>
          .
        </p>
      </Container>
    </main>
  );
};

export default HomePage;
