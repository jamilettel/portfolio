"use client";
import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import AnimatedLink from "@/components/link/AnimatedLink";
import { useState } from "react";
import styles from "./Home.module.scss";

function HomeContent() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.test}>
      <h1>Hello!</h1>
      <AnimatedLink href="/test">Goto /test</AnimatedLink>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </main>
  );
}

export default function Home() {
  return (
    <AnimatedContainer>
      <HomeContent />
    </AnimatedContainer>
  );
}
