import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";
import "./Work.scss";

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
        <h2>My portfolio website</h2>
        <h2>Ministudio</h2>
        <h2>E-norela</h2>
        <h2>Olympus</h2>
        <h2>{"Graines d'ici"}</h2>
      </div>
    </Layout>
  );
}
