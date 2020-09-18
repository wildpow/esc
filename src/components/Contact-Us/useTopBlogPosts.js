import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { clean, win, clothes, tips } = useStaticQuery(
    graphql`
      query topblog {
        clean: datoCmsBlog(slug: { eq: "the-clean-shop-promise" }) {
          description
          slug
          title
          blogListImage {
            alt
            url
          }
        }
        win: datoCmsBlog(slug: { eq: "esc-mattress-center-wins-again" }) {
          description
          slug
          title
          blogListImage {
            alt
            url
          }
        }
        clothes: datoCmsBlog(slug: { eq: "clothes-for-kids" }) {
          description
          slug
          title
          blogListImage {
            alt
            url
          }
        }
        tips: datoCmsBlog(slug: { eq: "five-mattress-shopping-tips" }) {
          description
          slug
          title
          blogListImage {
            alt
            url
          }
        }
      }
    `,
  );
  const topBlogData = [clean, clothes, win, tips];
  return topBlogData;
};
