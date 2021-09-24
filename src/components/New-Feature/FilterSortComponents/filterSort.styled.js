import styled from "@emotion/styled";

export default styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 0;
    width: 30%;
  }
  @media screen and (min-width: 1024px) {
    width: 20%;
  }
`;
