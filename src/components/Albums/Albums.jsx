import PropTypes from "prop-types";
import fetchAlbum from "../services/api";
import Pagination from "./Pagination/Pagination";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import Goback from "../Goback/Goback";

const Albums = () => {
  const [dataAlbum, setDataAlbum] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [perPage, setPerPage] = useState(10);

  //useEffect(() => {
  //  const getDataAlbum = async () => {
  //    setDataAlbum(await fetchAlbum());
  //    setIsLoad(false);
  //  };
  //  getDataAlbum();
  //}, []);

  useEffect(() => {
    fetchAlbum().then((data) => {
      setDataAlbum(data);
      setIsLoad(false);
    });
  }, []);

  const albumsToRender = () => {
    return dataAlbum.slice(pageNum * perPage - perPage, pageNum * perPage);
  };

  const newPageNum = (pageNum) => {
    setPageNum(pageNum);
  };

  const pageQtt = Math.ceil(dataAlbum.length / Number(perPage));
  return (
    <>
      {isLoad && <Loader size={50} wrapperClass="dna-wrapper" />}
      <Goback />
      <ul>
        {albumsToRender().map(({ userId, id, title }) => (
          <li key={id}>
            <p>
              <b>{id}</b>
              {title}
            </p>
          </li>
        ))}
      </ul>
      <Pagination pageQtt={pageQtt} pageNum={pageNum} setPageNum={setPageNum} />
    </>
  );
};

Albums.propTypes = {};

export default Albums;
