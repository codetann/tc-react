import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
  path: string;
}

const Tile: any = styled.div`
  position: relative;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ src }: Props) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.2rem;
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
    border-radius: 0.2rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Text = styled.p`
  font-size: 12px;
  color: white;
  position: absolute;
  z-index: 10;
`;

export function PhotoTile({ src, alt, path }: Props) {
  return (
    <Tile src={src}>
      <Text>{alt}</Text>
    </Tile>
  );
}
