import ImageDocs from "@site/assets/features/docs.svg";
import ImageFlows from "@site/assets/features/flows.svg";
import ImageFree from "@site/assets/features/free.svg";
import ImageSetup from "@site/assets/features/setup.svg";
import ImageSupport from "@site/assets/features/support.svg";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./Features.module.css";

interface FeatureItem {
  title: string;
  svg: JSX.Element;
  description: JSX.Element;
  size: number;
}

const FeatureList: FeatureItem[] = [
  {
    title: "Instant setup",
    svg: <ImageSetup xlinkTitle="test" />,
    description: <>Get started right away by adding the bot and setting it up. You can easily create a new counting channel, or use a channel you already have. <Link to="/docs">Read more on how to set it up here</Link>.</>,
    size: 4,
  },
  {
    title: "Customize your channel",
    svg: <ImageFlows xlinkTitle="test" />,
    description: <>We have even made it possible for you to customize how the counting works. Set up rewards, milestones, goals and more with flows. <Link to="/docs/features/flows">Read more on flows here</Link>.</>,
    size: 4,
  },
  {
    title: "Helpdesk server",
    svg: <ImageSupport xlinkTitle="test" />,
    description: <>We have super-great, super-friendly support members available on our support server that can assist you in anything you need. <Link to="https://promise.solutions/discord">Get support here</Link>.</>,
    size: 4,
  },
  {
    title: "Well documented",
    svg: <ImageDocs xlinkTitle="test" />,
    description: <>The documentation is up-to-date, and we will keep it that way. We also now have a Posts-tab that we regularly post articles on. <Link to="/docs">Read the docs here</Link>.</>,
    size: 6,
  },
  {
    title: "Completely free",
    svg: <ImageFree xlinkTitle="test" />,
    description: <>We believe in free and open-source services with no ads. We also believe in a &quot;pay-whatever-you-want&quot;-model which has worked pretty well, starting from just $1/month. <Link to="/docs/premium">Read more on Premium here</Link>.</>,
    size: 6,
  },
];

function Feature({ title, svg, description, size }: FeatureItem) {
  return (
    <div className={`col col--${size}`}>
      <div className={clsx("text--center", styles["featureSvg"])}>
        {svg}
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features(): JSX.Element {
  return (
    <section className={styles["features"]}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, index) => <Feature key={index} {...props} />)}
        </div>
      </div>
    </section>
  );
}
