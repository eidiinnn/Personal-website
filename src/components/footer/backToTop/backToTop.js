import React, { Component } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./backToTop.css";

export default class BackTopTop extends Component {
  render() {
    return (
      <a href="#inicio">
        <div class="backToTop-div">
          <FaArrowUp />
        </div>
      </a>
    );
  }
}