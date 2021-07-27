import React from "react";

import { connect } from "react-redux";

import PageHeader from "./Header/PageHeader";
import Footer from "./Footer/Footer-router";


class App extends React.Component {
  render() {
    return (
      <div className="App-container" >
        <PageHeader />
        <main></main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    )
  }
}

export default connect()(App);
