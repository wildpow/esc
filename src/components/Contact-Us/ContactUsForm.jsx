import React, { useReducer } from "react";
import styled from "styled-components";
import { colors, spacing, fontSize } from "../../utils/styles";
import { PrimaryButton } from "../shared/Buttons";
import SendIcon from "../../assets/paper-plane-solid.svg";
import ResetIcon from "../../assets/redo-solid.svg";

const FormRoot = styled.form`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-webkit-autofill:valid,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-transition-delay: 99999s;
    -webkit-text-fill-color: #d7d8ce;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  textarea {
    min-height: 150px;
  }
  .user-box {
    position: relative;
    width: 40%;
    input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: ${colors.gray["900"]};
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      background: transparent;
    }
    label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: black;
      pointer-events: none;
      transition: 0.5s;
    }
    input:focus ~ label,
    input:valid ~ label {
      top: -20px;
      left: 0;
      color: ${colors.blue["800"]};
      font-size: 12px;
    }
  }
  .bottom-buttons {
    display: flex;
    justify-content: space-between;
    padding-top: ${spacing["8"]};
  }
  .message {
    font-size: ${fontSize["3xl"]};
    font-weight: 700;
    textarea {
      /* border: 4px solid ${colors.gray[
        "300"
      ]};
      border-top: 4px solid #9b2c2c; */
    }
  }
`;

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  type: "",
  message: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "tel":
      return { ...state, tel: action.payload };
    case "type":
      return { ...state, type: action.payload };
    case "message":
      return { ...state, message: action.payload };
    case "reset":
      return { ...initialState };
    default:
      throw new Error();
  }
};
const FormButtons = styled(PrimaryButton)`
  padding-right: 20px;
  padding-left: 20px;
`;
const ContactUsForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join("&");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <FormRoot
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
    >
      <input type="hidden" name="bot-field" />
      <p hidden>
        <label htmlFor="form-name">
          Don’t fill this out:
          <input name="bot-field" onChange={() => console.log("Bot")} />
        </label>
      </p>

      <feildset>
        <div className="container">
          <div className="user-box">
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              value={state.firstName}
              onChange={(e) =>
                dispatch({ type: "firstName", payload: e.target.value })
              }
            />
            <label htmlFor="firstName" id="firstName">
              Fist Name
            </label>
          </div>
          <div className="user-box">
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              value={state.lastName}
              onChange={(e) =>
                dispatch({ type: "lastName", payload: e.target.value })
              }
            />
            <label htmlFor="lastName" id="lastName">
              Last Name
            </label>
          </div>
        </div>
        <div className="container">
          <div className="user-box">
            <input
              required
              autoComplete="tel-national"
              pattern="^[0-9-+s()]*$"
              type="tel"
              name="tel"
              value={state.tel}
              onChange={(e) =>
                dispatch({ type: "tel", payload: e.target.value })
              }
            />
            <label htmlFor="tel">Phone</label>
          </div>
          <div className="user-box">
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <label htmlFor="message" className="message">
          How can We help?
          <textarea
            onChange={(e) =>
              dispatch({ type: "message", payload: e.target.value })
            }
            required
            type="text"
            value={state.message}
            name="note"
          />
        </label>
        <div className="bottom-buttons">
          <FormButtons
            danger
            type="button"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
            <ResetIcon />
          </FormButtons>
          <FormButtons type="submit">
            Submit
            <SendIcon />
          </FormButtons>
        </div>

        {console.log(state)}
      </feildset>
    </FormRoot>
  );
};

export default ContactUsForm;
