import { styled, theme } from "twin.macro";

const Button = styled(`button`)`
  background: ${(props) =>
    props.inverse ? theme`colors.white` : theme`colors.lightBlue["800"]`};
  border: 1px solid
    ${(props) =>
      props.inverse
        ? theme`colors.blue["400"]`
        : theme`colors.blueGray["900"]`};
  color: ${(props) =>
    props.inverse
      ? theme`colors.lightBlue["800"]`
      : theme`colors.blueGray["50"]`};
  font-size: 1.1rem;
  padding: 0.5em 0.75rem;
  transition: 0.5s;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  display: flex;
  font-size: 1.25rem;
  box-shadow: ${theme`boxShadow.sm`};
  justify-content: center;
  font-family: ${theme`fontFamily.sans`};
  border-radius: ${theme`borderRadius.DEFAULT`};
  @media (hover: hover) {
    &:hover {
      background: ${({ inverse }) =>
        inverse ? theme`colors.white` : theme`colors.blue["900"]`};
      box-shadow: 0 0 0 1px ${theme`colors.gray["900"]`};
    }
  }
  :focus {
    box-shadow: 0 0 0 3px ${theme`colors.blue["200"]`};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }
  svg {
    height: 1.1em;
    margin-left: ${({ iconOnLeft }) => (iconOnLeft ? 0 : "0.5em")};
    margin-right: ${({ iconOnLeft }) => (iconOnLeft ? "0.5em" : 0)};
    width: 1.1em;
  }
  :disabled,
  :disabled:focus {
    cursor: not-allowed;
    color: ${theme`colors.blue["700"]`};
    opacity: 0.3;
    border: 1px solid ${theme`colors.blue["400"]`};
    background: ${theme`colors.white`};
    box-shadow: none;
  }
`;

export default Button;
