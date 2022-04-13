import { Divider, Section, Spacer } from "@components";
import styled from "styled-components";

const Page = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const Banner: any = styled.div`
  width: 100vw;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  height: 30rem;

  background-image: ${({ url }: any) => `url(${url})`};
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;

const BannerImg: any = styled.img`
  width: 100vw;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  height: 25rem;
  object-fit: cover;
  object-position: bottom;
  border-radius: 0.2rem;
`;

export function Home() {
  return (
    <Page>
      <BannerImg src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

      <Divider width="50%" />

      <Section title="recent work">
        <h1>Hello World</h1>
      </Section>
    </Page>
  );
}
