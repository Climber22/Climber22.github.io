// React
import React from "react";
import ReactDom from "react-dom";

// components
import Header from "./components/Header.jsx";
import Top from "./components/Top.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Top />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
