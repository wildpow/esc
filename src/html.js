import React from "react";
import PropTypes from "prop-types";
// https://fonts.gstatic.com
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
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700,700i&display=swap"
            rel="stylesheet"
          />

          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossorigin="anonymous"
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
