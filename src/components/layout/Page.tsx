import styled from "styled-components";

/* types */
type Props = {
  children: JSX.Element[] | JSX.Element;
};

/* styles */
const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
`;

/* component */
export function Page({ children }: Props) {
  return (
    <Main>
      <Wrapper>{children}</Wrapper>
    </Main>
  );
}
