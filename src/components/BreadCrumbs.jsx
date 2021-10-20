import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { DisplayNonePrint } from "../styles/print.styled";
import { colors, fonts } from "../styles/theme.styled";

function ifLavish(string) {
  if (string === "posh-and-lavish") {
    return string.split("-").join(" ");
  }
  return string;
}

export const BreadWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${colors.gray["800"]};
  font-family: ${fonts.sans};
  display: flex;

  @media (min-width: 568px) {
    font-size: 1rem;
    padding-left: 7px;
  }
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1022px) {
    font-size: 1.2rem;
    display: ${({ hiddenLarge }) => (hiddenLarge ? "none" : "flex")};
  }

  @media (min-width: 1450px) {
    margin-left: 0px;
  }
  ${DisplayNonePrint}
`;
const Span = styled.span`
  padding-right: 5px;
  padding-left: 5px;
  @media (min-width: 768px) {
    padding-right: 7px;
    padding-left: 7px;
  }
`;
const Crumbs = styled(Link)`
  text-transform: capitalize;

  color: ${colors.brandBlue};
  &:hover {
    color: ${colors.brandRed};
  }
`;
const Location = styled.div`
  padding-bottom: 1px;
  text-transform: capitalize;
  @media (max-width: 610px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const BreadCrumbs = (props) => {
  const {
    next,
    only2Links,
    only3Links,
    next2,
    error,
    here,
    acc,
    brandLanding,
  } = props;
  const accessoryBackURL = (propStr) => {
    if (propStr === "Pillow") return `/accessories/list?type=pillow`;
    if (propStr === "Sheets") return `/accessories/list?type=sheets`;
    if (propStr === "Protector") return `/accessories/list?type=protector`;
    if (propStr === "Foundation") return `/accessories/list?type=foundation`;
    return null;
  };
  const accessoryDisplay = (propStr) => {
    if (propStr === "Pillow") return `Pillows`;
    if (propStr === "Sheets") return propStr;
    if (propStr === "Protector") return `Protectors`;
    if (propStr === "Foundation") return "Foundation";
    return null;
  };
  // to="/accessories/list?type=pillow"
  // "/accessories/list?type=sheets"
  // /accessories/list?type=protector
  // next="Accessories"
  // next2={product.productType}
  //           here={product.title}

  // next2
  //   - plural display
  //   - query URL
  return (
    <>
      <Crumbs to="/">Home</Crumbs>
      <Span>&gt;</Span>
      {next && (
        <div>
          <Crumbs to={`/${next.toLowerCase()}`}>{next}</Crumbs>
          {!only2Links ? <Span>&gt;</Span> : ""}
        </div>
      )}
      {next2 && brandLanding ? (
        <div>
          <Crumbs to={`/brands/list?brand=${brandLanding}`}>{next2}</Crumbs>
          {!only3Links ? <Span>&gt;</Span> : ""}
        </div>
      ) : null}
      {next2 && !brandLanding && (
        <div>
          <Crumbs
            to={
              acc
                ? accessoryBackURL(next2)
                : `/${next.toLowerCase()}/${next2.toLowerCase()}`
            }
          >
            {acc ? accessoryDisplay(next2) : ifLavish(next2)}
          </Crumbs>
          {!only3Links ? <Span>&gt;</Span> : ""}
        </div>
      )}
      <Location>
        {error ? (
          <Crumbs
            to={`/${next.toLowerCase()}/${next2.toLowerCase()}/${here.toLowerCase()}`}
          >
            {here}
          </Crumbs>
        ) : (
          ifLavish(here)
        )}
      </Location>
    </>
  );
};
BreadCrumbs.defaultProps = {
  next: "",
  next2: "",
  only2Links: "",
  only3Links: "",
  error: "",
  acc: false,
};
BreadCrumbs.propTypes = {
  only2Links: PropTypes.string,
  only3Links: PropTypes.string,
  next: PropTypes.string,
  next2: PropTypes.string,
  error: PropTypes.string,
  here: PropTypes.string.isRequired,
  acc: PropTypes.bool,
};
export default BreadCrumbs;
