import React, { useEffect } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader(props) {
  const { watermark } = props;
  const { siteConfig } = useDocusaurusContext();
  const [on, setOn] = React.useState<boolean>(true);
  const [input, setInput] = React.useState<string>("测试水印");

  return (
    <>
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
                  watermark.loadMark({ watermark_txt: input });
                }
                setOn(!on);
              }}
            >
              {on ? "移除水印" : "添加水印"}
            </Link>
          </div>
        </div>
      </header>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <label>请输入水印内容：</label>
        <input
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target["value"])}
        />
      </div>
    </>
  );
}

export default HomepageHeader;
