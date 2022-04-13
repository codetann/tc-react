import styled from "styled-components";

export const Divider: any = styled.hr`
  border: 0;
  height: 2px;
  background: ${({ theme }) => theme.colors.gray[200]};
  width: ${({ width }: any) => width || "100%"};
`;

export const Spacer: any = styled.div`
  height: ${({ height }: any) => height || "1rem"};
`;
