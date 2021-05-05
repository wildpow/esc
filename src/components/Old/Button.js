import React from "react";
import { node, bool, string } from "prop-types";
import { styled, theme } from "twin.macro";
import { Link } from "gatsby";

export const ButtonBase = styled(`button`)`
  align-items: center;
  background: ${(props) =>
    props.inverse ? theme`colors.blue.900` : theme`colors.white`};
  border: 1px solid
    ${(props) =>
      props.inverse ? theme`colors.blue["700"]` : theme`colors.blue["800"]`};
  color: ${(props) =>
    props.inverse ? theme`colors.blue["800"]` : theme`colors.blue["700"]`};
  border-radius: ${theme`borderRadius.DEFAULT`}px;
  cursor: pointer;
  display: inline-flex;
  font-family: ${theme`fontFamily.sans`};
  font-size: 1.1rem;
  justify-content: center;
  padding: 0.5em 0.75rem;
  transition: 0.5s;
  :focus {
    box-shadow: 0 0 0 3px ${theme`colors.blue["200"]`};
    outline: 0;
    transition: box-shadow 0.15s ease-in-out;
  }

  svg {
    height: 1.1em;
    margin-left: ${(props) => (props.iconOnLeft ? 0 : "0.5em")};
    margin-right: ${(props) => (props.iconOnLeft ? "0.5em" : 0)};
    width: 1.1em;
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 0 1px ${theme`colors.gray["900"]`};
    }
  }
`;

const ButtonAsExternalLink = styled(ButtonBase.withComponent(`a`))`
  display: inline-flex;
  text-decoration: none;
`;

const ButtonAsInternalLink = ButtonAsExternalLink.withComponent(
  ({ iconOnLeft, inverse, ...rest }) => <Link {...rest} />
);

export const Button = ({ children, to, href, inverse = false, ...rest }) => {
  const iconOnLeft = typeof children[0] !== "string";
  if (to) {
    return (
      <ButtonAsInternalLink
        to={to}
        iconOnLeft={iconOnLeft}
        inverse={inverse}
        {...rest}
      >
        {children}
      </ButtonAsInternalLink>
    );
  }
  if (href) {
    return (
      <ButtonAsExternalLink
        href={href}
        inverse={inverse}
        iconOnLeft={iconOnLeft}
        {...rest}
      >
        {children}
      </ButtonAsExternalLink>
    );
  }
  return (
    <ButtonBase inverse={inverse} iconOnLeft={iconOnLeft} {...rest}>
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  inverse: false,
};
Button.propTypes = {
  children: node.isRequired,
  inverse: bool,
  // eslint-disable-next-line react/require-default-props
  to: string,
  // eslint-disable-next-line react/require-default-props
  href: string,
};

export const PrimaryButton = styled(Button)`
  background: ${({ danger }) =>
    danger ? theme`colors.red["700"]` : theme`colors.blue["700"]`};
  color: ${theme`colors.blue["100"]`};
  display: flex;
  font-size: 1.25rem;
  justify-content: center;
  font-family: ${theme`fontFamily.sans`};

  @media (hover: hover) {
    &:hover {
      background: ${({ danger }) =>
        danger ? theme`colors.red["900"]` : theme`colors.blue["900"]`};
    }
  }
`;
