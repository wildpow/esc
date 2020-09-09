import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { spacing, breakpoints, fonts, colors } from "../utils/styles";

const Title = styled.h2`
  background-image: linear-gradient(
    120deg,
    ${colors.blue["200"]},
    ${colors.blue["200"]}
  );
  background-repeat: no-repeat;
  background-size: 100% 0.4em;
  background-position: 0 88%;
  font-weight: 900;
  font-size: 60px;
  font-family: ${fonts.sans};
`;
const ContactUs = () => {
  return (
    <Layout>
      <Title>Contact Us</Title>
    </Layout>
  );
};

export default ContactUs;
