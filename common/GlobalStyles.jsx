import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <Global
    styles={css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: inherit;
      }
    `}
  />
)

export default GlobalStyles
