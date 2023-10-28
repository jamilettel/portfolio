"use client";
import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import AnimatedLink from "@/components/link/AnimatedLink";
import { useState } from "react";
import './Home.scss';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <AnimatedContainer className="main-content">
      <div className="content">

        <h1>Hello!</h1>
        <AnimatedLink href="/test">Goto /test</AnimatedLink>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </AnimatedContainer>
  );
}
