import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { BigPromo, PromoLink } from '../styles/topperStyles';

const TopPromo = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query toppers {
          topper {
            id
            currentpromo
        }
      }
    `}
    render={data => (
      <PromoLink 
        href="https://subscribe.mainstreethub.com/email/b1278150-e6a6-4cd5-8708-d72ade6c099a"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <BigPromo>
          {data.topper.currentpromo}
        </BigPromo>
      </PromoLink>
    )}
  />
  )
}

export default TopPromo

