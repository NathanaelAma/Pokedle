import Image from "next/image";
import { Inter } from "next/font/google";
import Board from "@/components/board/Board";
import Keyboard from "@/components/keyboard/Keyboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <main>
      <div className="h-full">
        <div className="flex flex-col w-full mx-auto my-0 max-w-[var(--game-max-width)]">
          <Board word={"Test"} />
          <Keyboard />
        </div>
      </div>
    </main>
  );
}
