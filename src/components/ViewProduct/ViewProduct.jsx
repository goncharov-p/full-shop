import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { ReactComponent as Hand } from "../utils/images/Growth.svg";
import { ReactComponent as Minus } from "../utils/images/minus.svg";
import { ReactComponent as Plus } from "../utils/images/plus.svg";
import { ReactComponent as Back } from "../utils/images/back.svg";
import { useParams, useNavigate } from "react-router-dom";
import { ProductConstans } from "../utils/constans";
import { ReactComponent as SetFavorite } from "../utils/images/SetFavorite.svg";
import { ReactComponent as UnsetFavorite } from "../utils/images/UnsetFavorite.svg";
import "./ViewProduct.scss";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(3);
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState();

  const Navigate = useNavigate();

  useEffect(() => {
    const onlyProduct = ProductConstans.filter(
      (e) => Number(e.id) === Number(id),
    );
    setProduct(onlyProduct[0]);
    setPrice(onlyProduct[0].price);
  }, []);

  const minusProduct = () => {
    const minusOne = counter - 1;
    if (minusOne !== 0) {
      setCounter(minusOne);
      const wishedPrice = Number(product.price * minusOne);
      setPrice(wishedPrice);
    }
  };

  const plusProduct = () => {
    const plusOne = counter + 1;
    if (quantity >= plusOne) {
      setCounter(plusOne);
      const wishedPrice = product.price * plusOne;
      setPrice(wishedPrice);
    }
  };

  const changeFav = () => {
    const bool = !product.fav;
    setProduct({ ...product, fav: bool });
  };

  return (
    <div className="container-product">
      <Header />
      <div className="product-info">
        <div className="column-image">
          <Back onClick={() => Navigate("/home_page")} />
          <div className="product-image">
            <Hand />
          </div>
        </div>
        <div className="column-info">
          <div className="head-product">
            <h2>Name product</h2>
            <div className="like" onClick={() => changeFav()}>
              {!product.fav ? <SetFavorite /> : <UnsetFavorite />}
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet auctor dui. Aliquam sit amet nisi venenatis, laoreet nibh vel,
            mollis erat. Cras interdum, lectus vel imperdiet iaculis, massa
            neque pellentesque purus, id sollicitudin nibh ligula in arcu. Donec
            quis laoreet felis, sit amet sodales ex. Vestibulum fringilla lacus
            ut ante pulvinar ultrices. Duis rhoncus nisl eu nisi semper, vitae
            aliquam ipsum mattis. Morbi ac arcu orci.
          </p>
          <div className="price-info">
            <div className="counter-buy">
              <Minus onClick={() => minusProduct()} />
              <div className="krug">
                <span>{counter}</span>
              </div>
              <Plus onClick={() => plusProduct()} />
            </div>
            <div className="quantity-price">
              <div className="quantity-row">
                <p className="quantity">Available quantity:</p>
                <p className="number-quantity">{quantity}</p>
              </div>
              <div className="price-row">
                <p className="price">Total price:</p>
                <p className="number-price">$ {price}</p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => Navigate("/home_page")}>Back</button>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
