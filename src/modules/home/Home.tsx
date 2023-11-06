"use client";
import Layout from "@/components/layout/Layout";
import AnimatedLink from "@/components/link/AnimatedLink";
import { rubikMonoOne } from "@/utils/fonts";
import "./Home.scss";
import "./HomeTitle.scss";

function OtherPageTitle({
  className,
  title,
}: {
  className: string;
  title: string;
}) {
  return (
    <div className={className}>
      {title.split("").map((letter, i) => (
        <div key={i}>{letter}</div>
      ))}
    </div>
  );
}

function HomePageTitle() {
  return (
    <div>
      <div className="title-wrapper">
        <h1 className={`${rubikMonoOne.className} main-title`}>Jamil Ettel</h1>
        <h1 className={`${rubikMonoOne.className} main-title-animated`}>
          Jamil Ettel
        </h1>
        <OtherPageTitle
          title="WORK"
          className={`${rubikMonoOne.className} transition-work-title`}
        />
        <OtherPageTitle
          title="CONTACT"
          className={`${rubikMonoOne.className} transition-contact-title`}
        />
        <OtherPageTitle
          title="ABOUT"
          className={`${rubikMonoOne.className} transition-about-title`}
        />
        <div className="title-underscore" />
      </div>
      <h2 className="subtitle">A Full Stack developer</h2>
    </div>
  );
}

export default function Home() {
  return (
    <Layout className="main-content">
      <HomePageTitle />
      <div className="links">
        Choose a page...
        <br />
        <AnimatedLink transitionLength={2500} href="/work">
          {"> my_work"}
        </AnimatedLink>
        <br />
        <AnimatedLink transitionLength={2500} href="/contact">
          {"> contact"}
        </AnimatedLink>
        <br />
        <AnimatedLink transitionLength={2500} href="/about">
          {"> about"}
        </AnimatedLink>
      </div>
    </Layout>
  );
}
