import React from "react";

function Pagination({ setPageNum, pageNum, pageQtt }) {

  const pagesArray = Array.from({length: pageQtt}, (_, i) => i + 1)

  const increaseNum = () => {
    // if (pageNum === pageQtt) return;
    setPageNum(pageNum + 1);
  };
  const decreaseNum = () => {
    // if (pageNum === 1) return;
    setPageNum(pageNum - 1);
  };
  const changePage = (e) => {
    const pageNum = Number(e.target.dataset.pagenum)
    setPageNum(pageNum)
  }
  return (
    <>
      <button disabled={pageNum === 1} onClick={decreaseNum}>-</button>
      {pagesArray.map(pageNum => (<button key={pageNum} data-pagenum={pageNum} onClick={changePage} >{pageNum}</button>))}
      <button disabled={pageNum === pageQtt} onClick={increaseNum}>+</button>
    </>
  );
}

export default Pagination;
