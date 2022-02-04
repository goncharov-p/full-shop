import React, { useState, useEffect } from "react";
import "./pagination.scss";
import axios from "axios";
import api from "../services/services"

const Pagination = ({setProduts,products}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [number, setNumber] = useState(10);
  const quantityGoods = [5, 10, 25, 50, 100, 150];
  const [paginat,setPaginat] = useState([]);
  const [count,setCount] = useState();

  useEffect(async () => {
    await api.get(`/products/getProducts?limit=${number}&page=${currentPage}`
      )
      .then((res) => {
          setProduts(res.data.rows);
          setCount(res.data.count)
      });
  }, [currentPage, number]);
  

  const nextPage = () =>{if(currentPage<pageNumbers.length){setCurrentPage((prev) => prev + 1)}};
  const prevPage = () => {if(currentPage>1){setCurrentPage((prev) => prev - 1)}};;

  const pageNumbers = [];

  for (let i = 1;i <= Math.ceil(count/ number); i++) {
   pageNumbers.push(i);

  }
console.log(products);
  return (
    <div className="pagination">
      <p className="p-pagination">Products per on page:</p>

      <select
        value={number}
        className="select-pagination"
        onChange={(e) => setNumber(e.target.value)}
      >
        {quantityGoods.map((element, index) => (
          <React.Fragment key={index}>
            <option value={element}>{element}</option>
          </React.Fragment>
        ))}
      </select>

      <ul id="pagination-flickr">
        <li className="page-item">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              prevPage();
            }}
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                fill="black"
                fillOpacity="0.2"
              />
            </svg>
          </a>
        </li>
        {pageNumbers.map((element,index) => {
          if ( 
            element === 1 ||
            element === currentPage ||
            element === pageNumbers.length ||
            Math.abs(currentPage - element)<2   
          ) {return(
            <li className="page-item" key={index}>
              <a
                href=""
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(element);
                }}
              >
                {element}
              </a>
            </li>)
          }else if( Math.abs(currentPage - element)===2 ){
            return (<li className="li-dot"> <div>• • •</div></li>);
          } else if( Math.abs(currentPage - element)<=3 ){
            return (null);
          }
})}
        <li className="page-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.590027 10.59L5.17003 6L0.590027 1.41L2.00003 0L8.00003 6L2.00003 12L0.590027 10.59Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
