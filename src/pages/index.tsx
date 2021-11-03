import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Features from "../components/Features";
import ResponsivePlayer from "../components/ResponsiveLazyPlayer";
import Stats from "../components/Stats";
import Reviews from "../components/Reviews";

function Header() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description={`${siteConfig.tagline}`}>
      <Header />
      <main>
        <Features />
        <div className={["container", styles.spaceAbove, styles.center].join(" ")}>
          <h1 className={styles.center}>Look at the chaos</h1>
          <ResponsivePlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>
        <div className={["container", styles.spaceAbove, styles.center].join(" ")}>
          <h1 className={styles.center}>Stats we're proud of</h1>
          <Stats />
        </div>
        <div className={["container", styles.spaceAbove, styles.center].join(" ")}>
          <h1 className={styles.center}>Reviews from big community owners</h1>
          <Reviews />
        </div>
      </main>
    </Layout>
  );
}
