import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";

const TabHeroContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
  p {
    color: #00103b;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6rem;
    text-align: center;
    font-family: ${props => props.theme.MainFont3};
  }

  @media only screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;

const TabHeroImg = styled(Img)`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  max-width: ${props => props.width}px;
  margin: 0 auto;
  text-align: center;
`;

const TabHero = ({ heroText, hero }) => {
  return (
    <TabHeroContainer>
      <TabHeroImg
        fluid={hero.fluid}
        alt={hero.alt}
        title={hero.title}
        width={hero.width}
      />
      <p>{heroText}</p>
    </TabHeroContainer>
  );
};

TabHero.propTypes = {
  heroText: PropTypes.string.isRequired,
  hero: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TabHero;
