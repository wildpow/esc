import styled, { css } from "styled-components";

// Display NONE Print Styled
// STYLES THAT USE THIS
// topperStyles.js: Top
// breadCrumbs.js:  BreadWrapper
// mattress.js: Info , List
// imageView.js: BigBanner

export const DisplayNonePrint = css`
  @media print {
    display: none;
  }
`;

// Topper Print Styles //
export const TopperNumber = styled.div`
  display: none;
  @media print {
    font-family: ${props => props.theme.MainFont1};
    display: initial;
    position: absolute;
    float: right;
    right: 0;
    top: 0;
    font-weight: 700;
    border-bottom: 2px solid ${props => props.theme.mainColor2};
    font-size: 1.3rem;
  }
`;
// /////////////////////////////////////////////

// Logo Print Styles

export const ImagePrint = css`
  @media print {
    height: 6.5em;
  }
`;

export const H1Print = css`
  @media print {
    font-size: 2rem;
    text-shadow: none;
    margin-top: -28px;
    box-shadow: none;
  }
`;

export const ReadersPrint = css`
  @media print {
    max-width: 75px;
    top: 22px;
    left: 45px;
  }
`;
// ////////////////////////////////

// Mattress Templete
export const ListPrint = css`
  @media print {
    margin-top: 5px;
    h3 {
      font-size: 1.3rem;
    }
    li {
      font-size: 1rem;
    }
  }
`;

export const MainTitlePr1nt = css`
  @media print {
    color: black;
    text-shadow: none;
    border-bottom: 3px solid ${props => props.theme.mainColor1};
    text-align: left;
    padding-bottom: 1px;
    margin-top: 2px;
  }
`;

export const WrapperSingleMattPr1nt = css`
  @media print {
    box-shadow: none;
  }
`;

// ////////////////////////////////

// Image View

export const BigBannerPrint = css`
  @media print {
    font-size: 1rem;
    border-bottom: 4px solid ${props => props.theme.mainColor2};
    color: black;
    text-align: left;
    padding-bottom: 0px;
  }
`;
