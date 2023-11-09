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
        <div className="project-overview">
          <h3>RESPONSIBILITIES:</h3>
          <p>Development / Design / Animations</p>
          <h3>TECH STACK:</h3>
          <p>NextJS</p>
          <h3>MAIN WORK:</h3>
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
          <br />
          <Link href="https://github.com/jamilettel/portfolio" target="_blank">
            SOURCE CODE ↗
          </Link>
        </div>
        <div className="project-description">
          <h3>DESCRIPTION</h3>
          <p>
            You are currently viewing this website, say hi! I wanted to create
            something to demonstrate my technical skills as well as my previous
            work. You {"don't"} see animated page transitions very often, so I
            added them using a system I developed from scratch. I also
            experimented with different ways to change pages.
            {"\n"}The goal was to create a website that felt like using an
            application. Something unique, but still easy to use.
          </p>
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
        <div className="project-overview">
          <h3>RESPONSIBILITIES:</h3>
          <p>Full stack developer</p>
          <h3>TECH STACK:</h3>
          <p>
            React / Firebase
            <br /> ChatGPT / Midjourney / Stable Diffusion
          </p>
          <h3>MAIN WORK:</h3>
          <p>
            • AI image generation
            <br />
            • Chat interface
            <br />• Webtoon viewing interface
          </p>
          <h3>INVOLVMENT:</h3>
          <p>2023</p>

          <Link href="https://ministudio.ai" target="_blank">
            VISIT WEBSITE ↗
          </Link>
        </div>
        <div className="project-description">
          <h3>DESCRIPTION</h3>
          <p>
            Ministudio is a web application that allows children to create
            magical characters. Children will upload a drawing to the app, or
            use the integrated drawing tool. This drawing will then be used to
            generate an image using AI. They can then chat with them, or create
            pre-configured stories with them.
          </p>
        </div>
      </div>
    </>
  );
}

function NorelaProject() {
  return (
    <>
      <h2>Norela</h2>
      <div className="project">
        <PixelatedImage src="/norela.png" />
        <div className="project-overview">
          <h3>RESPONSIBILITIES:</h3>
          <p>Full stack developer</p>
          <h3>TECH STACK:</h3>
          <p>React / Django / Hasura / PostgreSQL</p>
          <h3>MAIN WORK:</h3>
          <p>
            • Added preselection presets for different scenarios
            <br />• Cleanup of the codebase
            <br />• Payment & Quotes
            <br />• Database design & frontend implementation
          </p>
          <h3>INVOLVMENT:</h3>
          <p>2023</p>

          <Link href="https://app.e-norela.com/" target="_blank">
            VISIT WEBSITE ↗
          </Link>
        </div>
        <div className="project-description">
          <h3>DESCRIPTION</h3>
          <p>
            E-norela is an event staff booking platform. It suggests a staff
            configuration for your event based on an onboarding questionnaire.
            Your are then able to change the configuration based on your needs.
          </p>
        </div>
      </div>
    </>
  );
}

function OlympusProject() {
  return (
    <>
      <h2>Olympus - UNRELEASED</h2>
      <div className="project">
        <PixelatedImage src="/olympus.png" />
        <div className="project-overview">
          <h3>RESPONSIBILITIES:</h3>
          <p>Full stack developer / Devops / </p>
          <h3>TECH STACK:</h3>
          <p>
            React-Native / Django / Hasura / PostgreSQL <br />
            AWS / Terraform
          </p>
          <h3>MAIN WORK:</h3>
          <p>
            • Main developer for the project
            <br />• Database design
            <br />• Brainstorming & User testing
          </p>
          <h3>INVOLVMENT:</h3>
          <p>2023</p>
        </div>
        <div className="project-description">
          <h3>DESCRIPTION</h3>
          <p>
            Olympus is an educational application for high school mathematics.
            {" It's"} a gamified learning application that prompts students to
            practice a bit of math every day. The goal is to make math fun and
            simple.
            <br />
            As I stopped working on this project, we were in the process of
            adding user statistics and new exercise types to encourage the users
            to practice more.
          </p>
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
        <NorelaProject />
        <OlympusProject />
        <h2>{"Graines d'ici"}</h2>
      </div>
    </Layout>
  );
}
