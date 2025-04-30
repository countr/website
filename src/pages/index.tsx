import type { JSX } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import Features from "../components/Features";
import ResponsivePlayer from "../components/ResponsiveLazyPlayer";
import Reviews from "../components/Reviews";
import Stats from "../components/Stats";

function AnimateOnScroll({ children, className = "", threshold = 0.1, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; threshold?: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div
      className={`transition-opacity duration-700 ease-in-out ${className} ${inView ? "opacity-100" : "opacity-0"}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}


function Header(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="relative isolate overflow-hidden min-h-screen flex items-center py-16 md:py-24 duration-300 ease-in-out">
      <div className="container mx-auto px-4 grid md:grid-cols-2 md:gap-12 lg:gap-20 items-center">
        <div className="text-center md:text-left mb-12 md:mb-0">
          <h1 className="mb-5 text-4xl font-bold text-content md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-12 duration-1000 duration-300 ease-in-out">
            {siteConfig.title}
          </h1>
          <p className="mb-10 text-lg text-content-secondary md:text-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 duration-300 ease-in-out">
            {siteConfig.tagline}
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            <Link
              className={"button button--primary button--lg inline-block transform rounded-lg px-8 py-3 font-semibold shadow-lg transition duration-300 ease-in-out hover:scale-105"}
              to="/docs"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="animate-in fade-in zoom-in-90 duration-1000 delay-500 relative">
          <Tilt
            className="dark:[&>.glare-wrapper]:hidden!"
            glareEnable={true}
            glareMaxOpacity={0.45}
            gyroscope={true}
            perspective={1000}
            scale={1}
          >
            <div className="overflow-hidden rounded-xl shadow-2xl shadow-black/50">
              <ResponsivePlayer front={true} loopAfter={105} start={88} url="https://youtu.be/l8OQSRJtlXI" />
            </div>
            <div className="absolute inset-0 z-10 bg-transparent" />
          </Tilt>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      description={siteConfig.tagline}
      wrapperClassName={
        "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px] duration-300 ease-in-out"
      }
    >
      <Header />
      <main className={"relative z-0 text-content duration-300 ease-in-out"}>
        <section className="py-20 md:py-28 duration-300 ease-in-out">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="animate-in fade-in slide-in-from-bottom-10 duration-500">
              <h2 className={"mb-16 text-center text-3xl font-bold text-content md:text-4xl duration-300 ease-in-out"}>Why Choose Countr?</h2>
            </AnimateOnScroll>
            <Features />
          </div>
        </section>

        <section className="relative py-20 md:py-28 duration-300 ease-in-out">
          <div className="container mx-auto px-4 text-center">
            <AnimateOnScroll className="animate-in fade-in slide-in-from-bottom-10 duration-500">
              <h2 className={"mb-16 text-center text-3xl font-bold text-content md:text-4xl duration-300 ease-in-out"}>Stats We&apos;re Proud Of</h2>
            </AnimateOnScroll>
            <Stats />
          </div>
        </section>

        <section className={"relative py-20 md:py-28 overflow-hidden duration-300 ease-in-out"}>
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="animate-in fade-in slide-in-from-bottom-10 duration-500">
              <h2 className={"mb-16 text-center text-3xl font-bold text-content md:text-4xl duration-300 ease-in-out"}>Loved by Communities</h2>
            </AnimateOnScroll>
            <Reviews />
          </div>
        </section>
      </main>
    </Layout>
  );
}
