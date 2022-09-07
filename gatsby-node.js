exports.createPages = async ({actions, graphql}) => {
  const data = await graphql(`
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

  const blogs = data.data.allBlogsJson.edges;

  blogs.forEach(({ node }) => {
    const blog = node;

    actions.createPage({
      path: "/blogs/" + blog.id,
      component: require.resolve("./src/components/blogs/BlogView.jsx"),
      context: {
        blog: blog
      },
    });
  });
};
