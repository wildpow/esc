import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";

const StructuredDataMain = () => (
  <HelmetDatoCms>
    <script type="application/ld+json">
      {`
            {
  "@context": "http://www.schema.org",
  "@type": "Store",
  "name": "E.S.C Mattress Center",
  "url": "https://www.escmattresscenter.com",
  "sameAs": [
    "https://escmattresscenter.com",
    "http://escmattresscenter.com"
  ],
  "brand": [{"@type": "Brand", "name": "Sealy"},
		{"@type": "Brand", "name":"BedTech"},
		{"@type": "Brand", "name": "Malouf"},
		{"@type": "Brand", "name":"Tempur-Pedic"},
		{"@type": "Brand", "name":"Stearns & Foster"}
	],
  "aggregateRating": {
		"@type": "AggregateRating",
		"ratingCount": "133",
		"reviewCount": "133",
		"bestRating": "5",
		"ratingValue": "4.9"
	},
  "logo": "https://www.datocms-assets.com/10836/1557349329-logo.png",
  "image": "https://www.datocms-assets.com/10836/1569974792-storeatnight.jpg",
  "description": "Locally owned mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic in Everett WA. We have twenty years of experience and non-commissioned staff.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10121 Evergreen Way #30",
    "addressLocality": "Everett",
    "addressRegion": "WA",
    "postalCode": "98204",
    "addressCountry": "United States"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.905270",
    "longitude": "-122.241165"
  },
  "hasMap": "https://g.page/ESCMattressCenter?share",
  "openingHours": "Mo 10:00-20:00 Tu 10:00-20:00 We 10:00-20:00 Th 10:00-20:00 Fr 10:00-20:00 Sa 10:00-19:00 Su 10:00-18:00",
  "telephone": "4257600875",
  "priceRange": "$149.99 - $6000.00"
}
      `}
    </script>
  </HelmetDatoCms>
);

export default StructuredDataMain;
