// React
import React from "react";

// components
import { Segment, Header, Image } from "semantic-ui-react";

// styles
import styles from "../../public/assets/css/main.css";

export default function Skills(props) {
  return (
    <Segment className={styles.segment} basic id="skills">
      <Header
        as="h2"
        textAlign="center"
        content="Skills"
        className={styles.segmentTitle}
      />
      <Image src="../../public/assets/images/skills.png" />
    </Segment>
  );
}
