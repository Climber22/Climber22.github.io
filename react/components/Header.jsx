// React
import React from "react";

// components
import { Menu } from "semantic-ui-react";

// styles
import styles from "../../public/assets/css/main.css";

export default function Header(props) {
  return (
    <Menu
      inverted
      size="large"
      fixed="top"
      color="black"
      className={styles.header}
    >
      <div className={styles.headerWrapper}>
        <Menu.Item as={Links} src="#intro" color="white">
          About me
        </Menu.Item>
        <Menu.Item as={Links} src="#skills">
          Skills
        </Menu.Item>
        <Menu.Item as={Links} src="#interests">
          Interests
        </Menu.Item>
      </div>
    </Menu>
  );
}

const Links = props => (
  <a href={props.src} className={styles.headerLink}>
    {props.children}
  </a>
);
