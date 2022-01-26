import React, { Component } from "react";
import CreateRepositoriesList from "./repositoriesList/createRepositoriesList";
import Tecnologias from "./tecnologias/";
import { Container, ContainerTitle } from "../../style";

export default class Portfolio extends Component {
  render() {
    return (
      <Container id="portfolio">
        <ContainerTitle>Portfólio</ContainerTitle>
        <CreateRepositoriesList />
        <Tecnologias />
      </Container>
    );
  }
}
