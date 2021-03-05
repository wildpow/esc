import styled from "styled-components";
import { Link } from "gatsby";
import { radius, colors, spacing, fonts } from "../../utils/styles";
import MattressStuf from "./MattressStuff";

const HeaderRoot = styled.div`
  --border-width: 3px;
  --border-color: ${colors.gray[700]};
  position: relative;

  .second {
    padding-left: 20px;
  }
  @media screen and (min-width: 568px) {
    /* .second {
      padding-left: 20px;
    } */
    .wrapper {
      margin-left: 65px;
      ul {
        margin-left: 88px;
        li {
          padding: 10px 10px;
        }
      }
    }
  }
  .wrapper {
    border-left: var(--border-width) solid var(--border-color);
    margin-left: 0px;
    padding-top: 25px;
    ul {
      position: relative;
      list-style: none;
      margin-left: 20px;
      border-left: var(--border-width) solid var(--border-color);
      padding-left: 25px;
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0;
      :before {
        content: "";
        position: absolute;
        width: var(--border-width);
        height: 35px;
        background-color: var(--border-color);
        left: -3px;
        top: -30px;
      }
      :after {
        content: "";
        position: absolute;
        width: 6px;
        height: 41px;
        background-color: #f7fafc;
        left: -4px;
        bottom: -5px;
      }
      li {
        text-align: center;
        position: relative;
        padding: 7px 5px;
        margin-bottom: 20px;

        border: var(--border-width) solid var(--border-color);
        :before {
          content: "";
          position: absolute;
          width: 25px;
          height: var(--border-width);
          background-color: var(--border-color);
          left: -28px;
          top: 50%;
        }
        a {
          color: ${colors.blue[700]};
          text-decoration: none;
        }
      }
    }
  }

  .top {
    width: 100%;
    position: relative;
    display: flex;
    /* justify-content: space-between; */
    /* left: 20px; */
    /* background: white; */
    color: white;
    /* top: -14px; */
    z-index: 1;
    margin: 0;
    .first {
      position: relative;

      :after {
        position: absolute;
        content: "";
        bottom: 50%;
        left: -25px;
        width: 25px;
        background-color: var(--border-color);
        height: var(--border-width);
      }
    }
    a {
      /* width: 47%; */
      padding: 7px 10px;
      border: var(--border-width) solid var(--border-color);
      /* background: ${colors.blue[400]}; */
      background: white;
      text-decoration: none;
      color: ${colors.blue[700]};
      justify-self: center;
      align-self: center;
      text-align: center;
      /* font-size: 0.9rem; */
      @media (min-width: 568px) {
        padding: 15px 25px;
      }
    }
  }
  .divider {
    align-self: center;
    height: var(--border-width);
    width: 25px;
    background-color: var(--border-color);
  }
`;

const TopHeader = ({ mattresses, learnMore }) => {
  return (
    <HeaderRoot>
      <header className="top">
        <Link to="/brands">Mattresses</Link>
        <div className="divider" />
        <Link to="/brands/list">Shop All Mattresses</Link>
      </header>
      <div className="wrapper">
        <MattressStuf mattresses={mattresses} learnMore />
      </div>
    </HeaderRoot>
  );
};

export default TopHeader;
