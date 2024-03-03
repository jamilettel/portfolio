import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/page-header/PageHeader";
import "./Blog.scss";

export default function Blog() {
  return (
    <Layout className="blog-content">
      <PageHeader title="BLOG" backgroundClassName="blog-bg" />
      <div className="page-content"></div>
    </Layout>
  );
}
