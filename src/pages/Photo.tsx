import { FadeTransition, PhotoTile, Section, TileGrid } from "@components";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Page = styled.section`
  width: 100%;
  min-width: ${({ theme }) => theme.breakpoints.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxxl};
`;

export function Photo() {
  return (
    <Page>
      <TileGrid columns={4}>
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
        <PhotoTile
          src="https://images.unsplash.com/photo-1598586700390-7172442db3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt="LEHI UTAH | WEDDING"
          path=""
        />
      </TileGrid>
    </Page>
  );
}
