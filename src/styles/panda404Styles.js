import { styled } from "linaria/react";

export const Main = styled.div`
  background-color: white;
  font-family: var(--font-headline);
  box-shadow: var(--box-shadow);
  border-radius: 0.11rem;
  text-align: center;
  justify-content: center;
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

export const Img = styled.img`
  color: white;
  margin: auto;
  max-width: 20rem;
  /* transition: all 0.2s ease-in; */
  @media (min-width: 800px) {
    max-width: 40rem;
  }
`;

export const Header = styled.header`
  background-color: var(--color-blue);
  font-family: var(--font-headline);
  text-shadow: var(--text-shadow);
  font-size: 1.2rem;
  padding: 0px 30px 0px 30px;
  color: white;
`;
