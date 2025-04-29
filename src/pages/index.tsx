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

// create a simple wrapper component for scroll animations
function AnimateOnScroll({ children, className = "", threshold = 0.1, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; threshold?: number }) { // added delay and threshold types
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
    // remove transition-colors
    <header className={"relative isolate overflow-hidden bg-background min-h-screen flex items-center py-16 md:py-24 duration-300 ease-in-out"}>
      {/* background Effect Layer */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        {/* subtle Radial Gradients */}
        <div className="absolute left-[calc(50%-10rem)] top-1/2 -translate-y-1/2 transform-gpu blur-3xl sm:left-[calc(50%-30rem)]">
          <div
            className="aspect-[1155/678] w-[50rem] bg-gradient-radial from-discord-blurple/30 via-discord-pink/10 to-transparent opacity-40 sm:w-[72.1875rem]"
          />
        </div>
        <div className="absolute right-[calc(50%-15rem)] top-1/2 -translate-y-1/2 transform-gpu blur-3xl sm:right-[calc(50%-35rem)]">
          <div
            className="aspect-[1155/678] w-[50rem] bg-gradient-radial from-discord-green/20 via-countr-red/10 to-transparent opacity-30 sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* content Grid */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 md:gap-12 lg:gap-20 items-center">
        {/* text Content Column */}
        <div className="text-center md:text-left mb-12 md:mb-0">
          {/* remove transition-colors */}
          <h1 className="mb-5 text-4xl font-bold text-content md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-12 duration-1000 duration-300 ease-in-out">
            {siteConfig.title}
          </h1>
          {/* remove transition-colors */}
          <p className="mb-10 text-lg text-content-secondary md:text-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 duration-300 ease-in-out">
            {siteConfig.tagline}
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            <Link
              // adjust button style if needed for contrast, using primary button style
              className={"button button--primary button--lg inline-block transform rounded-lg px-8 py-3 font-semibold shadow-lg transition duration-300 ease-in-out hover:scale-105"}
              to="/docs"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* video Player Column */}
        <div className="animate-in fade-in zoom-in-90 duration-1000 delay-500 relative"> {/* add relative positioning here if needed, though Tilt might handle it */}
          {/* wrap the video container with Tilt */}
          <Tilt
            className="dark:[&>.glare-wrapper]:hidden!"
            glareEnable={true}
            glareMaxOpacity={0.45}
            gyroscope={true}
            perspective={500}
            scale={1.02}
          >
            {/* video wrapper */}
            <div className="overflow-hidden rounded-xl shadow-2xl shadow-black/50">
              <ResponsivePlayer front={true} loopAfter={105} start={88} url="https://youtu.be/l8OQSRJtlXI" />
            </div>
            {/* transparent overlay to capture mouse events */}
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
      // remove transition-colors
      wrapperClassName={"bg-background duration-300 ease-in-out"}
    >
      <Header />
      {/* remove transition-colors */}
      <main className={"relative z-0 text-content duration-300 ease-in-out"}>
        {/* remove transition-colors */}
        <section className="bg-background py-20 md:py-28 duration-300 ease-in-out">
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="animate-in fade-in slide-in-from-bottom-10 duration-500">
              {/* remove transition-colors */}
              <h2 className={"mb-16 text-center text-3xl font-bold text-content md:text-4xl duration-300 ease-in-out"}>Why Choose Countr?</h2>
            </AnimateOnScroll>
            <Features /> {/* features component itself handles its internal animations */}
          </div>
        </section>

        {/* remove transition-colors */}
        <section className="relative bg-background py-20 md:py-28 duration-300 ease-in-out">
          <div className="container mx-auto px-4 text-center">
            <AnimateOnScroll className="animate-in fade-in slide-in-from-bottom-10 duration-500">
              {/* remove transition-colors */}
              <h2 className={"mb-16 text-center text-3xl font-bold text-content md:text-4xl duration-300 ease-in-out"}>Stats We&apos;re Proud Of</h2>
            </AnimateOnScroll>
            <Stats />
          </div>
        </section>

        {/* remove transition-colors */}
        <section className={"relative bg-background py-20 md:py-28 overflow-hidden duration-300 ease-in-out"}>
          <div className="container mx-auto px-4">
            <AnimateOnScroll className="animate-in fade-in slide-in-from-bottom-10 duration-500">
              {/* remove transition-colors */}
              <h2 className={"mb-16 text-center text-3xl font-bold text-content md:text-4xl duration-300 ease-in-out"}>Loved by Communities</h2>
            </AnimateOnScroll>
            <Reviews />
          </div>
        </section>
      </main>
    </Layout>
  );
}
