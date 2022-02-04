import { ReactComponent as PersonSVG } from '../utils/images/person.svg';
import { ReactComponent as FavoriteSVG } from '../utils/images/favorite.svg';
import { ReactComponent as ReturnSVG } from '../utils/images/return.svg';
import './HeaderModal.scss';
import { useNavigate } from 'react-router-dom';

const HeaderModal = () => {
    const navigate = useNavigate();
    return (
        <div className='HeaderModal'>
            <div onClick={() => navigate('/profile')}>
                <PersonSVG />
                <p>Profile</p>
            </div>
            <div>
                <FavoriteSVG />
                <p>Favorite product</p>
            </div>
            <div onClick={() => navigate('/login')}>
                <ReturnSVG />
                <p>Log Out</p>
            </div>
        </div>
    )
};

export default HeaderModal;