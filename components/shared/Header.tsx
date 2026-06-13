import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = async () => {
  const { userId } = await auth();

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between p-4">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently Logo"
          />
        </Link>
        {userId && (
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        )}
        {!userId && (
          <div className="flex w-32 justify-end gap-3">
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </div>
        )}
        {userId && (
          <div className="flex w-32 justify-end gap-3">
            <UserButton />
            <MobileNav />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
