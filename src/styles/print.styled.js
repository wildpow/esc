/* eslint-disable import/prefer-default-export */
import { css } from "styled-components";
import { colors } from "./theme.styled";

export const DisplayNonePrint = css`
  @media print {
    display: none;
  }
`;

// Mattress Templete
export const DescriptionPrint = css`
  @media print {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
`;

// export const ListPrint = css`
//   @media print {
//     margin-top: 5px;
//     h3 {
//       font-size: 1.1rem;
//     }
//     ul li {
//       font-size: 0.9rem;
//     }
//   }
// `;

export const MainTitlePrint = css`
  @media print {
    color: black;
    text-shadow: none;
    border-bottom: 3px solid ${colors.brandBlue};
    text-align: left;
    padding-bottom: 1px;
    margin-top: 2px;
  }
`;

export const WrapperSingleMattPrint = css`
  @media print {
    box-shadow: none;
  }
`;
