// React
import React from "react";
import PropTypes from "prop-types";

// components
import { Menu } from "semantic-ui-react";

export default function Header(props) {
  return (
    <Menu inverted fluid size="large" fixed="top" color="black">
      <Menu.Item as="a">About me</Menu.Item>
      <Menu.Item as="a">Skills</Menu.Item>
      <Menu.Item as="a">Interests</Menu.Item>
      <Menu.Item as="a">Career</Menu.Item>
      <Menu.Item as="a">Education</Menu.Item>
    </Menu>
  );
}
