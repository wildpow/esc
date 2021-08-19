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
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <div id="modal-root" />
          {this.props.postBodyComponents}
          <script
            type="text/javascript"
            src="https://birdeye.com//embed/v6/154743411347922/1/900941696/b05e6962db603884439e32ac46441ee35b22fe79baaa83b3"
          />
          <div id="bf-revz-widget-900941696" />
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
