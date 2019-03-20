import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import {
  Main,
  StyledLink,
  H3,
  InfoWrapper,
  Img,
  AdjMarkdown,
} from "../styles/adjustableStyles";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Adjustables = ({ data }) => (
  <Layout>
    <Main MarginTop>
      <BreadWrapper hidenLarge>
        <BreadCrumbs here="Adjustable" />
      </BreadWrapper>
      <SEO
        title="ESC: Ajustable Bases"
        description="E.S.C. Mattress Center carry many different Adjustable bases. Sometimes called Lifestyle bases or Movable bases. We have the Tempur-Pedic Ergo Premier and Ergo Plus, the Stearns & Foster Reflection 7, and the Sealy Ease bases. Sleep in zero gravity, or read, game or watch tv in the lounge position."
        ogTitle="E.S.C. Mattress Center | Adjustable Bases"
      />
      {data.gcms.allAdjBaseses.map(base => (
        <StyledLink to={`/adjustable/${base.uri}`} key={base.id}>
          <H3>{base.fullName}</H3>
          <InfoWrapper>
            <Img
              src={`https://media.graphcms.com/resize=w:400,h:400,fit:clip/${
                base.coverImg.handle
              }`}
              alt={`${base.fullName} Ajustable base`}
            />
            <AdjMarkdown source={base.features} escapeHtml={false} />
          </InfoWrapper>
        </StyledLink>
      ))}
      <BreadWrapper hidenLarge Bottom>
        <BreadCrumbs here="Adjustable" />
      </BreadWrapper>
    </Main>
  </Layout>
);

Adjustables.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Adjustables;

export const allAdjustables = graphql`
  query allAdjustables {
    gcms {
      allAdjBaseses(filter: { isPublished: true }, orderBy: value_ASC) {
        fullName
        features
        uri
        id
        coverImg {
          handle
          height
          width
        }
      }
    }
  }
`;
