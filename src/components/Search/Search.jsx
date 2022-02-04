import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Search.scss";

const Search = () => {
  const [valueSearch, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [productSearch, setProductSearch] = useState([]);
  const [product, setProduct] = useState([]);

  let searchRef = useRef();

  // const getSeach = async () => {
  //   await axios
  //     .get(
  //       `http://192.168.2.94:8080/products/getProductlike?name=${valueSearch}`
  //     )
  //     .then((res) => {
  //       setProductSearch(res.data.count);
  //     });
  // }

  // useEffect(async () => {
  //   await axios
  //     .get(
  //       `http://192.168.2.94:8080/products/getProducts`
  //     )
  //     .then((res) => {
  //       setProduct(res.data.count);
  //     });
  // }, []);

  // useEffect(()=>{getSeach()}, [valueSearch]);

  const itemClickHandler = (value) => {
    setSearch(value);
    setOpen(!open);
  };

  const inputClickHandler = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!searchRef.current.contains(e.target)) {
        setOpen(false);
      }
    });
  });

  const searchFilter = product.filter((element) => {
    return element.name.toLowerCase().includes(valueSearch.toLowerCase());
  });

  return (
    <div ref={searchRef}>
      <form className="Search-Form" onFocus={() => setOpen(true)}>
        <input
          type="text"
          placeholder="Search"
          className="Search-input"
          value={valueSearch}
          onClick={inputClickHandler}
          onChange={(event) => setSearch(event.target.value)}
        />
        <ul className="Autocomplete">
          {valueSearch && open
            ? searchFilter.map((element, index) => {
                return (
                  <li
                    key={index}
                    className="Autocomplete_Item"
                    onClick={() => itemClickHandler(element.name)}
                  >
                    {element.name}
                  </li>
                );
              })
            : null}
        </ul>
      </form>
    </div>
  );
};

export default Search;
