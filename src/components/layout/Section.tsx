import { Divider, Spacer } from "@components";
import styled from "styled-components";

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
  title: string;
}

const Title = styled.h2`
  /* font-size: ${({ theme }) => theme.fontSizes.sm}; */
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

export function Section({ children, title }: Props) {
  return (
    <>
      <Title>{title}</Title>
      <Spacer height="3rem" />
      {children}
    </>
  );
}
