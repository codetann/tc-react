// create a grid of photos
import styled from "styled-components";

export const TileGrid: any = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: auto auto auto;
  width: 100%;
  grid-gap: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.breakpoints.lg};
`;
