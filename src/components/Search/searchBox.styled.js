import { css } from "@emotion/react";
import styled from "@emotion/styled";
import SearchBox from "./SearchBox";
import { colors, dimensions, fonts } from "../../styles/theme.styled";

const open = css`
  width: calc(100% - 60px);
  ${"" /* width: 100%; */}
  background: ${colors.gray[100]};
  cursor: text;
  padding-left: 1.6em;
`;
const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`;
export default styled(SearchBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  font-family: ${fonts.sans};
  .SearchInput {
    left: 60px;
    z-index: 1;
    position: absolute;
    height: 60px;
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 1.1em;
    transition: 100ms;
    border-radius: 2px;
    color: ${colors.gray[900]};
    ::placeholder {
      color: ${colors.gray[600]};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
`;
