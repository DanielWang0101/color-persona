import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-divider:#d0d0d0;
    --color-loading:#d0d0d0;
    --color-dropdown-font:#000403;

    --color-black-background: #000403;
    --color-dark-font: #1D4555;
    --color-button-blue:  #0084ff;
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Poppins', sans-serif;
    --font-size-body:1rem;
    --font-size-option:0.7rem;

    --logo-font:'Petit Formal Script', cursive;
    --padding-page: 24px;
    --nav-height: 50px;
    --margin-top-main:70px;
    --margin-top-input:8px;
    --swatch-width:150px;
    --mini-swatch-width:40px;


   
    
  }

  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
      line-height: 1.5;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      
      line-height: 1;
      background-image: url("/ecomBackground.png");
      
      background-size: cover;

      /* background: rgb(49,165,157);
background: linear-gradient(90deg, rgba(49,165,157,1) 0%, rgba(226,154,167,1) 100%); */
      
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  h1,
h2,
h3,
label,
button {
  color: black;
  font-family: var(--font-heading);
  font-size: 32px;
}
p,
a,
li,
blockquote,
input {
  font-family: var(--font-body);
}

  input {
    font-size: 24px;
    height: 42px;
    border: 2px solid var(--color-orange);
    border-radius: 4px;
    padding: 0 12px;
  }

  svg { 
  cursor:crosshair; 
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  -moz-filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  -webkit-filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
`;
