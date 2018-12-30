import styled from '@emotion/styled'

export const ArticleContainer = styled.div`
  box-sizing: border-box;
  background: white;
  width: 100%;
`

export const HeaderImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${props => `url(${props['data-headerimageurl']})`};
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.h1`
  box-sizing: border-box;
  padding: 16px 32px;
  margin: 16px auto 32px;
  width: 100%;
  max-width: 800px;
  font-weight: bold;
  font-size: 1.8rem;
`

export const Body = styled.div`
  box-sizing: border-box;
  padding: 0 32px 16px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  strong {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p,
  h3 {
    margin-bottom: 24px;
  }

  p {
    line-height: 1.8;
  }

  img {
    width: 100%;
    margin-bottom: 16px;
  }

  blockquote {
    margin: 24px;
    position: relative;
    line-height: 1.5;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -24px;
      width: 4px;
      background: ${props => props.theme.colors.primary};
      height: 100%;
    }
  }
`
