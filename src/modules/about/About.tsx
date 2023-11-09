import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";
import "./About.scss";

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
      <div className="page-content"></div>
    </Layout>
  );
}
