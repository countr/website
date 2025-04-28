import Link from "@docusaurus/Link";
import ImageDocs from "@site/assets/features/docs.svg";
import ImageFlows from "@site/assets/features/flows.svg";
import ImageFree from "@site/assets/features/free.svg";
import ImageSetup from "@site/assets/features/setup.svg";
import ImageSupport from "@site/assets/features/support.svg";
import React from "react";

interface FeatureItem {
  description: JSX.Element;
  size: number;
  svg: JSX.Element;
  title: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: "Instant Setup",
    svg: <ImageSetup xlinkTitle="Instant setup" />,
    description: <>Getting started with Countr is easy! Simply add the bot to your server and follow our <Link to="/docs">step-to-step guide</Link> to set it up. You can create a new counting channel or use an existing one.</>,
    size: 4,
  },
  {
    title: "Customize Your Channel",
    svg: <ImageFlows xlinkTitle="Image flows" />,
    description: <>Customize how the counting works with <Link to="/docs/features/flows">Countr{"'"}s flows</Link>, including rewards, milestones, goals, and more. The possibilities are endless!</>,
    size: 4,
  },
  {
    title: "Helpdesk Server",
    svg: <ImageSupport xlinkTitle="Helpdesk server" />,
    description: <>Our support team is here to help you with anything you need! Join our <Link to="https://promise.solutions/discord">super-friendly support server</Link> and get the assistance you need to make the most of Countr.</>,
    size: 4,
  },
  {
    title: "Well Documented",
    svg: <ImageDocs xlinkTitle="Well documented" />,
    description: <>Our documentation is always up-to-date and easy to follow, so you can get started with Countr in no time! Plus, check out our Posts-tab for regular articles and updates. <Link to="/docs">Read the docs here</Link> and start counting like a pro!</>,
    size: 6,
  },
  {
    title: "Completely Free",
    svg: <ImageFree xlinkTitle="Completely free" />,
    description: <>At Promise Solutions, we believe in providing free and open-source services without any ads. We also offer a {"\""}pay-what-you-want{"\""} model, starting from just $1/month, so you can support us and get access to premium features. <Link to="/docs/premium">Read more about our premium features here</Link> and take your counting experience to the next level!</>,
    size: 6,
  },
];

function Feature({ title, svg, description, size }: FeatureItem) {
  return (
    <div className={`col col--${size} text-center p-4`}>
      <div className="flex justify-center mb-4">
        {svg}
      </div>
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function Features(): JSX.Element {
  return (
    <section className="flex flex-wrap justify-center py-8 w-full">
      <div className="container">
        <div className="flex flex-wrap">
          {FeatureList.map((props, index) => <Feature key={index} {...props} />)}
        </div>
      </div>
    </section>
  );
}
