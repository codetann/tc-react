import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { config } from "@config";

/* styles */
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const NavRow = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const NavItem: any = styled(Link)`
  color: ${({ theme, active }: any) =>
    active ? "black" : theme.colors.gray[300]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: black;
  }
`;

/* component */
export function NavBar() {
  const location = useLocation();

  return (
    <Nav>
      <Logo>
        <h1>T</h1>
        <p>&</p>
        <h1>C</h1>
      </Logo>
      <NavRow>
        {config.routes.map((r) => (
          <NavItem
            active={location.pathname === r.path}
            key={r.path}
            to={r.path}
          >
            {r.name}
          </NavItem>
        ))}
      </NavRow>
    </Nav>
  );
}
