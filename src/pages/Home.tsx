import { Divider, PhotoTile, Section, Spacer, TileGrid } from "@components";
import styled from "styled-components";

const Page = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxl};
`;

const Banner: any = styled.img`
  width: 100vw;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  height: 25rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.2rem;
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); */
`;

export function Home() {
  return (
    <Page>
      <Banner src="https://images.unsplash.com/photo-1597861405049-0b011428568f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" />
      <Divider width="50%" />
      <Section title="recent work">
        <TileGrid>
          <PhotoTile
            src="https://images.unsplash.com/photo-1598586700390-7172442db3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="LEHI UTAH | WEDDING"
            path=""
          />
          <PhotoTile
            src="https://images.unsplash.com/photo-1598586700390-7172442db3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="LEHI UTAH | WEDDING"
            path=""
          />
          <PhotoTile
            src="https://images.unsplash.com/photo-1598586700390-7172442db3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="LEHI UTAH | WEDDING"
            path=""
          />
        </TileGrid>
      </Section>
      <Divider width="50%" />
    </Page>
  );
}
