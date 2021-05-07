import { theme, styled } from "twin.macro";
import SearchResult from "./SearchResult";

export default styled(SearchResult)`
  font-family: ${theme`fontFamily.sans`};
  display: ${(props) => (props.show ? `block` : `none`)};
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
  background: white;
  @media (min-width: 560px) {
    width: 80vw;
    max-width: 30em;
    margin-right: 0px;
    margin-left: 0px;
  }
  .HitCount {
    display: flex;
    justify-content: flex-end;
    border-bottom: 4px solid ${theme`colors.rose[800]`};
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
      font-family: ${theme`fontFamily.serif`};
      a {
        transition: all 0.2s ease;
        color: ${theme`colors.lightBlue[700]`};
        font-family: ${theme`fontFamily.sans`};
        font-size: 1.2em;
        h4 {
          margin-bottom: 0.2em;
        }
        &:hover {
          color: ${theme`colors.rose[700]`};
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
