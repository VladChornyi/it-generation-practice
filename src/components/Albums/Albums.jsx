import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchAlbum from "../services/api";

class Albums extends Component {
  state = {
    dataAlbum: [],
    isLoad: false,
    error: "",
  };

  async componentDidMount() {
    console.log(fetchAlbum());
    this.setState({ dataAlbum: await fetchAlbum() });
  }

  render() {
    return (
      <ul>
        {this.state.dataAlbum.map(({ userId, id, title }) => (
          <li key={id}>
            <p>
              <b>Title:</b>
              {title}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

Albums.propTypes = {};

export default Albums;
