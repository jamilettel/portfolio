import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";
import "./Contact.scss";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout className="contact-content">
      <PageHeader
        nextPageHref="/about"
        nextPageTitle="ABOUT"
        previousPageHref="/work"
        previousPageTitle="WORK"
        title="CONTACT"
        backgroundClassName="contact-bg"
      />
      <div className="page-content">
        <div className="email-container">
          <Link className="white" href="mailto:etteljamil267@gmail.com">
            <h2>EMAIL:</h2>
          </Link>
          <Link href="mailto:etteljamil267@gmail.com">
            etteljamil267@gmail.com
          </Link>
        </div>
        <Link
          className="white"
          href="https://www.linkedin.com/in/jamil-ettel"
          target="_blank"
        >
          <h2>LINKEDIN ↗</h2>
        </Link>
      </div>
    </Layout>
  );
}
