import styled from "@emotion/styled";

export default styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7px;
  padding-right: 7px;
  @media screen and (min-width: 768px) {
    padding-left: 0;
    width: 30%;
  }
  @media screen and (min-width: 1024px) {
    width: 20%;
  }
`;
