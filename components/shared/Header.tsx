import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { Button } from "../ui/button";

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

        {!userId && (
          <div className="flex w-32 justify-end gap-3">
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
