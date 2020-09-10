import React, { useReducer } from "react";
import styled from "styled-components";
import { colors } from "../../utils/styles";

const FormRoot = styled.form`
  .container {
    display: flex;
    justify-content: space-around;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  .user-box {
    position: relative;
    width: 40%;
    input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
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
`;

const initialState = {
  name: "",
  email: "",
  tel: "",
  type: "",
  message: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "tel":
      return { ...state, tel: action.payload };
    case "type":
      return { ...state, type: action.payload };
    case "message":
      return { ...state, text: action.payload };
    default:
      throw new Error();
  }
};

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
              id="name"
              name="name"
              autoComplete="name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />
            <label htmlFor="name" id="name">
              Name
            </label>
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
        </div>

        <label htmlFor="message">
          How can I help?
          <textarea
            onChange={(e) =>
              dispatch({ type: "message", payload: e.target.value })
            }
            placeholder="Price match info"
            required
            type="text"
            value={state.message}
            name="note"
          />
        </label>
        <button type="submit">Submit</button>
      </feildset>
    </FormRoot>
  );
};

export default ContactUsForm;
