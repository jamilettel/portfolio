import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";
import "./Contact.scss";

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
    </Layout>
  );
}
