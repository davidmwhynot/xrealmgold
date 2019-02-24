import { h, render, Component } from "preact";
import { Router, route } from "preact-router";
import { Provider } from "preact-redux";

import store from "./store";

import Request from "./components/request/Request";
import Orders from "./components/Orders";

import SideBar from "./components/layout/SideBar";
import TopBar from "./components/layout/TopBar";

import About from "./pages/About";

class App extends Component {
  constructor() {
    super();
  }

  render(props, state) {
    console.log("rendering App");
    return (
      <Provider store={store}>
        <div className="app">
          <TopBar />
          <SideBar />
          <div className="body">
            <Router>
              <div path="/" className="main">
                <Request />
                <Orders />
              </div>
              <About path="/about" />
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

// render App into #app:
render(<App />, document.getElementById("app"));
