"use client";
import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import AnimatedLink from "@/components/link/AnimatedLink";
import Terminal from "@/components/terminal/Terminal";
import { rubikMonoOne } from "@/utils/fonts";
import "./Home.scss";

export default function Home() {
  return (
    <AnimatedContainer className="main-content">
      <div className="content">
        <h1 className={`${rubikMonoOne.className} main-title`}>JAMIL_ETTEL</h1>
        <h2 className="subtitle">A Full Stack developer</h2>
        <div className="links">
          Choose a page...
          <br />
          <AnimatedLink href="/work">{"> my_work"}</AnimatedLink>
          <br />
          <AnimatedLink href="/contact">{"> contact"}</AnimatedLink>
          <br />
          <AnimatedLink href="/about">{"> about"}</AnimatedLink>
        </div>
      </div>
      <Terminal />
    </AnimatedContainer>
  );
}
