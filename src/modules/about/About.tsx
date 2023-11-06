import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";

export default function About() {
  return (
    <Layout className="work-content">
      <PageHeader
        nextPageHref="/work"
        nextPageTitle="WORK"
        previousPageHref="/contact"
        previousPageTitle="CONTACT"
        title="ABOUT"
        backgroundClassName="about-bg"
      />
    </Layout>
  );
}
