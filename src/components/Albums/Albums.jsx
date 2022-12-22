import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchAlbum from "../services/api";
import Pagination from "./Pagination/Pagination";
import Loader from "../Loader/Loader";

class Albums extends Component {
  state = {
    dataAlbum: [],
    isLoad: true,
    error: "",
    pageNum: 1,
    perPage: 10,
  };

  async componentDidMount() {
    this.setState({
      dataAlbum: await fetchAlbum(),
      isLoad: false,
    });
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
    const pageQtt = Math.ceil(
      this.state.dataAlbum.length / Number(this.state.perPage)
    );
    return (
      <>
        {this.state.isLoad && <Loader size={50} wrapperClass="dna-wrapper" />}
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
