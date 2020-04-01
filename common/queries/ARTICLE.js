import { gql } from 'apollo-boost'

export const ARTICLE_QUERY = gql`
  query ArticleQuery($title: String) {
    allArticles(filter: { title: $title }) {
      title
      body
      headerImageUrl
    }
  }
`

export const ARTICLES_QUERY = gql`
  query {
    allArticles {
      title
      body
      headerImageUrl
    }
  }
`
