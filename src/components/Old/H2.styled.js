import { styled, theme } from "twin.macro";
// 404
/* text-shadow: ${(props) => props.theme.newTextShadow}; */
const H2 = styled("h2")`
  font-family: ${theme`fontFamily.sans`};
  background-color: ${(props) =>
    props.red ? theme`colors.brandRed` : theme`colors.brandBlue`};
  font-weight: 400;
  color: ${theme`colors.gray.50`};
  text-align: center;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.1rem;
  letter-spacing: 0.08rem;
  padding: 12px 5px 12px 5px;
  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding-bottom: 16px;
    padding-top: 16px;
    line-height: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.9rem;
    padding-bottom: 15px;
    padding-top: 15px;
    line-height: 1.4em;
  }
  @media (min-width: 1300px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
    padding-right: 1px;
    padding-left: 1px;
    padding-top: 12px;
    padding-bottom: 12px;
    line-height: 2.4rem;
  }
  @media print {
    font-size: 1rem;
  }
`;

export default H2;
