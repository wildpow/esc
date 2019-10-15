import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { OutboundLink as GoogleAnalytics } from "gatsby-plugin-google-analytics";

export const SharedLinkStyles = css`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.25s ease-in;
  overflow: hidden;
  white-space: nowrap;
  :hover {
    color: ${props => props.theme.colors.jet};
    transform: scale(1.04);
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.offWhite};
  }
`;
export const OutBoundLink = styled(GoogleAnalytics)`
  color: ${props => props.theme.colors.offWhite};
  :hover {
    color: ${props => props.theme.colors.jet};
    text-decoration-color: ${props => props.theme.colors.offWhite};
  }
  ${SharedLinkStyles};
`;

export const InboundLink = styled(Link)`
  color: ${props => props.theme.colors.offWhite};
  :hover {
    color: ${props => props.theme.colors.jet};
    text-decoration-color: ${props => props.theme.colors.offWhite};
  }
  ${SharedLinkStyles};
`;

export const BR = styled.br`
  @media (min-width: 415px) {
    display: none;
  }
`;
