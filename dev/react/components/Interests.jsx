// React
import React from "react";

// components
import { Segment, Header, Image, Grid } from "semantic-ui-react";

// styles
import styles from "main.css";

// images
import blockchain from "blockchain.jpg";

export default function Interests(props) {
  return (
    <Segment className={styles.segment} basic id="interests">
      <Header
        as="h2"
        textAlign="center"
        content="Interests"
        className={styles.segmentTitle}
      />
      <Grid columns={2} verticalAlign="middle">
        <Grid.Column>
          <p>
            Blockchain技術に可能性を感じ、興味を持っています。
            <br />
            特に、トークンエコノミーを基盤とした「小さいかつ密度の濃い経済圏」の実現、SCMにおけるIoTとBlockchain技術を用いた改革に期待をしています。
          </p>
        </Grid.Column>
        <Grid.Column>
          <Image className={styles.image} src={blockchain} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
