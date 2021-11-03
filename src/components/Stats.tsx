import Link from "@docusaurus/Link";
import React from "react";
import styles from "./Stats.module.css";

interface Stat {
  title: string;
  count: number;
  link?: string;
}

export default class Stats extends React.Component<Record<string, never>, { stats: Array<Stat>; }> {
  constructor(props) {
    super(props);
    this.state = {
      stats: []
    };
  }

  componentDidMount() {
    fetch("https://countr-splash-stats.promise.workers.dev/")
      .then(res => res.json())
      .then(stats => {
        this.setState({
          stats: [
            {
              title: "Bot Ranking",
              count: stats.server_count_rank,
              link: "https://dblstatistics.com/bot/467377486141980682"
            },
            {
              title: "Server Count",
              count: stats.server_count
            },
            {
              title: "User Count",
              count: stats.users
            },
            {
              title: "Counts this week",
              count: stats.count
            }
          ]
        });
      });
  }

  render() {
    const { stats } = this.state;
    if (!stats.length) return (<div>Loading ...</div>);

    return (
      <div className={styles.stats}>
        {stats.map(stat => (
          <div className={styles.stat}>
            <h2>{stat.title}{stat.link ? <Link to={stat.link}>*</Link> : ""}</h2>
            <p>{stat.count.toLocaleString("en-US")}</p>
          </div>
        ))}
      </div>
    );
  }
}
