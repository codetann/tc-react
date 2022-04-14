// create a grid of photos
import styled from "styled-components";

export const TileGrid: any = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }: any) => "auto ".repeat(columns)};
  width: 100%;
  grid-gap: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.breakpoints.lg};
`;
