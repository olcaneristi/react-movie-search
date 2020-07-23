import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./App.css"
import Search from "./components/search"

class Main extends Component {
  render() {
    return <Search />
  }
}

ReactDOM.render(<Main />, document.getElementById("root"))
