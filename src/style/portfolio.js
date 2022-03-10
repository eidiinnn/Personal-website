import styled from "styled-components";
import {
  primaryColor,
  normalTextColor,
  DarkBackgroundColor,
  secondaryColor,
} from "./global";

export const ProjectListUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-row: 2;
  justify-content: center;

  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ProjectListLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};

  width: 400px;
  height: 230px;
  margin: 0.7rem;

  border-top: 4px solid ${secondaryColor};
  padding: 2.5rem;
  box-shadow: 5px 5px 7px 5px rgba(0, 0, 0, 0.12);
  background-color: ${DarkBackgroundColor};
  transition-duration: 700ms;

  font-family: "Roboto";
  color: ${normalTextColor};

  &:hover {
    box-shadow: 0px 0px 52px -6px rgba(50, 47, 74, 1);
  }
`;

export const ProjectListTitle = styled.h1`
  color: ${primaryColor};
  align-self: left;
  font-size: 2rem;

  margin: 0;
  margin-bottom: 0.1rem;
`;

export const Tech = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  margin: 0;
  font-size: 1.1rem;
`;

export const Text = styled.p`
  color: ${normalTextColor};
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  width: 380px;
`;

export const ExternalLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-self: flex-end;
  width: 100%;
`;

export const ExternalLinksIcons = styled.a`
  font-size: 2rem;
  color: ${normalTextColor};
  margin-left: 0.5rem;
`;

export const PdfResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 700;
  color: ${normalTextColor};

  background-color: ${DarkBackgroundColor};
`;

export const PdfResumeContainerIcon = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  font-size: 5.5rem;
  color: ${primaryColor};
`;
