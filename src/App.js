import React from "react";
import "./styles.css";
import OrderPanel from "./components/OrderPanel";
import useWebSokect from "./utils/webSocket";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <OrderPanel />
      </div>
    );
  }
}
