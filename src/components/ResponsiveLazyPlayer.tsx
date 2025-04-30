// no changes needed for the redesign, styling is applied to the container div in index.tsx
import type { JSX } from "react";
import React from "react";
import ReactPlayer from "react-player/youtube";

export default function ResponsivePlayer({ url, front = false, start, loopAfter }: { front: boolean; loopAfter?: number; start?: number; url: string }): JSX.Element {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden">
      <ReactPlayer
        className="absolute top-0 left-0"
        config={start ?? loopAfter ? { playerVars: { start, end: loopAfter } } : {}}
        height="100%"
        loop={Boolean(loopAfter)}
        muted={front}
        playing={front}
        url={url}
        width="100%"
      />
    </div>
  );
}
