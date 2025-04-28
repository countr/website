import Link from "@docusaurus/Link";
import React from "react";
import type { APIServerData } from "../../functions/api/server/[serverInvite]/data.json";

interface Review {
  description: string;
  serverInvite: string;
  serverName: string;
}

const reviews: Review[] = [
  {
    serverName: "Slogo",
    serverInvite: "slogo",
    description: "We're pretty satisfied with Countr bot. The set up is also hassle free which is an added bonus. Would recommend as an addition to any server out there.",
  },
  {
    serverName: "Sound's World",
    serverInvite: "sound",
    description: "In my server Sound’s World the members love Countr for its simplicity and fun at tearing you from boredom. We’re at over 1 million and counting, hopefully 2 million soon. I’ve used it in a video on my YouTube channel and people loved that video as well, so it’s a great bot to add!",
  },
  {
    serverName: "Flare Community",
    serverInvite: "cN8UVDH",
    description: "We have been using Countr for almost 2 years and it's become one of our favourite bots in the server. This bot is easy to set up, simple yet fun to use and customize, and has great support. Any servers looking for an easy way to add some fun into their server has got to try adding Countr!",
  },
  {
    serverName: "Opera GX",
    serverInvite: "operagx",
    description: "We initially added Countr to our server to see how far we can count as a community, and nowadays it's a channel for basically anyone to go and count a couple numbers when they are bored or just exploring the server. We're also awarding our users with a special role for counting \"special numbers\" picked by our staff members, next number in line at the time of this review is 420069! It's overall a fun bot for your community to interact with!",
  },
];

export default class Reviews extends React.Component<Record<string, never>, { reviewsToShow: Review[]; serverData: Record<string, APIServerData> }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      reviewsToShow: reviews.sort(() => Math.random() - 0.5).slice(0, 2),
      serverData: {},
    };
  }

  override componentDidMount(): void {
    this.state.reviewsToShow.forEach(review => {
      void fetch(`/api/server/${review.serverInvite}/data.json`)
        .then(res => res.json<APIServerData>())
        .then(stats => {
          this.setState(state => ({
            ...state,
            serverData: {
              ...state.serverData,
              [review.serverInvite]: stats,
            },
          }));
        });
    });
  }

  override render(): JSX.Element {
    const { reviewsToShow, serverData } = this.state;

    return (
      <div className="grid grid-cols-2 gap-8">
        {
          // get three random reviews and display them
          reviewsToShow
            .map((review, index) => <div className="flex flex-col items-center justify-center text-center" key={index}>
              <h2>{review.serverName} {serverData[review.serverInvite] ? `• ${serverData[review.serverInvite]!.members.toLocaleString("en-US")} members` : ""}</h2>
              <p>{review.description} <Link to={`https://discord.gg/${review.serverInvite}`}>Join {review.serverName}</Link></p>
              {/* eslint-disable-next-line @stylistic/jsx/jsx-closing-tag-location */}
            </div>)
        }
      </div>
    );
  }
}
