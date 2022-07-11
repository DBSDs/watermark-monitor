import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import HomepageHeader from "../components/HomepageHeader";
import watermark from "../../../package/index";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  watermark.loadMark();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader watermark={watermark} />;
    </Layout>
  );
}
