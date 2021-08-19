import styled from "@emotion/styled";
import { StaticQuery, graphql, Link } from "gatsby";
import SocialIcons from "./SocialIcons";
import { boxShadow, colors } from "../../styles/theme.styled";
import { P, Headline } from "./home.styled";

const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: ${boxShadow.md};
  margin-top: 10px;
  margin-right: 0px;
  margin-left: 0px;
  @media (min-width: 768px) {
    margin-top: 15px;
  }
  @media (min-width: 925px) {
    width: 49%;
  }

  @media (min-width: 1300px) {
    margin-top: 15px;
  }
`;

export const BottomLinks = styled(Link)`
  color: ${colors.brandBlue};
  transition: color 0.2s ease-in;
  &:hover {
    color: ${colors.brandRed};
  }
`;

const Container = styled.div`
  border-top: 2px solid #f8f8ff;
  background-color: white;
`;

const FrontRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 925px) {
    flex-direction: row;
  }
`;
const Front = () => (
  <FrontRoot>
    <FrontCard>
      <StaticQuery
        query={graphql`
          query front {
            datoCmsFrontPage {
              frontPageTitle
              frontPageTextBlock
            }
          }
        `}
        render={(data) => (
          <>
            <Headline>{data.datoCmsFrontPage.frontPageTitle}</Headline>
            <P>{data.datoCmsFrontPage.frontPageTextBlock}</P>
          </>
        )}
      />
    </FrontCard>
    <FrontCard>
      <Headline red>ESC = Expert Sleep Center</Headline>
      <P>
        At ESC Mattress Center we have over twenty years industry experience --
        we are the sleep experts and we want to help educate you so you can get
        the great sleep you deserve. With our customer-friendly 90 day comfort
        guarantee we&apos;ve got your back in case you&apos;re not 100%
        satisfied with your purchase.
        <BottomLinks to="/about">Learn more</BottomLinks>
      </P>
      <Container>
        <SocialIcons />
      </Container>
    </FrontCard>
  </FrontRoot>
);

export default Front;
