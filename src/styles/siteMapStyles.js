import { styled } from "linaria/react";

export const MattLinksWrapper = styled.div`
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  @media (min-width: 1300px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const Main = styled.div`
  box-shadow: var(--box-shadow);
  background-color: white;
  margin-bottom: 20px;
  ul {
    padding-right: 20px;
    padding-left: 20px;
    list-style: none;
    line-height: 1.9rem;
  }
  li {
    font-family: var(--font-headline);
    font-weight: 400;
  }
  h3 {
    font-family: var(--font-headline);
    background-color: var(--color-blue);

    margin: 0;
    color: var(--color-white);
    padding-top: 15px;
    padding-bottom: 15px;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const MainLinks = styled.div`
  background: white;
  box-shadow: var(--box-shadow);
  margin-top: 15px;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

export const Lilist = styled.li`
  font-family: var(--font-headline);
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 412px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const UnList = styled.ul`
  list-style: none;
  line-height: 1.8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0;
`;

export const BottomLinks = styled.div`
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;
