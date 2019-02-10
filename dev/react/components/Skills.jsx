// React
import React from "react";

// components
import { Segment, Header, Image } from "semantic-ui-react";

// styles
import styles from "main.css";

// images
import skills from "skills.png";

export default function Skills(props) {
  return (
    <Segment className={styles.segment} basic id="skills">
      <Header
        as="h2"
        textAlign="center"
        content="Skills"
        className={styles.segmentTitle}
      />
      <Image src={skills} />
    </Segment>
  );
}
