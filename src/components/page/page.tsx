import React from "react";
import { PageContainer, Title } from "./styles";
import { PageProps } from "./types";

export const Page = (props: PageProps) => {
  const { title, children } = props;
  return (
    <PageContainer>
      <Title>{title}</Title>
      {children}
    </PageContainer>
  );
};
