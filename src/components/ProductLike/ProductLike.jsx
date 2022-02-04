import react,{useEffect,useState} from "react";
import axios from "axios";
import Header from "../Header/Header";
import Product from "../Product/Product";
import CategoryModal from "../Modals/CategoryModal";
import './ProductLike.scss';


const ProductLike = () => {
    const[likeProduct,setLikeProduct] = useState([]);

    useEffect(async () => {
        await axios
          .get(
            // `http://192.168.2.94:8080/products/getProducts?limit=${}&page=${}`
          )
          .then((res) => {
            setLikeProduct(res.data);
          });
      }, []);

    return (
        <div>
            <Header />
            <div>
            <h1 id = "favorite-product-h1">My favorite products</h1>       
            <CategoryModal />
            </div>
            <Product />
        </div>
    );
}

export default ProductLike;