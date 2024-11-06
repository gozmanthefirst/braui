// Local Imports
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";
import { tacOne } from "@/styles/fonts";

const HomePage = () => {
  return (
    <Container
      className={cn("flex items-center justify-center", tacOne.className)}
    >
      <h1 className="text-5xl md:text-6xl">
        <span className="text-brand-400">motions</span> by gozman
      </h1>
    </Container>
  );
};

export default HomePage;
