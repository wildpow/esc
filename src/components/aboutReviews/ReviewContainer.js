import React, { Component } from "react";
import axios from "axios";
import Reviews from "./ReviewView";
import Loading from "../loading";

class ReviewContainer extends Component {
  _isMounted = false;

  constructor(...args) {
    super(...args);
    this.state = {
      loading: true,
      error: false,
      content: [],
      maxIndex: 0,
      local: false,
    };
  }

  componentWillMount() {
    let content = null;
    let maxIndex = null;
    if (typeof window !== "undefined" && window) {
      content = JSON.parse(localStorage.getItem("content"));
      maxIndex = localStorage.getItem("maxIndex");
    }
    if (content === null || maxIndex === null) {
      return null;
    }
    return this.setState({ content, maxIndex, local: true });
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get(process.env.GATSBY_REST)
      .then(res => {
        if (this._isMounted) {
          const { data } = res;
          const filteredData = data.filter(val => val.comments !== null);
          const maxIndex = filteredData.length - 1;
          localStorage.setItem("maxIndex", maxIndex);
          localStorage.setItem("content", JSON.stringify(filteredData));
          this.setState({
            content: filteredData,
            loading: false,
            maxIndex,
          });
        }
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
    // this.loop();
  }

  render() {
    const { content, error, loading, maxIndex, local } = this.state;
    if (error) return <> </>;
    if (loading && local !== true) return <Loading />;
    return <Reviews maxIndex={maxIndex} content={content} />;
  }
}
export default ReviewContainer;
