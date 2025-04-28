import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import Features from "../components/Features";
import ResponsivePlayer from "../components/ResponsiveLazyPlayer";
import Reviews from "../components/Reviews";
import Stats from "../components/Stats";

function Header() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero bg-primary text-white text-center py-16 relative overflow-hidden">
      <div className="container">
        <h1 className="text-5xl font-bold">{siteConfig.title}</h1>
        <p className="text-2xl mt-4">{siteConfig.tagline}</p>
        <div className="flex justify-center mt-8">
          <Link className="btn btn-secondary btn-lg" to="/docs">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <Header />
      <main>
        <Features />
        <div className="container mt-16 text-center">
          <h1 className="text-4xl font-bold mb-8">Look at the chaos</h1>
          <ResponsivePlayer front={true} loopAfter={105} start={88} url="https://youtu.be/l8OQSRJtlXI" />
        </div>
        <div className="container mt-16 text-center">
          <h1 className="text-4xl font-bold mb-8">Stats we&apos;re proud of</h1>
          <Stats />
        </div>
        <div className="container mt-16 text-center">
          <h1 className="text-4xl font-bold mb-8">Reviews from big community owners</h1>
          <Reviews />
        </div>
      </main>
    </Layout>
  );
}
