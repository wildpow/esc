import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700"
            as="fetch"
            crossorigin="anonymous"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
    
!function(e,n,t){"use strict";var o="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700",r="__3perf_googleFontsStylesheet";function c(e){(n.head||n.body).appendChild(e)}function a(){var e=n.createElement("link");e.href=o,e.rel="stylesheet",c(e)}function f(e){if(!n.getElementById(r)){var t=n.createElement("style");t.id=r,c(t)}n.getElementById(r).innerHTML=e}e.FontFace&&e.FontFace.prototype.hasOwnProperty("display")?(t[r]&&f(t[r]),fetch(o).then(function(e){return e.text()}).then(function(e){return e.replace(/@font-face {/g,"@font-face{font-display:swap;")}).then(function(e){return t[r]=e}).then(f).catch(a)):a()}(window,document,localStorage);

        `,
            }}
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript>
            This website requires JavaScript. To contact us, please send us an
            email at:{" "}
            <a href="mailto:info@escmattresscenter.com">
              info@escmattresscenter.com
            </a>
          </noscript>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <div id="modal-root" />
          {/* <form
            name="contact"
            netlify="true"
            netlify-honeypot="bot-field"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="tel" name="tel" />
          </form>

          <form
            name="makeOffer"
            netlify="true"
            netlify-honeypot="bot-field"
            hidden
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="tel" name="tel" />
            <textarea type="text" name="note" />
            <input type="text" name="mattress" />
            <input type="text" name="size" />
          </form> */}
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
