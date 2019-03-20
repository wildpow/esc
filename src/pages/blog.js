import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import {
  Section,
  Homebutton,
  ShowMoreWrapper,
  Main,
} from "../styles/blogListStyles";
import { H2 } from "../styles/mainStyles";
import Layout from "../components/layout";
import BlogList from "../components/blog/blogList";
import SEO from "../components/seo";

class Blog extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    postsToShow: 4,
  };

  render() {
    const { data } = this.props;
    const { postsToShow } = this.state;
    const items = data.gcms.allPosts;
    return (
      <Layout>
        <SEO
          title="ESC: Blog"
          description="Come read about ways to achieve better sleep, and live healthier from people who have been helping people sleep better for 20+ years. Check here to see our schedule of professional speakers speaking on sleep topics."
          ogTitle="E.S.C. Mattress Center | Blog"
        />
        <Main>
          <header>
            <H2>Our Blog</H2>
          </header>
          <Section>
            <BlogList items={items} count={postsToShow} />
            <ShowMoreWrapper>
              {postsToShow < items.length && (
                <Homebutton
                  onClick={() => {
                    this.setState({
                      postsToShow: postsToShow + 4,
                    });
                  }}
                >
                  Show More Posts
                </Homebutton>
              )}
            </ShowMoreWrapper>
          </Section>
        </Main>
      </Layout>
    );
  }
}
export default Blog;

export const blogList = graphql`
  query blogList {
    gcms {
      allPosts(orderBy: dateAndTime_DESC, filter: { isPublished: true }) {
        slug
        title
        dateAndTime
        coverImage {
          handle
        }
        id
      }
    }
  }
`;
