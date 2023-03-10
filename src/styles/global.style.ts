import { globalCss } from '@stitches/react'

export const globalStyle = globalCss({
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      border: 0,
      fontSize: '100%',
      font: 'inherit',
      padding: 0,
      verticalAlign: 'baseline',
      margin: 0
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
    {
      display: 'block'
    },
  body: { lineHeight: '150%' },
  'ol, ul': { listStyle: 'none' },
  'blockquote, q': { quotes: 'none' },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: 'none'
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0
  },
  'button, a': { cursor: 'pointer' },
  a: { textDecoration: 'none' },
  '*::before, *, *::after': {
    boxSizing: 'border-box',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textRendering: 'optimizeLegibility'
  },
  html: { fontSize: '10px' }
})
