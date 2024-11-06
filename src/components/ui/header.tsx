// External Imports
import Image from "next/image";
import Link from "next/link";

// Local Imports
import { Container } from "./container";

export const Header = () => {
  return (
    <Container className="sticky top-0 z-50 py-6">
      <header className="flex justify-start">
        <Link href={"/"}>
          <div className="relative size-10">
            <Image
              src={"/images/logo-gray.png"}
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
