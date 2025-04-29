// no changes needed for the redesign, styling is applied to the container div in index.tsx
import type { JSX } from "react";
import React from "react";
import ReactPlayer from "react-player/youtube";

export default function ResponsivePlayer({ url, front = false, start, loopAfter }: { front: boolean; loopAfter?: number; start?: number; url: string }): JSX.Element {
  return (
    // the relative padding-bottom trick handles aspect ratio
    <div className="relative pb-[56.25%] h-0 overflow-hidden"> {/* ensure h-0 and overflow-hidden */}
      <ReactPlayer
        className="absolute top-0 left-0" // position player absolutely within the container
        config={start ?? loopAfter ? { playerVars: { start, end: loopAfter } } : {}}
        height="100%"
        loop={Boolean(loopAfter)}
        muted={front} // muted is good for autoplaying front-page videos
        playing={front} // autoplay if it's the front video
        url={url}
        width="100%"
        // add light controls for better integration if needed
        // controls={true}
        // light={!front} // Show preview image until clicked unless it's the autoplaying one
      />
    </div>
  );
}
