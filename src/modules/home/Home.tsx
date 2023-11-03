"use client";
import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import AnimatedLink from "@/components/link/AnimatedLink";
import { useState } from "react";
import "./Home.scss";
import { rubikMonoOne } from "@/utils/fonts";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <AnimatedContainer className="main-content">
      <div className="content">
        <h1 className={`${rubikMonoOne.className} main-title`}>JAMIL_ETTEL</h1>
        <p>Welcome to my portfolio! I am Jamil, a fullstack developer.</p>
        <p>
          Now this website is still in development, but in the meantime you can
          checkout my <a href="https://www.github.com/jamilettel">Github</a> (my
          projects there are pretty dated by now though).
        </p>
        <br />
        <p>
          And you can also take a look at these amazing transitions!{" "}
          <AnimatedLink href="/test">go to /test</AnimatedLink>
        </p>
        <p>This was developed only using NextJS, and it even retains state:</p>
        <div>
          Click count: {count}{" "}
          <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>
    </AnimatedContainer>
  );
}
