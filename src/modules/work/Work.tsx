import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";

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
    </Layout>
  );
}
