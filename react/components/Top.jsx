import React from "react";
import PropTypes from "prop-types";
// components
import { Grid, Header } from "semantic-ui-react";
// styles
import styles from "../../public/assets/css/main.css";

export default function Top(props) {
  return (
    <Grid className={styles.topImage} verticalAlign="middle">
      <Grid.Column>
        <Header
          as="h1"
          textAlign="center"
          className={styles.topMessage}
          content="Welcome, I'm Shohei."
        />
        <Header
          as="h2"
          textAlign="center"
          className={styles.subMessage}
          content="Web engineer in Japan."
        />
      </Grid.Column>
    </Grid>
  );
}
