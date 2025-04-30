/* eslint-disable @stylistic/jsx/jsx-closing-tag-location */
/* eslint-disable no-nested-ternary */
import type { JSX } from "react";
import Link from "@docusaurus/Link";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import type { APIStats } from "../../functions/api/stats";

interface Stat {
  count: null | number;
  link?: string;
  title: string;
}

function StatItem({ stat, index }: { index: number; stat: Stat }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // remove transition-colors
    <div
      className={`
        flex transform flex-col items-center justify-center rounded-lg border border-emphasis-300 bg-background-surface p-6 shadow-sm dark:shadow-md
        transition duration-300 ease-in-out hover:bg-emphasis-100
        ${inView ? "animate-in fade-in slide-in-from-bottom-5 duration-500" : "opacity-0"}
      `}
      ref={ref}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* remove transition-colors */}
      <h3 className={"mb-2 text-base font-medium text-content-secondary duration-300 ease-in-out"}>
        {stat.title}
        {/* add dark mode hover color for link */}
        {stat.link ? <Link className={"ml-1 text-countr-red hover:text-countr-red/80 dark:hover:text-countr-red/70"} to={stat.link}>*</Link> : ""}
      </h3>
      {/* count color should be fine if it's an accent */}
      <p className={"text-4xl font-bold text-countr-red md:text-5xl"}>
        {/* remove transition-colors */}
        {stat.count === null ?
          <span className={"text-xl text-content-secondary duration-300 ease-in-out"}>N/A</span> :
          inView ? <CountUp duration={2.5} end={stat.count} separator="," /> : "0"}
      </p>
    </div>
  );
}

export default class Stats extends React.Component<Record<string, never>, { stats: Stat[] }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      stats: [],
    };
  }

  override componentDidMount(): void {
    void fetch("/api/stats")
      .then(res => res.json<APIStats>())
      .then(stats => {
        this.setState({
          stats: [
            {
              title: "Bot Ranking",
              count: stats.ranking,
              link: "https://topstats.gg/discord/bots/467377486141980682",
            },
            {
              title: "Server Count",
              count: stats.guilds,
            },
            {
              title: "User Count",
              count: stats.users,
            },
            {
              title: "Counts this week",
              count: stats.count,
            },
          ],
        });
      })
      .catch(() => {
        this.setState({
          stats: [
            { title: "Bot Ranking", count: null, link: "https://topstats.gg/discord/bots/467377486141980682" },
            { title: "Server Count", count: null },
            { title: "User Count", count: null },
            { title: "Counts this week", count: null },
          ],
        });
      });
  }

  override render(): JSX.Element {
    const { stats } = this.state;

    // remove transition-colors
    if (!stats.length) {
      return (
        <div className={"grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4 text-content-secondary duration-300 ease-in-out"}>
          {Array(4).fill(true)
            .map((_, index) => <>
              <div className="animate-pulse rounded-lg border border-emphasis-300 bg-background-surface p-6 shadow-sm dark:shadow-md duration-300 ease-in-out" key={index}>
                <div className="mb-2 h-5 w-3/4 mx-auto rounded bg-emphasis-200 dark:bg-emphasis-700 duration-300 ease-in-out" />
                <div className="h-10 w-1/2 mx-auto rounded bg-emphasis-200 dark:bg-emphasis-700 duration-300 ease-in-out" />
              </div>
            </>)}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => <StatItem index={index} key={index} stat={stat} />)}
      </div>
    );
  }
}
