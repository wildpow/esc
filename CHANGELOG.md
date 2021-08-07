# Change log

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.
### July 2021
#### Bug Fix
- [PR #152](https://github.com/wildpow/esc/pull/152) Silence console warnings, update deps. and PropType fixes.
- Indicates which small image in carousel is still active after hover. [47d8e91]()
### June 2021
#### Bug Fix
- Removed 'Default title' text under product title in cart when product has no variants. [17c6078]()
- Review data in footer was not displaying in random production builds. [ec0d664]()
- Instagram link now goes to currect page. [534d0ca](https://github.com/wildpow/esc/commit/534d0ca2307b92f2f9ba24f6417de1c2c94d5eb5)
- Web chat now works again. [72b1934](https://github.com/wildpow/esc/commit/72b1934b41cfbcb823c7d136853277047362907b)
- Removed extra digits after decimal in cart total.[fd23a60](https://github.com/wildpow/esc/commit/fd23a60ae2f1482306049906e03ae873ca58da22)
### May 2021
#### Features
- ###### [PR #148](https://github.com/wildpow/esc/pull/148) Big bundle savings.
  - Now using [Preact](https://preactjs.com/) in production. -100Kb :tada:
  - The move from [Styled-Components](https://styled-components.com/) to [Emotion](https://emotion.sh/docs/introduction) and [Styled-Normalize](https://github.com/sergeysova/styled-normalize) to plain [normalize.css](https://github.com/necolas/normalize.css).
   (Not 100% sure why so much but, I'll take it) -124Kb :tada:
- ###### [PR #146](https://github.com/wildpow/esc/pull/146) Technical debit and dependancy upgrades.
  - 🚀 Moved to Gatsby v3.6 from v2
  - 💥 Migrated all images to the new `gatsby-plugin-image`.
  - :tada: Migrated to Shopify's newest release canidate for their brand new source plug-in.
  - :ghost: Migrated from Husky version 4 to version 6
  - Updated most minor dependencies to the latest versions.
  - Removed `react-anchor-link-smooth-scroll` from project and added prefers-reduced-motion media query.
  - More consistent file naming conventions.
  - Improved folder structure of the entire project.
  - Moved from deprecated typeface font packages to new fontsource packages.
  - Combined all style themes into one crossed project.
  - Cleaned up and rewrote a majority of components.
### April 2021
#### Features
- Added JSON-LD to blog posts
#### Bug Fix
- Fixed errors in main json-ld. Remove trailing commons. [dd84f52](https://github.com/wildpow/new-esc-gatsby/commit/dd84f52a29cc145cc9820dcbdbe165da1ff580ae)
- Updated visual sitemap with new mattress model from CMS. Complete rewrite is comming! [d08e7e7](https://github.com/wildpow/new-esc-gatsby/commit/dd84f52a29cc145cc9820dcbdbe165da1ff580ae)
- Fixed errors in product json-dl. Remove double quotes from descriptions of products. [2849033](https://github.com/wildpow/new-esc-gatsby/commit/28490339d8286351f83ce84fd97536bbd15ab0c8)

### March 2021

#### Features

- [PR #137](https://github.com/wildpow/new-esc-gatsby/pull/137)
  - Added foundation compatibility chart to mattresses in single product view.
  - New CSS of below the fold single product description.
  - Updated alignment and general CSS for single product feature list and form.

### February 2021

#### Features

- [PR #136](https://github.com/wildpow/new-esc-gatsby/pull/136)

  - Rewrote 'add to cart' notification.
  - Rewrote cart item indicator.
  - Cart UI clean up on mobile.
  - Cart now displays estimated tax per store location.
  - Cart is now disabled when empty.

- [PR #135](https://github.com/wildpow/new-esc-gatsby/pull/135)
  - Sheets now have a color picker instead of a variants being in one drop down.
  - Redesign on single product form:
    - Quantity input can no longer be less than 1 or greater than the maxQty prop.
    - Qty and Submit display on the same line when only one variant exists.
    - Single product form handling is now done by validation and disabling of form elements.
    - Removal of dedicated error components.
    - Added aria-labels to qty and sheet picker fields.
- [PR #133](https://github.com/wildpow/new-esc-gatsby/pull/133)
  - Complete over hull of back-end. All product data is now in DatoCMS leaving Shopify to just deal with pricing.
  - Product features now have descriptions.
  - Foundations/frames/boxsprings have been added to accessories.
  - Both product feature lists combine on mobile.
  - Now using one templet for all products besides mattresses.
  - Search should come back with more relevant results.
  - Tons of clean up and removal of dead code.
  - Sale banner for accessories.

##### Bug Fix

- Switched `react-focus-lock` import to avoid React rendering errors. [PR #136](https://github.com/wildpow/new-esc-gatsby/pull/136)
- Stopped crash if mattress variant does not have a corresponding foundation to size chosen [baf90d8]().
- Inch marker for profile in single product.
- About page now displays proper SEO tags for page.
- Env vars updated with out `GATSBY_` pre-fix if they don't need to be exposed at the component level.

### January 2021

##### Bug Fix

- Addressed structured data errors in Google Search console. [a8780d3](https://github.com/wildpow/esc/commit/a8780d34b91383d589aebfa2ba955cadd22ed489)
- Curser now displays as 'pointer' in single product view, shopping cart and nav icons [89cb345](https://github.com/wildpow/esc/commit/89cb34568f90e00e0b1ab52e456fb87f2e8c81c4)
- Product list sorting from Z-A now works as expected. [4723e8b](https://github.com/wildpow/esc/commit/4723e8b80342fadc2b179adb7026a234d1d3fa16)
- Single product tri-image component does not get cut off at the bottom anymore. [1d5b64e](https://github.com/wildpow/esc/commit/1d5b64e2b36cfd53707b31caf11c0a62a95e35dc)
- All Mattress view now uses the correct header. [f006df5](https://github.com/wildpow/esc/commit/f006df5efc481dc51359caec74d85bf07da4a0c1)

### December 2020

##### Features

- Updated Policies and warranty verbiage.
- Added alt data to almost all CMS hosted images.

---

### November 2020

##### Features

- Redesigned 'About Us' page 🎉 🎉 🎉 [PR 130](https://github.com/wildpow/new-esc-gatsby/pull/130)

##### Bug Fix

- Algolia now doesn't delete all records on build when there is records already published. [issue: 105](https://github.com/algolia/gatsby-plugin-algolia/issues/105)
- Rewrote unparsable structured data reported by Google Search console.

---

### October 2020

##### Features

- Added 'apply now' button for Synchrony financing [f345d9a](https://github.com/wildpow/new-esc-gatsby/commit/f345d9a54df1a146cbf1f4653a2f9c9b8af4d593)
- New route `/brands/list` lists all mattresses. Also works with url query strings. [PR 127](https://github.com/wildpow/new-esc-gatsby/pull/127)

##### Bug Fix

- Using a search proxy to help defray cost of [instasearch](https://github.com/algolia/react-instantsearch) sending empty search requests. Used [conditional requests](https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/react/) PR [126](https://github.com/wildpow/new-esc-gatsby/pull/126)
- Update all dependencies and remove old ones [PR 129](https://github.com/wildpow/new-esc-gatsby/pull/129)

---

### September 2020

##### Features

- Site wide search powered by [Algolia](https://www.algolia.com/) PR [123](https://github.com/wildpow/new-esc-gatsby/pull/123).
- 🤖 Added pre-commit hook. Project now following Conventional Commit spec with [commitlint](https://github.com/conventional-changelog/commitlint) and [husk](https://github.com/typicode/husky). [ad43fa3](https://github.com/wildpow/new-esc-gatsby/commit/26dd5dd08fde77d6edbefa494f2c89ff86e2d25d)
- Added new brand Nectar. Product list, landing and published products from CMS [ #119](https://github.com/wildpow/new-esc-gatsby/pull/118).
- New contact us form (Netlify forms) and thank you page for submissions [#121](https://github.com/wildpow/new-esc-gatsby/pull/121).
- Blog redesign🎉 Lazing load images in markdown with [gatsby-remark-images-datocms](https://github.com/datocms/gatsby-remark-images-datocms), local link catching with [gatsby-plugin-catch-links](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links), styling by [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography). PR [#122](https://github.com/wildpow/new-esc-gatsby/pull/122)

##### Bug Fixes

- Added missing meta tags for accessories list page.
- Updated all instances of `Brands` link text to `Mattresses`. [a115f0c](https://github.com/wildpow/new-esc-gatsby/commit/ad43fa3003f07aa94dd07b225bb38844ef55db8b), [786e9ca](https://github.com/wildpow/new-esc-gatsby/commit/a115f0c9eae7fe132ff4fa90fd311f0a6dd6357d)
- Webkit mobile now displays carousel correctly. [43b5f1e](https://github.com/wildpow/new-esc-gatsby/commit/51c5d0fb12899bee366bb5e290a4a7e3cfbf81e3)
- Aria-label in cart now displays correct item number. [5d18e3b](https://github.com/wildpow/new-esc-gatsby/commit/a9b5f6eed878e5cb87b327cd6fa12d69eb05767d)
- Cart close icon doesn't hide behind text on close anymore. [a9b5f6e](https://github.com/wildpow/new-esc-gatsby/commit/917adebcccc61fd5c55833fb9d4caaa4df8b51c7)

---

### August 2020

##### Features

- 50%+ reduction on build times🎉 with [netlify-plugin-gatsby-cache](https://github.com/jlengstorf/netlify-plugin-gatsby-cache#readme).
- Automatically submit sitemap to search with [netlify-plugin-submit-sitemap](https://github.com/cdeleeuwe/netlify-plugin-submit-sitemap#readme)
- Auto generate `robot.txt` [#115](https://github.com/wildpow/new-esc-gatsby/pull/115).
- Auto generate `canonical` link tags [#116](https://github.com/wildpow/new-esc-gatsby/pull/116).
- [Art-directing](https://www.gatsbyjs.com/plugins/gatsby-image/#art-directing-multiple-images) new carousel images for mobile.
  [#113](https://github.com/wildpow/new-esc-gatsby/pull/113), [e4d9bb1](https://github.com/wildpow/new-esc-gatsby/commit/edd94522eb119121eb4f83a377c0202d1603c130) ,[1e830b7](https://github.com/wildpow/new-esc-gatsby/commit/71e68a764685bbd86288a2333f02b18e5c1e5c14), [3f3f807](https://github.com/wildpow/new-esc-gatsby/commit/1e830b7873f39bc93f092de6976d20db5d39d03c), [4937a56](https://github.com/wildpow/new-esc-gatsby/commit/3f3f8075a9044e4374f8baa154b1838c74cd7346).
- New brand Posh and Lavish with landing page [#112](https://github.com/wildpow/new-esc-gatsby/pull/112).
- Panda logo now comes from CMS and is lazy [#110](https://github.com/wildpow/new-esc-gatsby/pull/110).
- Home page redesign [#109](https://github.com/wildpow/new-esc-gatsby/pull/109).
- Accessibility updates [52ecf4b](https://github.com/wildpow/new-esc-gatsby/commit/52ecf4b613e841e2424ffb38c9e624ca01fc5cbd).
- Print styles [#108](https://github.com/wildpow/new-esc-gatsby/pull/108).
- Added change log ✌🏽[86bcdc4](https://github.com/wildpow/new-esc-gatsby/commit/786e9ca3412f52646388b43af164abed827bc2f5).

##### Bug Fixes

- Filter sort panel showing up empty in FireFox [#111](https://github.com/wildpow/new-esc-gatsby/pull/111).
- Remove service worker due to serving stale cache [#111](https://github.com/wildpow/new-esc-gatsby/pull/111).
