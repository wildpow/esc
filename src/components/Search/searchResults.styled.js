import { css } from "@emotion/react";
import styled from "@emotion/styled";
import SearchResult from "./SearchResult";
import { colors, fonts } from "../../styles/theme.styled";

const Popover = css`
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 100vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  margin-right: 5px;
  margin-left: 5px;
  background: ${({ theme }) => theme.background};
  @media (min-width: 560px) {
    width: 80vw;
    max-width: 30em;
    margin-right: 0px;
    margin-left: 0px;
  }
`;
export default styled(SearchResult)`
  font-family: ${fonts.sans};
  background-color: white;
  display: ${({ show }) => (show ? `block` : `none`)};
  ${Popover}
  .HitCount {
    display: flex;
    justify-content: flex-end;
    border-bottom: 4px solid ${colors.red[800]};
  }
  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 10px;
    }
    li.ais-Hits-item {
      margin-bottom: 1em;
      line-height: 1.3rem;
      font-family: ${fonts.serif};
      a {
        transition: all 0.2s ease;
        color: ${colors.blue[700]};
        font-family: ${fonts.sans};
        font-size: 1.2em;
        h4 {
          margin-bottom: 0.2em;
        }
        :hover {
          color: ${colors.red[700]};
        }
      }
    }
  }
  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;
    svg {
      width: 70px;
    }
  }
`;
