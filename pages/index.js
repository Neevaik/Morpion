
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Board from "@/component/Board";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Morpion</h1>
      <Board/>
    </div>
  );
}
