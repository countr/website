import React from "react";
import ReactPlayer from "react-player/youtube";
import styles from "./ResponsiveLazyPlayer.module.css";

export default function ResponsivePlayer({ url, front, start, loopAfter }: { url: string; front?: boolean; start?: number; loopAfter?: number; }): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        className={styles.player}
        muted={front}
        playing={front}
        loop={Boolean(loopAfter)}
        config={start || loopAfter ?
          {
            playerVars: {
              start, end: loopAfter,
            },
          } :
          {}}
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
}
