import { theme, css } from "twin.macro";
import fontSize from "../../Old/fontSizes";

export const Content = css`
  background-color: white;
  max-width: 1128px;
  margin: 0 auto;
  margin-top: -20px;
  position: relative;
  margin-right: 5px;
  margin-left: 5px;
  box-shadow: ${theme`boxShadow.lg`};
  border-top-left-radius: ${theme`radius.large`}px;
  border-top-right-radius: ${theme`radius.large`}px;
  padding: ${theme`spacing["3"]`};
  color: ${theme`colors.gray["800"]`};
  h2 {
    margin-top: 0;
    color: inherit;
    color: ${theme`colors.blue[900]`};
    font-size: ${fontSize["2xl"]};
    margin-bottom: 0;
    border-bottom: 4px solid #9b2c2c;
  }
  p {
    font-family: ${theme`fontFamily.serif`};
    line-height: ${theme`spacing["6"]`};
    padding-bottom: ${theme`spacing["2"]`};
    font-size: ${fontSize.md};
    color: ${theme`colors.gray[800]`};
  }
  @media (min-width: 540px) {
    margin-top: -50px;
  }
  @media (min-width: ${theme`screens.sm`}) {
    padding: ${theme`spacing["10"]`};
    margin-top: -50px;
    margin-right: 20px;
    margin-left: 20px;
    h2 {
      font-size: ${fontSize["3xl"]};
    }
    p {
      font-size: ${fontSize.xl};
      line-height: ${theme`spacing["8"]`};
      padding-bottom: ${theme`spacing["4"]`};
    }
  }
  @media (min-width: ${theme`screens.md`}) {
    margin-top: -50px;
    padding: ${theme`spacing["10"]`};
    margin-right: 20px;
    margin-left: 20px;
  }
  @media (min-width: ${theme`screens.lg`}) {
    margin-top: -80px;
    h2 {
      font-size: ${fontSize["5xl"]};
    }
    p {
      font-size: ${fontSize["2xl"]};
      line-height: ${theme`spacing["8"]`};
      padding-bottom: ${theme`spacing["6"]`};
    }
  }
  @media (min-width: ${theme`screens.xl`}) {
    margin: 0 auto;
    margin-top: -100px;
  }
`;

export const ContactUsRoot = css`
  position: relative;
  padding-bottom: ${theme`spacing["10"]`};
  font-family: ${theme`fontFamily.sans`};
  h3 {
    color: ${theme`colors.blue[900]`};
    border-bottom: 4px solid #9b2c2c;
    font-size: ${fontSize["2xl"]};
  }
  @media (min-width: ${theme`screens.xl`}) {
    h3 {
      font-size: ${fontSize["3xl"]};
    }
  }
`;
