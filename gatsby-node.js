const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve('src/templates/blog.js')
  const eventTemplate = path.resolve('src/templates/event.js')

  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) {
      return Promise.reject(errors)
    }

    res.data.allMarkdownRemark.edges.map(element => {
      let slug = element.node.frontmatter.slug

      if (slug) {
        //create page for blog using template
        if (slug.includes(`/blog/`)) {
          createPage({
            path: slug,
            component: blogTemplate,
          })
        } else if (slug.includes(`/events/`)) {
          createPage({
            path: slug,
            component: eventTemplate,
          })
        }
      }
    })
  })
}
