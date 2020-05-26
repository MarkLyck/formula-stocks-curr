import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import GenericLoader from '~/ui-components/Loader'
import LoadingError from '~/ui-components/Error/LoadingError'
import ArticleCard from './ArticleCard'
import { ArticlesList } from './styles'
import { ARTICLES_QUERY } from '~/common/queries'

const Articles = () => {
  const { loading, error, data } = useQuery(ARTICLE_QUERY)
  if (loading) return <GenericLoader />
  if (error) return <LoadingError />

  return (
    <ArticlesList>
      {data.allArticles.map((article) => (
        <ArticleCard article={article} key={article.title} />
      ))}
    </ArticlesList>
  )
}

export default Articles
