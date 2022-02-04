import { useNavigate } from 'react-router-dom';
import { ReactComponent as PersonSVG } from '../utils/images/person.svg';
import { ReactComponent as ReturnSVG } from '../utils/images/return.svg';
import './AdminHeaderModal.scss';

const AdminHeaderModal = () => {
  const navigate = useNavigate();

  return (
    <div className='AdminHeaderModal'>
        <div onClick={() => navigate('/profile')}>
        <PersonSVG />
        <p>Profile</p>
      </div>
      <div onClick={() => navigate('/login')}>
        <ReturnSVG />
        <p>Log Out</p>
      </div>
    </div>
  )
};

export default AdminHeaderModal;