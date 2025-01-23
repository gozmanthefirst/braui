// External Imports
import Image from "next/image";
import Link from "next/link";

// Local Imports
import { Container } from "./container";

export const Header = () => {
  return (
    <Container className="pt-6 pb-4 md:pt-8 md:pb-6">
      <header>
        <Link href={"/"} tabIndex={-1} className="focus:outline-0">
          <div className="relative size-9 md:size-10">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              fill
              className="shadow-md"
            />
          </div>
        </Link>
      </header>
    </Container>
  );
};
