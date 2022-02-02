import React, { Component } from "react";
import { FaArrowUp } from "react-icons/fa";
import { BackToTopCircle } from "../../style";

export default class BackTopTop extends Component {
  render() {
    return (
      <a href="#home">
        <BackToTopCircle>
          <FaArrowUp />
        </BackToTopCircle>
      </a>
    );
  }
}