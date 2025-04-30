/* eslint-disable no-nested-ternary */
import type { JSX } from "react";
import Link from "@docusaurus/Link";
import React from "react";
import { useInView } from "react-intersection-observer";
import type { APIServerData } from "../../functions/api/server/[serverInvite]/data.json";

interface Review {
  description: string;
  // optional: Add field for potential icon URL from API
  serverIcon?: null | string;
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

// combine Review and APIServerData for easier state management
interface ReviewState extends Review {
  loading: boolean;
  serverData?: APIServerData;
}

// create a new component for individual review items
function ReviewItem({ review, index }: { index: number; review: ReviewState }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // remove transition-colors
    <figure
      className={`
        flex flex-col rounded-lg border border-emphasis-300 bg-background-surface p-6 shadow-sm dark:shadow-md
        transition-opacity duration-500 ease-in-out duration-300
        ${inView ? "animate-in fade-in zoom-in-95 duration-500" : "opacity-0"}
      `}
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* remove transition-colors */}
      <blockquote className="grow text-base leading-relaxed text-content-secondary md:text-lg duration-300 ease-in-out">
        <p>&quot;{review.description}&quot;</p>
      </blockquote>
      {/* remove transition-colors */}
      <figcaption className="mt-6 flex items-center gap-4 border-t border-emphasis-300 pt-5 duration-300 ease-in-out">
        {/* remove transition-colors */}
        <div className="h-12 w-12 flex-shrink-0 rounded-full bg-emphasis-200 flex items-center justify-center overflow-hidden duration-300 ease-in-out">
          {review.loading ?
            <div className="h-full w-full animate-pulse rounded-full bg-emphasis-300 dark:bg-emphasis-700 duration-300 ease-in-out" /> :
            review.serverIcon ?
              <img alt={`${review.serverName} icon`} className="h-full w-full object-cover" src={review.serverIcon} /> :
              <span className={"text-lg font-semibold text-content-secondary duration-300 ease-in-out"}>{review.serverName.charAt(0)}</span>}
        </div>
        <div className="text-left">
          {/* remove transition-colors */}
          <div className="text-sm font-semibold text-content duration-300 ease-in-out">{review.serverName}</div>
          {/* remove transition-colors */}
          <div className="text-xs text-content-secondary duration-300 ease-in-out">
            {review.loading ?
              // remove transition-colors
              <span className="inline-block h-3 w-16 animate-pulse rounded bg-emphasis-300 dark:bg-emphasis-700 duration-300 ease-in-out" /> :
              review.serverData ?
                `${review.serverData.members.toLocaleString("en-US")} members` :
                // add dark mode hover color for link
                <Link
                  className={"font-medium text-countr-red transition duration-300 hover:text-countr-red/80 dark:hover:text-countr-red/70"}
                  rel="noopener noreferrer"
                  target="_blank"
                  to={`https://discord.gg/${review.serverInvite}`}
                >
                  Join Server
                </Link>}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}


export default class Reviews extends React.Component<Record<string, never>, { reviewsToShow: ReviewState[] }> {
  constructor(props: Record<string, never>) {
    super(props);
    // select random reviews and add loading state
    const selectedReviews = reviews.sort(() => Math.random() - 0.5).slice(0, 2);
    this.state = {
      reviewsToShow: selectedReviews.map(review => ({ ...review, loading: true })),
    };
  }

  override componentDidMount(): void {
    this.state.reviewsToShow.forEach((review, index) => {
      void fetch(`/api/server/${review.serverInvite}/data.json`)
        .then(res => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json<APIServerData>();
        })
        .then(stats => {
          this.setState(state => {
            const updatedReviews = [...state.reviewsToShow];
            updatedReviews[index] = { ...updatedReviews[index]!, serverData: stats, loading: false };
            return { reviewsToShow: updatedReviews };
          });
        })
        .catch(() => {
          // handle fetch error for individual review
          this.setState(state => {
            const updatedReviews = [...state.reviewsToShow];
            // eslint-disable-next-line no-undefined
            updatedReviews[index] = { ...updatedReviews[index]!, loading: false, serverData: undefined as never };
            return { reviewsToShow: updatedReviews };
          });
        });
    });
  }


  override render(): JSX.Element {
    const { reviewsToShow } = this.state;

    return (
      // adjusted grid gap
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {reviewsToShow.map((review, index) => <ReviewItem index={index} key={index} review={review} />)}
      </div>
    );
  }
}
