// React
import React from "react";
import ReactDom from "react-dom";

// components
import Header from "./components/Header.jsx";
import Top from "./components/Top.jsx";
import Intro from "./components/Intro.jsx";
import Skills from "./components/Skills.jsx";
import Interests from "./components/Interests.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Top />
        <Intro />
        <Skills />
        <Interests />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
