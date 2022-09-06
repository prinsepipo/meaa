import * as React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./BlogList.scss";


const BlogList = () => {
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
                    width: 360
                    formats: WEBP
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const blogs = data.allBlogsJson.edges;

  return (
    <div className="blog-list">
      {blogs.map((item, i) => {
        const blog = item.node;
        const image = getImage(blog.image.src);

        return (
          <div className="blog-item" key={i}>
            <Link to={"/blogs/" + blog.id}>
              <GatsbyImage image={image} alt={blog.title + " thumbnail"} />
              <h3 className="blog-title">{blog.title}</h3>
              <small className="blog-date">{blog.date}</small>
            </Link>
          </div>
        );
      })}
    </div>
  );
};


export default BlogList;
