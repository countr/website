import React from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./ResponsiveLazyPlayer.module.css";

export default function ResponsivePlayer({ url }): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <ReactPlayer
        className={styles.player}
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
}
