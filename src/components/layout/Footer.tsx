import styled from "styled-components";

const Wrapper = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
`;

export function Footer() {
  return (
    <Wrapper>
      <Text>
        HUSBAND + WIFE
        <br /> - <br />
        WEDDING PHOTOGRAPHERS & VIDEOGRAPHERS
        <br /> - <br />
        UTAH
      </Text>
    </Wrapper>
  );
}
