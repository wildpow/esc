import styled, { css } from "styled-components";
import SearchBox from "./search-box";
import { colors, dimensions, fonts } from "../../utils/styles";

const open = css`
  width: 16em;
  background: ${({ theme }) => theme.background};
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
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  font-family: ${fonts.sans};
  .SearchInput {
    height: ${dimensions.headerHeight};
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 1em;
    transition: 100ms;
    border-radius: 2px;
    color: ${({ theme }) => theme.foreground};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
`;
