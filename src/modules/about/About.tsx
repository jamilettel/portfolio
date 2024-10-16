import PixelatedImage from "@/components/image/PixelatedImage";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";
import Link from "next/link";
import "./About.scss";
import moment from "moment";

export default function About() {
  return (
    <Layout className="about-content">
      <PageHeader
        nextPageHref="/work"
        nextPageTitle="WORK"
        previousPageHref="/contact"
        previousPageTitle="CONTACT"
        title="ABOUT"
        backgroundClassName="about-bg"
      />
      <div className="page-content">
        <div className="general-info">
          <PixelatedImage className="profile-photo" src="/jamil.jpeg" />
          <div className="stats">
            <h3>NAME:</h3>
            <p>JAMIL ETTEL</p>
            <h3>AGE:</h3>
            <p>{moment().diff(moment("16/04/2000", "DD/MM/YYYY"), "years")}</p>
            <h3>LOCATION:</h3>
            <p>NANTES, FRANCE</p>
            <h3>JOB EXPERIENCE:</h3>
            <p>3 YEARS</p>
            <h3>HOBBIES:</h3>
            <p>POWERLIFTING / COFFEE</p>
            <h3>EMPLOYER:</h3>
            <p>
              <Link
                className="white-link"
                href="https://molecular.paris"
                target="_blank"
              >
                MOLECULAR ↗
              </Link>
            </p>
          </div>
        </div>
        <div className="about-section">
          <h3>ABOUT</h3>
          <p>
            Hey! My name is Jamil Ettel. I&apos;m a software developer with 4
            years of experience. I love working on UI/UX and animations, but I
            am also good at backend and software development in general.
          </p>
          <p>
            You can checkout some of my work on my{" "}
            <Link
              className="white-link"
              href="https://www.github.com/jamilettel"
              target="_blank"
            >
              Github ↗
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
