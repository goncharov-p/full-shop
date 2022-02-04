import './Product.scss'
import { useState, useEffect } from 'react';
import { ReactComponent as GrowthSVG } from '../utils/images/Growth.svg';
import { ReactComponent as BasketSVG } from '../utils/images/basket.svg';
import {ReactComponent as SetFavoriteSVG} from '../utils/images/SetFavorite.svg'
import {ReactComponent as UnSetFavoriteSVG} from '../utils/images/UnsetFavorite.svg'
import { useNavigate } from "react-router-dom";
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import api from '../services/services';
import Pagination from '../pagination/Pagination';

const Product = () => {

    const [products, setProduts] = useState([]);
    const [favoriteText, setFavoriteText] = useState('setFavorite-text')
    let Navigate = useNavigate()

    const link = 'http://192.168.2.94:8080/products/getProducts?limit=10';
    
    useEffect( async () => {
        await api.get(`${link}`).then(res => {
            setProduts(res.data.rows);
        });
    }, [] )

    const changeFav = (id) => {
        const newProducts = products.map(item => {
            if(item.id === id) item.fav = !item.fav
            return item;
        })
        setProduts(newProducts)
    }

    useEffect(() => {
        setTimeout(() => {
            setFavoriteText('setFavorite-text-test')
          }, 3000)
    }, [favoriteText])

    const notificationOnClick = () => {
        Store.addNotification({
            message: "Product in favorites",
            type: "custom",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeIn"],

            dismiss: {
                duration: 100000,
            },
           
        })
    }

    //<img src={`http://192.168.2.94:8080/${product.image}`}></img>


    

    return (
        <div className="Product">
            <div >   <ReactNotifications /> </div> 
            <div className="Product-cards">
                {products.map((product) => (
                    <div className="Product-card" key={product.id}>
                        <div className='Product-card-description'> 
                            <span className='Product-card-description-text'>{product.description} </span>
                        </div>
                        
                       <div className='SetFavorite' onClick={() => {changeFav(product.id);}}> 
                       
                            {!product.fav ?  <SetFavoriteSVG  onClick={() => notificationOnClick()}/> : <div> <UnSetFavoriteSVG/> 
                                 </div> } 
                       </div>
                        <div className='Product-card-img-div'  onClick={() => Navigate(`/view_product/:id/${product.id}`)}>
                           <div className='Product-card-image'> <img src={`http://192.168.2.94:8080/${product.image}`}></img> </div>
                        </div>
                        <div className='Product-card-text'>
                            <div className='Product-card-text-div'>
                                <span>{product.name}</span>
                                <div className='Product-card-text-price'>
                                    <span> ${product.price}</span>
                                    <BasketSVG />
                                </div>
                            </div>
                        </div>
                    </div> //1
                ))}
                 <Pagination setProduts={setProduts} products={products} />
            </div>
           
        </div>
    );
}

export default Product;