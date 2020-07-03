import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

let modalRoot;
let mainRoot;
if (typeof document !== "undefined") {
  modalRoot = document.getElementById("modal-root");
  mainRoot = document.getElementById("___gatsby");
} else {
  modalRoot = "";
  mainRoot = "";
}

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    document.body.style.overflow = "hidden"; // make backgroup not scrollable
    mainRoot.style.position = "fixed";
    mainRoot.style.filter = "blur(5px) grayscale(50%)";
    mainRoot.style.width = "100%";
    mainRoot.style.height = "100%";
    mainRoot.style.transition = ".35s";
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.body.style.overflow = "visible";
    mainRoot.style.position = "static";
    mainRoot.style.filter = "blur(0px) grayscale(0%)";
    mainRoot.style.width = "auto";
    mainRoot.style.height = "auto";
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Modal;
