import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import watermark from "watermark-monitor";

import styles from "./index.module.css";

function HomepageHeader(props) {
  console.log(props, props.input);
  const { siteConfig } = useDocusaurusContext();
  const [on, setOn] = React.useState<boolean>(true);
  React.useEffect(() => {
    watermark.loadMark();
  }, []);
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            onClick={(e) => {
              if (on) {
                watermark.removeMark();
              } else {
                watermark.loadMark({ watermark_txt: props.input } as any);
              }
              setOn(!on);
            }}
          >
            {on ? "移除水印" : "添加水印"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [input, setInput] = React.useState<string>("");
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader input={input} />
      <main>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <label>请输入水印内容：</label>
          <input
            className={styles.input}
            onChange={(e) => setInput(e.target["value"])}
          />
        </div>
      </main>
    </Layout>
  );
}
