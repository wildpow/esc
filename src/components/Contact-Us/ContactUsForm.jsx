import React, { useReducer } from "react";

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
    <form
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
        <legend>contact Information</legend>
        <label htmlFor="name">
          Name:
          <input
            required
            placeholder="Mr. Sleeping Panda"
            type="text"
            name="name"
            autoComplete="name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            required
            placeholder="youremail@example.com"
            type="email"
            name="email"
            autoComplete="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
          />
        </label>
        <label htmlFor="tel">
          Phone:
          <input
            required
            autoComplete="tel-national"
            placeholder="###-###-####"
            pattern="^[0-9-+s()]*$"
            type="tel"
            name="tel"
            value={state.tel}
            onChange={(e) => dispatch({ type: "tel", payload: e.target.value })}
          />
        </label>
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
    </form>
  );
};

export default ContactUsForm;
