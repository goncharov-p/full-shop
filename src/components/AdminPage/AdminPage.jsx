import AdminHeader from "../AdminHeader/AdminHeader";
import Search from "../Search/Search";
import { ReactComponent as Arrows } from "../utils/images/sortArrows.svg";
import { ReactComponent as Add } from "../utils/images/add.svg";
import { ReactComponent as Edit } from "../utils/images/edit.svg";
import { ReactComponent as Delete } from "../utils/images/delete.svg";
import './AdminPage.scss';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteProductModal from "../Modals/DeleteProductModal";

const AdminPage = () => {
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);
  const [itemToDel, setItemToDel] = useState({});
  const products = [
    {
      id: 1,
      name: 'Product name',
      quantity: 298,
      price: 2500,
      popularity: 10,
      date: "1 Jun 2020"
    },
    {
      id: 2,
      name: 'Product name',
      quantity: 298,
      price: 25600,
      popularity: 10,
      date: "1 Jun 2020"
    },
    {
      id: 3,
      name: 'Product name',
      quantity: 298,
      price: 2500,
      popularity: 10,
      date: "1 Jun 2020"
    },
    {
      id: 4,
      name: 'Product name',
      quantity: 298,
      price: 2560,
      popularity: 10,
      date: "1 Jun 2020"
    },
    {
      id: 5,
      name: 'Product name',
      quantity: 298,
      price: 2500,
      popularity: 10,
      date: "1 Jun 2020"
    }
  ]
  const delFunc = (item) => {
    setIsDelete(true);
    setItemToDel(item);
  }
  return (
    <div className="AdminPage">
      <AdminHeader />
      <div className="admin-page-main">
        <div className="admin-page-search-sort">
          <Search />
        </div>
        <div className="admin-page-products">
          <div className="admin-page-list">
            <div className="admin-page-list-head">
              <p className="admin-page-product-id">id {<Arrows />}</p>
              <p className="admin-page-product-name">Name {<Arrows />}</p>
              <p className="admin-page-product-price">Price {<Arrows />}</p>
              <p className="admin-page-product-popularity">Popularity {<Arrows />}</p>
              <p className="admin-page-product-date">Date {<Arrows />}</p>
            </div>
            <div className="admin-page-list-body">
              {
                products.map((item, index) => (
                  <div key={`item-${item.id}`} className={index % 2 != 0 ? 'admin-page-product-grey' : null}>
                    <p className="admin-page-product-id">{item.id}</p>
                    <p className="admin-page-product-name">{item.name}</p>
                    <p className="admin-page-product-price">$ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                    <p className="admin-page-product-popularity">{item.popularity}</p>
                    <p className="admin-page-product-date">{item.date}</p>
                    <div className="admin-page-item-svg" onClick={() => navigate(`/edit_product/${item.id}`)}><Edit /></div>
                    <div className="admin-page-item-svg" onClick={() => delFunc(item)}><Delete /></div>
                  </div>
                ))
              }
            </div>
            {isDelete ?
              <DeleteProductModal
                itemToDel={itemToDel}
                setItemToDel={setItemToDel}
                setIsDelete={setIsDelete}
              />
              :
              null}
          </div>
          <div className="admin-page-products-footer">
            <div className="admin-page-add-new" onClick={() => navigate('/create_product')}>
              <Add />
              <p>Add new Product</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminPage;