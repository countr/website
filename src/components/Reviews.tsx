import Link from "@docusaurus/Link";
import React from "react";
import styles from "./Reviews.module.css";

interface InviteInfo {
  [server_identifier: string]: number;
}

interface Review {
  server_name: string;
  server_identifier: string;
  server_invite: string;
  description: string;
}

const reviews: Review[] = [
  {
    server_name: "Slogo",
    server_identifier: "slogo",
    server_invite: "slogo",
    description: "We're pretty satisfied with Countr bot. The set up is also hassle free which is an added bonus. Would recommend as an addition to any server out there."
  },
  {
    server_name: "Sound's World",
    server_identifier: "sound",
    server_invite: "sound",
    description: "In my server Sound’s World the members love Countr for its simplicity and fun at tearing you from boredom. We’re at over 1 million and counting, hopefully 2 million soon. I’ve used it in a video on my YouTube channel and people loved that video as well, so it’s a great bot to add!"
  },
  {
    server_name: "Flare Community",
    server_identifier: "flare",
    server_invite: "cN8UVDH",
    description: "We have been using Countr for almost 2 years and it's become one of our favourite bots in the server. This bot is easy to set up, simple yet fun to use and customize, and has great support. Any servers looking for an easy way to add some fun into their server has got to try adding Countr!"
  }
];

export default class Reviews extends React.Component<Record<string, never>, { guild_counts: InviteInfo; }> {
  constructor(props) {
    super(props);
    this.state = {
      guild_counts: {}
    };
  }

  componentDidMount() {
    fetch("https://countr-splash-stats.promise.workers.dev/")
      .then(res => res.json())
      .then(stats => {
        this.setState({
          guild_counts: stats.servers
        });
      });
  }

  render() {
    const { guild_counts } = this.state;

    return (
      <div className={styles.reviews}>
        {
          // get three random reviews and display them
          reviews.sort(() => Math.random() - 0.5).slice(0, 2).map((review, index) => (
            <div key={index} className={styles.review}>
              <h2>{review.server_name} {guild_counts[review.server_identifier] ? `• ${guild_counts[review.server_identifier].toLocaleString("en-US")} members` : ""}</h2>
              <p>{review.description} <Link to={`https://discord.gg/${review.server_invite}`}>Join {review.server_name}</Link></p>
            </div>
          ))
        }
      </div>
    );
  }
}
