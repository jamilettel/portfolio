"use client";
import Layout from "@/components/layout/Layout";
import AnimatedLink from "@/components/link/AnimatedLink";
import { rubikMonoOne, shareTechMono } from "@/utils/fonts";
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
    <>
      <div className="title-wrapper">
        <h1 className={`${rubikMonoOne.className} main-title`}>
          Jamil
          <br /> Ettel
        </h1>
        <h1 className={`${rubikMonoOne.className} main-title-animated`}>
          Jamil
          <br /> Ettel
        </h1>
        <OtherPageTitle
          title="WORK"
          className={`${rubikMonoOne.className} transition-title transition-work-title`}
        />
        <OtherPageTitle
          title="CONTACT"
          className={`${rubikMonoOne.className} transition-title transition-contact-title`}
        />
        <OtherPageTitle
          title="ABOUT"
          className={`${rubikMonoOne.className} transition-title transition-about-title`}
        />
        <OtherPageTitle
          title="BLOG"
          className={`${rubikMonoOne.className} transition-title transition-blog-title`}
        />
        <div className="title-underscore" />
      </div>
      <div className="subtitle-wrapper">
        <h2 className="subtitle">A Full Stack developer</h2>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Layout className="main-content">
      <HomePageTitle />
      <div className="content-mask" />
      <div className={`links ${shareTechMono.className}`}>
        <div className="erase-animation">Choose a page...</div>
        <AnimatedLink className="erase-animation" href="/work">
          {"> work"}
        </AnimatedLink>
        <br />
        <AnimatedLink className="erase-animation" href="/contact">
          {"> contact"}
        </AnimatedLink>
        <br />
        <AnimatedLink className="erase-animation" href="/about">
          {"> about"}
        </AnimatedLink>
        <br />
        <AnimatedLink className="erase-animation" href="/blog">
          {"> blog"}
        </AnimatedLink>
      </div>
    </Layout>
  );
}
