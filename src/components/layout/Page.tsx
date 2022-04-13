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
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  gap: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* component */
export function Page({ children }: Props) {
  return (
    <Main>
      <Wrapper>{children}</Wrapper>
    </Main>
  );
}
