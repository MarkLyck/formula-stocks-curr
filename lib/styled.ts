import styled, { CreateStyled } from '@emotion/styled'

type Theme = {
  colors: {
    primary: string
    secondary: string
    sideMenuColor: string
    lightText: string
    text: string
    title: string
    error: string
    border: string
    dbBackground: string
    // color names
    pink: string
    gray: string
    lightGray: string
    darkGray: string
    black: string
    white: string
    purple: string
    green: string
    red: string
    table: {
      hoverColor: string
    }
    warning: {
      light: string
      main: string
      dark: string
    }
    scale: {
      worst: string
      bad: string
      okay: string
      good: string
      perfect: string
    }
  }
}

export default styled as CreateStyled<Theme>
