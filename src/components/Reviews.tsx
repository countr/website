import Link from "@docusaurus/Link";
import React from "react";
import styles from "./Reviews.module.css";

interface InviteInfo {
  [serverIdentifier: string]: number;
}

interface Review {
  serverName: string;
  serverIdentifier: string;
  serverInvite: string;
  description: string;
}

const reviews: Review[] = [
  {
    serverName: "Slogo",
    serverIdentifier: "slogo",
    serverInvite: "slogo",
    description: "We're pretty satisfied with Countr bot. The set up is also hassle free which is an added bonus. Would recommend as an addition to any server out there.",
  },
  {
    serverName: "Sound's World",
    serverIdentifier: "sound",
    serverInvite: "sound",
    description: "In my server Sound’s World the members love Countr for its simplicity and fun at tearing you from boredom. We’re at over 1 million and counting, hopefully 2 million soon. I’ve used it in a video on my YouTube channel and people loved that video as well, so it’s a great bot to add!",
  },
  {
    serverName: "Flare Community",
    serverIdentifier: "flare",
    serverInvite: "cN8UVDH",
    description: "We have been using Countr for almost 2 years and it's become one of our favourite bots in the server. This bot is easy to set up, simple yet fun to use and customize, and has great support. Any servers looking for an easy way to add some fun into their server has got to try adding Countr!",
  },
];

export default class Reviews extends React.Component<Record<string, never>, { guildCounts: InviteInfo; }> {
  constructor(props) {
    super(props);
    this.state = {
      guildCounts: {},
    };
  }

  componentDidMount() {
    fetch("/api/stats")
      .then(res => res.json())
      .then(stats => {
        this.setState({
          guildCounts: stats.servers,
        });
      });
  }

  render() {
    const { guildCounts } = this.state;

    return (
      <div className={styles.reviews}>
        {
          // get three random reviews and display them
          reviews.sort(() => Math.random() - 0.5).slice(0, 2).map((review, index) => <div key={index} className={styles.review}>
            <h2>{review.serverName} {guildCounts[review.serverIdentifier] ? `• ${guildCounts[review.serverIdentifier].toLocaleString("en-US")} members` : ""}</h2>
            <p>{review.description} <Link to={`https://discord.gg/${review.serverInvite}`}>Join {review.serverName}</Link></p>
          </div>)
        }
      </div>
    );
  }
}
