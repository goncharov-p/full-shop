import { ReactComponent as ShopSVG } from '../utils/images/headerShop.svg';
import { ReactComponent as MarkSVG } from '../utils/images/checkMark.svg';
import { ReactComponent as MarkUpSVG } from '../utils/images/checkMarkUp.svg';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import './AdminHeader.scss';
import AdminHeaderModal from '../Modals/AdminHeaderModal';


const AdminHeader = () => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="AdminHeader">
      <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="AdminHeaderLeft">
        <div onClick={() => navigate('/admin_page')}>
          <ShopSVG />
        </div>
        <div onClick={() => navigate('/admin_page')}>
          <h1><strong>E’Shop</strong></h1>
        </div>
      </div>
      <div className="AdminHeaderRight">
        {isModal ? <AdminHeaderModal /> : null}
        <div className='admin-call-modal' onClick={() => setIsModal(!isModal)}>
          <p>Admin Admin</p>
          {isModal ? <MarkUpSVG /> : <MarkSVG />}
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;