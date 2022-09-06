import * as React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Default from "../../layout/Default";
import BlogView from "../../components/blogs/BlogView";


const BlogPage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allBlogsJson {
        edges {
          node {
            id: jsonId
            title
            date
            image {
              src {
                childImageSharp {
                  gatsbyImageData(
                    formats: JPG
                    placeholder: BLURRED
                  )
                }
              }
            }
            content
          }
        }
      }
    }
  `);

  const blogs = data.allBlogsJson.edges;

  const blog = blogs.filter(b => b.node.id === parseInt(props.params.id))[0];

  return (
    <Default>
      <main>
        <BlogView blog={blog} />
      </main>
    </Default>
  );
};


export default BlogPage;
