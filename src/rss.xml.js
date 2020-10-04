// // syndication plugins
// {
//   resolve: `gatsby-plugin-feed`,
//   options: {
//     feeds: [
//       buildRSS({
//         title: 'ryanblog',
//         output: '/blog/code.rss.xml',
//         contentType: 'blog',
//         category: 'code',
//         custom_elements: [
//           {siteTitle: siteMetadata.title},
//           {siteUrl: siteMetadata.siteUrl},
//           {author: siteMetadata.author},
//           {headshot: siteMetadata.headshot},
//           {description: siteMetadata.description},
//           {about: siteMetadata.about}
//         ]
//       })
//     ],
//   },
// },

// // markdown to html converter
// const marked = require('marked')

// function buildRSS(config) {
//   const {
//     title,
//     output,
//     custom_elements,
//     contentType,
//     category
//   } = config

//   return {
//     title,
//     output,
//     custom_elements,
//     query: `
//       {
//         site {
//           siteMetadata {
//             siteUrl
//           }
//         },
//         allMdx(
//           limit: 12,
//           filter: {
//             fields: {contentType: { eq: "${contentType}" }},
//             frontmatter: { options: { published: { eq: true } } meta: { categories: { in: "${category}" } } }
//           },
//           sort: { order: DESC, fields: [frontmatter___meta___date]},
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 meta {
//                   excerpt
//                   date
//                   categories
//                   tags
//                 }
//               }
//               generatedExcerpt: excerpt
//               internal {
//                 content
//               }
//             }
//           }
//         }
//       }
//     `,
//     serialize: ({query: {site, allMdx }}) => {
//       const { siteUrl } = site.siteMetadata

//       return allMdx.edges.map(edge => {
//         const {
//           frontmatter: {
//             title,
//             meta: {
//               date,
//               excerpt,
//               categories,
//               tags
//             }
//           },
//           generatedExcerpt,
//           internal: {
//             content
//           }
//         } = edge.node

//         // fix image urls and strip off frontmatter
//         const body = content.replace(/<img src="\//g, `<img src="${siteUrl}/`).replace(/---([\S\s]*?)---/, '')

//         const url = `${siteUrl}/${edge.node.fields.slug}`
//         return {
//           title,
//           date,
//           url,
//           categories: [...categories, ...tags],
//           guid: url,
//           custom_elements: [
//             {'excerpt': excerpt || generatedExcerpt},
//             {'content:encoded': marked(body)}
//           ],
//         }
//       })
//     },
//   }
// }