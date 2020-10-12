# Change log

All notable changes to this project will be documented in this file.

### October 2020

##### Features

- Added 'apply now' button for Synchrony financing [f345d9a](https://github.com/wildpow/new-esc-gatsby/commit/f345d9a54df1a146cbf1f4653a2f9c9b8af4d593)

##### Bug Fix

- Using a search proxy to help defray cost of [instasearch](https://github.com/algolia/react-instantsearch) sending empty search requests. Used [conditional requests](https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-requests/react/) PR [126](https://github.com/wildpow/new-esc-gatsby/pull/126)

### September 2020

##### Features

- Site wide search powered by [Algolia](https://www.algolia.com/) PR [123](https://github.com/wildpow/new-esc-gatsby/pull/123).
- 🤖 Added pre-commit hook. Project now following Conventional Commit spec with [commitlint](https://github.com/conventional-changelog/commitlint) and [husk](https://github.com/typicode/husky). [ad43fa3](https://github.com/wildpow/new-esc-gatsby/commit/26dd5dd08fde77d6edbefa494f2c89ff86e2d25d)
- Added new brand Nectar. Product list, landing and published products from CMS [ #119](https://github.com/wildpow/new-esc-gatsby/pull/118)
- New contact us form (Netlify forms) and thank you page for submissions [#121](https://github.com/wildpow/new-esc-gatsby/pull/121)
- Blog redesign🎉 Lazing load images in markdown with [gatsby-remark-images-datocms](https://github.com/datocms/gatsby-remark-images-datocms), local link catching with [gatsby-plugin-catch-links](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links), styling by [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography). [PR#122](https://github.com/wildpow/new-esc-gatsby/pull/122)

##### Bug Fixes

- Added missing meta tags for accessories list page.
- Updated all instances of `Brands` link text to `Mattresses`. [a115f0c](https://github.com/wildpow/new-esc-gatsby/commit/ad43fa3003f07aa94dd07b225bb38844ef55db8b), [786e9ca](https://github.com/wildpow/new-esc-gatsby/commit/a115f0c9eae7fe132ff4fa90fd311f0a6dd6357d)
- Webkit mobile now displays carousel correctly. [43b5f1e](https://github.com/wildpow/new-esc-gatsby/commit/51c5d0fb12899bee366bb5e290a4a7e3cfbf81e3)
- Aria-label in cart now displays correct item number. [5d18e3b](https://github.com/wildpow/new-esc-gatsby/commit/a9b5f6eed878e5cb87b327cd6fa12d69eb05767d)
- Cart close icon doesn't hide behind text on close anymore. [a9b5f6e](https://github.com/wildpow/new-esc-gatsby/commit/917adebcccc61fd5c55833fb9d4caaa4df8b51c7)
- Fixed square favicon build warnings [5344103](https://github.com/wildpow/new-esc-gatsby/commit/d57c36bc17877a9d66a517bd73c69a8216826eb4)
- Fixed `Invariant Voilation` build errors [issue #119](https://github.com/wildpow/new-esc-gatsby/issues/119)

---

### August 2020

##### Features

- 50%+ reduction on build times🎉 with [netlify-plugin-gatsby-cache](https://github.com/jlengstorf/netlify-plugin-gatsby-cache#readme)
- Automatically submit sitemap to search with [netlify-plugin-submit-sitemap](https://github.com/cdeleeuwe/netlify-plugin-submit-sitemap#readme)
- Auto generate `robot.txt` [#115](https://github.com/wildpow/new-esc-gatsby/pull/115)
- Auto generate `canonical` link tags [#116](https://github.com/wildpow/new-esc-gatsby/pull/116)
- [Art-directing](https://www.gatsbyjs.com/plugins/gatsby-image/#art-directing-multiple-images) new carousel images for mobile [#113](https://github.com/wildpow/new-esc-gatsby/pull/113), [e4d9bb1](https://github.com/wildpow/new-esc-gatsby/commit/edd94522eb119121eb4f83a377c0202d1603c130) ,[1e830b7](https://github.com/wildpow/new-esc-gatsby/commit/71e68a764685bbd86288a2333f02b18e5c1e5c14), [3f3f807](https://github.com/wildpow/new-esc-gatsby/commit/1e830b7873f39bc93f092de6976d20db5d39d03c), [4937a56](https://github.com/wildpow/new-esc-gatsby/commit/3f3f8075a9044e4374f8baa154b1838c74cd7346)
- New brand Posh and Lavish with landing page [#112](https://github.com/wildpow/new-esc-gatsby/pull/112)
- Panda logo now comes from CMS and is lazy [#110](https://github.com/wildpow/new-esc-gatsby/pull/110)
- Home page redesign [#109](https://github.com/wildpow/new-esc-gatsby/pull/109).
- Accessibility updates [52ecf4b](https://github.com/wildpow/new-esc-gatsby/commit/52ecf4b613e841e2424ffb38c9e624ca01fc5cbd)
- Print styles [#108](https://github.com/wildpow/new-esc-gatsby/pull/108)
- Added change log ✌🏽[86bcdc4](https://github.com/wildpow/new-esc-gatsby/commit/786e9ca3412f52646388b43af164abed827bc2f5)

##### Bug Fixes

- Filter sort panel showing up empty in FireFox [#111](https://github.com/wildpow/new-esc-gatsby/pull/111)
- Remove service worker due to serving stale cache [#111](https://github.com/wildpow/new-esc-gatsby/pull/111)
