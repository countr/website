import Link from "@docusaurus/Link";
import React from "react";
import type { APIStats } from "../../functions/api/stats";
import styles from "./Stats.module.css";

interface Stat {
  count: null | number;
  link?: string;
  title: string;
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
      });
  }

  override render(): JSX.Element {
    const { stats } = this.state;
    if (!stats.length) return <div>Loading ...</div>;

    return (
      <div className={styles.stats}>
        {stats
          .map((stat, index) => <div className={styles.stat} key={index}>
            <h2>{stat.title}{stat.link ? <Link to={stat.link}>*</Link> : ""}</h2>
            <p>{stat.count === null ? <i>Error loading statistics</i> : stat.count.toLocaleString("en-US")}</p>
            {/* eslint-disable-next-line @stylistic/jsx/jsx-closing-tag-location */}
          </div>)}
      </div>
    );
  }
}
