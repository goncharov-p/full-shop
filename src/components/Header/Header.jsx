import { ReactComponent as ShopSVG } from '../utils/images/headerShop.svg';
import { ReactComponent as BasketSVG } from '../utils/images/basket.svg';
import { ReactComponent as MarkSVG } from '../utils/images/checkMark.svg';
import { ReactComponent as MarkUpSVG } from '../utils/images/checkMarkUp.svg';
import { useState } from 'react/cjs/react.development';
import './Header.scss';
import HeaderModal from '../Modals/HeaderModal';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState(false);

    return (
        <div className="Header">
            <div className="HeaderLeft">
                <div onClick={() => navigate('/home_page')}>
                    <ShopSVG />
                </div>
                <h1 onClick={() => navigate('/home_page')}><strong>E’Shop</strong></h1>
            </div>
            <div className="HeaderRight">
                <div onClick={() => navigate('/basket')}>
                    <BasketSVG />
                </div>
                <div className='AllModal'>
                    <div className='callModal' onClick={() => setIsModal(!isModal)}><p>Ivanov Ivan</p>{isModal ? <MarkUpSVG /> : <MarkSVG />}</div>
                    {isModal ? <HeaderModal /> : null}
                </div>
            </div>
        </div>
    );
}

export default Header;