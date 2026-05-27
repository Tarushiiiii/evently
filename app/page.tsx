import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="px-10 text-4xl font-bold">Evently</h1>
      <Button variant="destructive" className="px-10">
        Delete
      </Button>
    </main>
  );
}
