<script>
  export let title
  import { meta } from '../../site-config.js'
  $: pageTitle = title ? `${title} | ${meta.title}` : meta.title

  import { stores } from '@sapper/app'
  const { page } = stores()
  
  // $:console.log('page', $page)
</script>

<!-- TODO -->

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<!-- 
  // these destructures are kind of a disaster...

  const { 
    siteMetadata: {
      // rename title to siteTitle
      title: siteTitle,
      // rename about to siteExcerpt
      about: siteExcerpt,
      author
    }
   } = site

  const { 
    frontmatter: {
      // rename title to pageTitle
      title: pageTitle,
      meta: {
        // rename excerpt to pageExcerpt
        excerpt: pageExcerpt,
        categories,
        tags,
      } = {} // default to empty object for pages without meta data
    } = { title: 'Page Not Found' }, // set a default for the 404 page
    // rename excerpt to generatedExcerpt
    excerpt: generatedExcerpt
  } = props

  const getKeywords = () => {
    const keywords = []

    if (categories) {
      categories.map(category => keywords.push(category))
    }

    if (tags) {
      tags.map(tag => keywords.push(tag))
    }

    return keywords.join(', ')
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}

      meta={[
        {
          name: 'author',
          content: author
        },
        {
          name: 'description',
          content: pageExcerpt || generatedExcerpt || siteExcerpt
        },
        {
          name: 'keywords',
          content: getKeywords()
        },

        // TODO - social SEO work

        // facebook
        // {
        //   property: 'og:title',
        //   content: frontmatter.title
        // },
        // {
        //   property: 'og:description',
        //   content: metaDescription
        // },
        // {
        //   property: 'og:type',
        //   content: 'website'
        // },
        // twitter 
        // {
        //   name: 'twitter:card',
        //   content: 'summary'
        // },
        // {
        //   name: 'twitter:creator',
        //   content: siteMetadata.author
        // },
        // {
        //   name: 'twitter:title',
        //   content: frontmatter.title
        // },
        // {
        //   name: 'twitter:description',
        //   content: metaDescription
        // }
      ]}
    />
  )
} -->