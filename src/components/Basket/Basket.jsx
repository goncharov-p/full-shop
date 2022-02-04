import Header from "../Header/Header";
import { ReactComponent as Product } from '../utils/images/product.svg';
import { ReactComponent as Minus } from '../utils/images/minus.svg';
import { ReactComponent as Plus } from '../utils/images/plus.svg';
import { ReactComponent as Cross } from '../utils/images/cross.svg';
import { ReactComponent as Checked } from '../utils/images/checked.svg';
import { ReactComponent as SuccesPaid } from '../utils/images/successPaid.svg';
import { ReactComponent as Back } from '../utils/images/back.svg';
import './Basket.scss';
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [isSuccessfullyPaid, setIsSuccessfullyPaid] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      isCheck: false,
      name: 'Product name',
      count: 2,
      allValue: 298,
      price: 2500
    },
    {
      id: 2,
      isCheck: true,
      name: 'Product name',
      count: 297,
      allValue: 298,
      price: 25600
    },
    {
      id: 3,
      isCheck: true,
      name: 'Product name',
      count: 99,
      allValue: 298,
      price: 2500
    },
    {
      id: 4,
      isCheck: true,
      name: 'Product name',
      count: 1,
      allValue: 298,
      price: 2560
    },
    {
      id: 5,
      isCheck: true,
      name: 'Product name',
      count: 99,
      allValue: 298,
      price: 2500
    }
  ]);
  const [counts, setCounts] = useState(0);
  const [total, setTotal] = useState(0);

  const selectAllFunc = () => {
    const newProducts = products.map(i => {
      i.isCheck = isSelectAll ? false : true;
      return i;
    });
    console.log(newProducts);
    setIsSelectAll(!isSelectAll)
    setProducts(newProducts);
  }
  const minusFunc = (item) => {
    if (item.count !== 0) {
      const newProducts = products.map(i => {
        if (i.id === item.id) i.count--;
        return i;
      })
      setProducts(newProducts);
    }
  }
  const plusFunc = (item) => {
    if (item.count < item.allValue) {
      const newProducts = products.map(i => {
        if (i.id === item.id) i.count++;
        return i;
      })
      setProducts(newProducts);
    }
  }
  const changeCheck = (id) => {
    const newProducts = products.map(i => {
      if (i.id === id) i.isCheck = !i.isCheck;
      return i;
    })
    setProducts(newProducts);
  }
  const deleteFunc = (id) => {
    const newProducts = [];
    products.forEach(i => {
      if (i.id !== id) newProducts.push(i);
    })
    console.log(newProducts);
    setProducts(newProducts);
  }
  const addDots = (elem) => {
    return elem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  useEffect(() => {
    console.log(123);
    let newCounts = 0;
    let newTotal = 0;
    products.map(item => {
      if (item.isCheck) {
        newCounts += item.count;
        newTotal += item.price * item.count;
      }
    })
    setCounts(newCounts);
    setTotal(newTotal);
  }, [products])

  return (
    <div className="Basket">
      <Header />
      <div className="basket-main">
        <div className="basket-back-svg" onClick={() => navigate('/home_page')}>
          <Back />
        </div>
        {
          isSuccessfullyPaid ?
            <div className="basket-paid">
              <SuccesPaid />
              <h1>Successfully paid products!</h1>
              <div className="basket-links">
                <p onClick={() => navigate('/home_page')}>Go back to the catalog</p>
                <p onClick={() => setIsSuccessfullyPaid(false)}>Go back to the basket</p>
              </div>
            </div>
            :
            <div className="your-basket">
              <h1>Your Backet</h1>
              <div className="basket-select-all-products">
                <div className="basket-all-checkbox" onClick={() => selectAllFunc()}>
                  {isSelectAll && <Checked />}
                </div>
                <label>Select all Products</label>
              </div>
              <div className="basket-product-list">
                {
                  products.map((item, index) => (
                    <div key={`item-${Math.random()}`} className={`basket-item-div ${index % 2 === 0 ? 'basket-grey' : null}`}>
                      <div className="basket-checkbox" onClick={() => changeCheck(item.id)}>
                        {item.isCheck && <Checked />}
                      </div>
                      <div className="basket-product-svg">
                        <Product />
                      </div>
                      <p className="basket-product-name">{item.name}</p>
                      <div className="basket-svg-div" onClick={() => minusFunc(item)}><Minus /></div>
                      <div className="basket-item-count">
                        <span>{item.count}</span>
                      </div>
                      <div className="basket-svg-div" onClick={() => plusFunc(item)}><Plus /></div>

                      <p>of   <strong>{item.allValue}</strong></p>
                      <h2><strong>${addDots(item.price * item.count)}</strong></h2>
                      <div className="basket-svg-div" onClick={() => deleteFunc(item.id)}><Cross /></div>
                    </div>
                  ))
                }
              </div>
              <div className="basket-footer">
                <p>Count products: <strong>{counts}</strong></p>
                <p>Total price: <strong>$  {addDots(total)}</strong></p>
              </div>
              <div className="basket-button-div">
                <button onClick={() => setIsSuccessfullyPaid(true)}>Pay now</button>
              </div>
            </div>
        }

      </div>
    </div>
  );
}

export default Basket;
