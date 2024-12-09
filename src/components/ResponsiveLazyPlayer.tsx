import React from "react";
import ReactPlayer from "react-player/youtube";
import styles from "./ResponsiveLazyPlayer.module.css";

export default function ResponsivePlayer({ url, front = false, start, loopAfter }: { front: boolean; loopAfter?: number; start?: number; url: string }): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        className={styles.player}
        config={start ?? loopAfter ?
          {
            playerVars: {
              start, end: loopAfter,
            },
          } :
          {}}
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
