import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({
  description = '',
  lang = 'en',
  meta = [],
  title,
}: SEOProps): React.ReactElement {
  const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery)

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      // eslint-disable-next-line quotes
      title={'Olacodes'}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site?.siteMetadata?.author || '',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        { name: 'robots', content: 'index' },
      ].concat(meta)}
    />
  )
}

// Types
type SEOProps = {
  description?: string
  lang?: string
  meta?: Meta
  title?: string
}

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

type PropertyMetaObj = {
  property: string
  content: string
}

type NameMetaObj = {
  name: string
  content: string
}

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default SEO
