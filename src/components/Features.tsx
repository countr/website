import type { JSX } from "react";
import Link from "@docusaurus/Link";
import ImageDocs from "@site/assets/features/docs.svg";
import ImageFlows from "@site/assets/features/flows.svg";
import ImageFree from "@site/assets/features/free.svg";
import ImageSetup from "@site/assets/features/setup.svg";
import ImageSupport from "@site/assets/features/support.svg";
import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";

interface FeatureItem {
  description: JSX.Element;
  svg: JSX.Element;
  title: string;
}

// helper function or constant for link classes
const linkClasses = "text-countr-red hover:text-countr-red/80 dark:hover:text-countr-red/70 font-medium";

// use Tailwind color classes in Link components
const FeatureList: FeatureItem[] = [
  {
    title: "Instant Setup",
    svg: <ImageSetup xlinkTitle="Instant setup" />,
    description: <>Getting started with Countr is easy! Simply add the bot to your server and follow our <Link className={linkClasses} to="/docs">step-to-step guide</Link> to set it up. You can create a new counting channel or use an existing one.</>,
  },
  {
    title: "Customize Your Channel",
    svg: <ImageFlows xlinkTitle="Image flows" />,
    description: <>Customize how the counting works with <Link className={linkClasses} to="/docs/features/flows">Countr{"'"}s flows</Link>, including rewards, milestones, goals, and more. The possibilities are endless!</>,
  },
  {
    title: "Helpdesk Server",
    svg: <ImageSupport xlinkTitle="Helpdesk server" />,
    description: <>Our support team is here to help you with anything you need! Join our <Link className={linkClasses} to="https://promise.solutions/discord">super-friendly support server</Link> and get the assistance you need to make the most of Countr.</>,
  },
  {
    title: "Well Documented",
    svg: <ImageDocs xlinkTitle="Well documented" />,
    description: <>Our documentation is always up-to-date and easy to follow, so you can get started with Countr in no time! Plus, check out our Posts-tab for regular articles and updates. <Link className={linkClasses} to="/docs">Read the docs here</Link> and start counting like a pro!</>,
  },
  {
    title: "Completely Free",
    svg: <ImageFree xlinkTitle="Completely free" />,
    description: <>At Promise Solutions, we believe in providing free and open-source services without any ads. We also offer a {"\""}pay-what-you-want{"\""} model, starting from just $1/month, so you can support us and get access to premium features. <Link className={linkClasses} to="/docs/premium">Read more about our premium features here</Link> and take your counting experience to the next level!</>,
  },
];

// redesigned Feature component for alternating layout
function Feature({ title, svg, description, isReversed }: { isReversed: boolean } & FeatureItem) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // trigger animation when 20% is visible
  });

  return (
    // remove transition-colors
    <div
      className={clsx(
        "md:grid md:grid-cols-2 md:items-center md:gap-8 lg:gap-16",
        "transition-opacity duration-700 ease-in-out", // apply animation classes here
        "duration-300 ease-in-out", // remove color transition
        inView ? "opacity-100" : "opacity-0",
      )}
      ref={ref}
    >
      {/* sVG Illustration Column */}
      <div
        className={clsx(
          "mb-6 md:mb-0 flex justify-center",
          // apply order based on isReversed for medium screens and up
          isReversed ? "md:order-last" : "",
          // add slide-in animation based on position
          inView ? isReversed ? "animate-in slide-in-from-right-10" : "animate-in slide-in-from-left-10" : "",
          "duration-700", // match duration
        )}
        style={{ animationDelay: "150ms" }} // slight delay for image
      >
        {React.cloneElement(svg, { className: "h-48 w-auto md:h-64 lg:h-72 text-countr-red" })} {/* larger SVG */}
      </div>

      {/* text Content Column */}
      <div
        className={clsx(
          "text-center md:text-left",
          // add slide-in animation based on position
          inView ? isReversed ? "animate-in slide-in-from-left-10" : "animate-in slide-in-from-right-10" : "",
          "duration-700", // match duration
        )}
        style={{ animationDelay: "50ms" }} // slight delay for text
      >
        {/* remove transition-colors */}
        <h3 className={"mb-3 text-2xl font-bold text-content md:text-3xl duration-300 ease-in-out"}>{title}</h3>
        {/* remove transition-colors */}
        <p className={"text-lg text-content-secondary leading-relaxed duration-300 ease-in-out"}>{description}</p>
      </div>
    </div>
  );
}

export default function Features(): JSX.Element {
  return (
    // use a simple div with vertical spacing instead of a grid
    <div className="space-y-16 md:space-y-24">
      {FeatureList.map((props, index) => <Feature
        key={index}
        {...props}
        // alternate layout based on index
        isReversed={index % 2 !== 0}
                                         />)}
    </div>
  );
}
