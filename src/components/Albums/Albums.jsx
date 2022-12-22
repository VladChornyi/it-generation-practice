import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchAlbum from "../services/api";
import Pagination from "./Pagination/Pagination";

class Albums extends Component {
  state = {
    dataAlbum: [],
    isLoad: false,
    error: "",
    pageNum: 1,
    perPage: 10,
  };

  async componentDidMount() {
    console.log(fetchAlbum());
    this.setState({ dataAlbum: await fetchAlbum() });
  }
  albumsToRender = () => {
    const { perPage, dataAlbum, pageNum } = this.state;
    return dataAlbum.slice(pageNum * perPage - perPage, pageNum * perPage);
  };

  setPageNum = (pageNum) => {
    this.setState({
      pageNum: pageNum,
    });
  };



  render() {
    const pageQtt = Math.ceil(this.state.dataAlbum.length / Number(this.state.perPage))
    return (
      <>
        <ul>
          {this.albumsToRender().map(({ userId, id, title }) => (
            <li key={id}>
              <p>
                <b>{id}</b>
                {title}
              </p>
            </li>
          ))}
        </ul>
        <Pagination
          pageQtt={pageQtt}
          pageNum={this.state.pageNum}
          setPageNum={this.setPageNum}
        />
      </>
    );
  }
}

Albums.propTypes = {};

export default Albums;
