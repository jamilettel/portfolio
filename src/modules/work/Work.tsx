import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";
import "./Work.scss";
import PixelatedImage from "@/components/image/PixelatedImage";
import Link from "next/link";

function PortfolioProject() {
  return (
    <>
      <h2>My portfolio website</h2>
      <div className="project">
        <PixelatedImage src="/jamil-ettel.png" />
        <div className="project-description">
          <h3>RESPONSIBILITIES:</h3>
          <p>Development / Design / Animations</p>
          <h3>TECH STACK:</h3>
          <p>NextJS</p>
          <h3>FEATURES:</h3>
          <p>
            • Animated page transitions
            <br />
            • 🚧 Fake terminal for navigation 🚧
            <br />
            • Slick retro design
            <br />
          </p>
          <h3>SPECIAL THANKS TO:</h3>
          <Link
            className="white-link"
            href="https://matthiscoulon.com/"
            target="_blank"
          >
            Matthis COULON ↗
          </Link>
          <br />
          <Link
            className="white-link"
            href="https://sebastienvassant.com/"
            target="_blank"
          >
            Sébastien VASSANT ↗
          </Link>
          <br />
          <br />

          <Link href="https://jamilettel.com" target="_blank">
            VISIT WEBSITE ↗
          </Link>
        </div>
      </div>
    </>
  );
}

function MinistudioProject() {
  return (
    <>
      <h2>Ministudio</h2>
      <div className="project">
        <PixelatedImage src="/ministudio.png" />
        <div className="project-description">
          <h3>RESPONSIBILITIES:</h3>
          <p>Full stack developer</p>
          <h3>TECH STACK:</h3>
          <p>
            React / Firebase
            <br /> ChatGPT / Midjourney / Stable Diffusion
          </p>
          <h3>FEATURES:</h3>
          <p>
            • AI image generation
            <br />
            • Chat interface
            <br />• Webtoon viewing interface
          </p>

          <Link href="https://ministudio.ai" target="_blank">
            VISIT WEBSITE ↗
          </Link>
        </div>
      </div>
    </>
  );
}

export default function About() {
  return (
    <Layout className="work-content">
      <PageHeader
        nextPageHref="/contact"
        nextPageTitle="CONTACT"
        previousPageHref="/about"
        previousPageTitle="ABOUT"
        title="WORK"
        backgroundClassName="work-bg"
      />
      <div className="page-content">
        <PortfolioProject />
        <MinistudioProject />
        <h2>E-norela</h2>
        <h2>Olympus - UNRELEASED</h2>
        <h2>{"Graines d'ici"}</h2>
      </div>
    </Layout>
  );
}
