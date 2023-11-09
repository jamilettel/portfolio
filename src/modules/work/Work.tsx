import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";
import "./Work.scss";
import PixelatedImage from "@/components/image/PixelatedImage";
import Link from "next/link";

function Project({
  title,
  imageUrl,
  responsibilities,
  techStack,
  mainWork,
  extraSection,
  links,
  description,
  involvment,
}: {
  title: string;
  imageUrl: string;
  responsibilities: string;
  techStack: string;
  mainWork: string[];
  extraSection?: React.ReactNode;
  links?: { name: string; url: string }[];
  description: string;
  involvment?: string;
}) {
  return (
    <>
      <h2>
        <span>{"> "}</span>
        {title}
      </h2>
      <div className="project">
        <PixelatedImage src={imageUrl} />
        <div className="project-overview">
          <h3>RESPONSIBILITIES:</h3>
          <p>{responsibilities}</p>
          <h3>TECH STACK:</h3>
          <p>{techStack}</p>
          <h3>MAIN WORK:</h3>
          <p>{mainWork.map((work, i) => `• ${work}\n`)}</p>
          {involvment && (
            <>
              <h3>INVOLVMENT:</h3>
              <p>{involvment}</p>
            </>
          )}
          {extraSection}
          {links?.map((link) => (
            <div key={link.url}>
              <Link href={link.url} target="_blank">
                {link.name} ↗
              </Link>
            </div>
          ))}
        </div>
        <div className="project-description">
          <h3>DESCRIPTION</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

function PortfolioProject() {
  return (
    <Project
      title="My portfolio website"
      description={
        "You are currently viewing this website, say hi! I wanted to create something to demonstrate my technical skills as well as my previous work. You don't see animated page transitions very often, so I added them using a system I developed from scratch. I also experimented with different ways to change pages. \nThe goal was to create a website that felt like using an application. Something unique, but still easy to use."
      }
      imageUrl="/jamil-ettel.png"
      mainWork={[
        "Animated page transitions",
        "🚧 Fake terminal for navigation 🚧",
        "Slick retro design",
      ]}
      responsibilities="Development / Design / Animations"
      techStack="NextJS"
      links={[
        {
          name: "VISIT WEBSITE",
          url: "https://jamilettel.com",
        },
        {
          name: "SOURCE CODE",
          url: "https://github.com/jamilettel/portfolio",
        },
      ]}
      extraSection={
        <>
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
        </>
      }
    />
  );
}

function MinistudioProject() {
  return (
    <Project
      imageUrl="/ministudio.png"
      mainWork={[
        "AI image generation",
        "Chat interface",
        "Webtoon viewing interface",
      ]}
      responsibilities="Full stack developer"
      techStack={"React / Firebase\nChatGPT / Midjourney / Stable Diffusion"}
      title="Ministudio"
      links={[
        {
          name: "VISIT WEBSITE",
          url: "https://ministudio.ai",
        },
      ]}
      involvment="2023"
      description="Ministudio is a web application that allows children to create magical characters. Children will upload a drawing to the app, or use the integrated drawing tool. This drawing will then be used to generate an image using AI. They can then chat with them, or create pre-configured stories with them."
    />
  );
}

function NorelaProject() {
  return (
    <Project
      title="E-norela"
      imageUrl="/norela.png"
      responsibilities="Full stack developer"
      techStack="React / Django / Hasura / PostgreSQL"
      mainWork={[
        "Added preselection presets for different scenarios",
        "Cleanup of the codebase",
        "Payment & Quotes",
        "Database design & frontend implementation",
      ]}
      involvment="2023"
      links={[
        {
          name: "VISIT WEBSITE",
          url: "https://app.e-norela.com/",
        },
      ]}
      description="E-norela is an event staff booking platform. It suggests a staff configuration for your event based on an onboarding questionnaire. Your are then able to change the configuration based on your needs."
    />
  );
}

function OlympusProject() {
  return (
    <Project
      title="Olympus - UNRELEASED"
      imageUrl="/olympus.png"
      responsibilities="Full stack developer / Devops"
      techStack={"React-Native / Django / Hasura / PostgreSQL\nAWS / Terraform"}
      mainWork={[
        "Main developer for the project",
        "Database design",
        "Brainstorming & User testing",
      ]}
      involvment="2023"
      description={
        "Olympus is an educational application for high school mathematics. It's a gamified learning application that prompts students to practice a bit of math every day. The goal is to make math fun and simple.\nAs I stopped working on this project, we were in the process of adding user statistics and new exercise types to encourage the users to practice more."
      }
    />
  );
}

function GrainesdiciProject() {
  return (
    <Project
      title="Graines d'ici"
      imageUrl="/grainesdici.png"
      responsibilities="Full stack developer"
      techStack="WordPress / WooCommerce / MySQL"
      mainWork={[
        "Store page section menu",
        "Admin tools for deliveries",
        "General design improvements & bug fixes",
      ]}
      involvment="2021"
      links={[
        {
          name: "VISIT WEBSITE",
          url: "https://www.grainesdici.fr/",
        },
      ]}
      description={
        "Graines d'ici is a local organic food delivery service. They deliver fresh vegetables and fruits to their customers every day. Their storefront was starting to show its age, so I, alongside a team of 4 other developers, was tasked with improving it, as well as adding new features."
      }
    />
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
        <NorelaProject />
        <OlympusProject />
        <GrainesdiciProject />
      </div>
    </Layout>
  );
}
