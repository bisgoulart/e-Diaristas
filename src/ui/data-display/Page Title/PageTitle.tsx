import React from "react";
import {
  PageTitleContainer,
  PageTitleStyle,
  PageSubtitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyle>{props.title}</PageTitleStyle>
      <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};
export default PageTitle;
