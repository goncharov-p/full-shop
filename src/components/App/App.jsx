import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ForgotPass from '../ForgotPass/ForgotPass';
import HomePage from '../HomePage/HomePage';
import Product from '../Product/Product';
import Basket from '../Basket/Basket';
import Profile from '../Profile/Profile';
import AdminPage from '../AdminPage/AdminPage';
import CreateProduct from '../CreateProduct/CreateProduct';
import EditProduct from '../EditProduct/EditProduct';

import ViewProduct from '../ViewProduct/ViewProduct';
import ProductLike from '../ProductLike/ProductLike';
import './App.scss';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/forgot_password/:link/' element={<ForgotPass />} />
        <Route path='/home_page' element={<HomePage />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin_page' element={<AdminPage />} />
        <Route path='/view_product/:id/:id/*' element={<ViewProduct />} />
        <Route path='/create_product' element={<CreateProduct />} />
        <Route path='/edit_product/:id' element={<EditProduct />} />
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/like_product/:id' element={<ProductLike />} />
      </Routes>
    </div>
  );
};

export default App;
