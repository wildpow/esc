import React, { Component } from "react";
import {
  FormWrapper,
  Form,
  Label,
  Button,
  Input,
  ModalBox,
  ModalContainer,
  ModalButton,
  LabelWrapper,
} from "../styles/landingStyles";
import Modal from "./adFormModal";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class AdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      tel: "",
      showModal: false,
      disabled: false,
      opacity: 1,
      pointerEvents: "auto",
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleSubmit = e => {
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => this.handleShow())
      .catch(error => console.log(error));
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleHide() {
    const { disabled } = this.state;
    this.setState({
      showModal: false,
      disabled: !disabled,
      name: "",
      email: "",
      tel: "",
      opacity: 0.3,
    });
  }

  handleShow() {
    this.setState({ showModal: true, pointerEvents: "none" });
  }

  render() {
    const {
      name,
      email,
      tel,
      showModal,
      disabled,
      opacity,
      pointerEvents,
    } = this.state;
    const modal = showModal ? (
      <Modal>
        <ModalContainer onClick={this.handleHide}>
          <ModalBox>
            <h3>Thank You!</h3>
            <p>
              We will get in touch with you
              <br />
              within 24 hours
            </p>
            <ModalButton onClick={this.handleHide}>Close</ModalButton>
          </ModalBox>
        </ModalContainer>
      </Modal>
    ) : null;
    return (
      <FormWrapper style={{ opacity }}>
        <Form
          onSubmit={this.handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label htmlFor="form-name">
              Don’t fill this out:
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <LabelWrapper TopM>
            <Label>Name:</Label>
            <Input
              required
              placeholder="Mr. Sleeping Panda"
              type="text"
              name="name"
              autoComplete="name"
              // TODO:
              // I would like to have this field autoFocus but clicking on the map pin makes it fire
              disabled={disabled}
              value={name}
              onChange={this.handleChange}
            />
          </LabelWrapper>
          <LabelWrapper>
            <Label>Email:</Label>
            <Input
              required
              placeholder="youremail@example.com"
              type="email"
              name="email"
              autoComplete="email"
              disabled={disabled}
              value={email}
              onChange={this.handleChange}
            />
          </LabelWrapper>
          <LabelWrapper>
            <Label>Phone:</Label>
            <Input
              required
              autoComplete="tel-national"
              placeholder="###-###-####"
              pattern="^[0-9-+s()]*$"
              type="tel"
              name="tel"
              disabled={disabled}
              value={tel}
              onChange={this.handleChange}
            />
          </LabelWrapper>
          <Button type="submit" disabled={disabled} style={{ pointerEvents }}>
            Send
          </Button>
          {modal}
        </Form>
      </FormWrapper>
    );
  }
}

export default AdForm;
