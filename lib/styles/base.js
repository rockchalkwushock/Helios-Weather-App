import { colors, fonts } from './global'

export default () => `
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.primary};
    color: ${colors.secondary};
    font-family: ${fonts.primary};
    font-size: 1em;
    line-height: 1.5;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    width: 100vw;
  }

  a {
    color: #23f;
    text-decoration: none;
  }

  a:visited { color: #23f; }

  h1, h2, h3 {
    margin: 0;
  }
`
