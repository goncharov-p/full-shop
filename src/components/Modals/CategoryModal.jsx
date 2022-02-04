import {useState, useEffect, useRef} from 'react'
import './Category.scss'
import { ReactComponent as CategoryModalSvg } from '../utils/images/CategoryModal.svg';
import CategoryModalB from '../utils/images/CategoryModalB.svg'

const CategoryModal = () => {
    const [categoriesModal, setCategoriesModal] = useState(false)
    let menuRef = useRef()

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if(!menuRef.current.contains(e.target)) {
                setCategoriesModal(false)
            }
        })
    })

    return (
    
        <div>
        <img className='Categories-modal-img' src={CategoryModalB} onClick={() => setCategoriesModal(true)}/>
        {categoriesModal ?  
         <div className="Category-modal" onClick={(e) => e.stopPropagation()}>
            <div className='Category-modal-svg' >
                <CategoryModalSvg onClick={() => setCategoriesModal(false)}/>
            </div>
            <div ref={menuRef} className='Category-modal-categories'>
                <h2>Category</h2>
                <div className='Category-modal-categories-list'>
                    <h3>Children</h3>
                    <div className='Categories-list-text' onClick={() => setCategoriesModal(false)}>
                        <span className='Span-category-one'>Category 1</span>
                        <span className='Span-category-another'>Category 2</span>
                        <span className='Span-category-another'>Category 3</span>
                    </div>
                </div>
                <div className='Category-modal-categories-list'>
                    <h3>For women</h3>
                    <div className='Categories-list-text' onClick={() => setCategoriesModal(true)}>
                        <span className='Span-category-one'>Category 1</span>
                        <span className='Span-category-another'>Category 2</span>
                        <span className='Span-category-another'>Category 3</span>
                    </div>
                </div>
                <div className='Category-modal-categories-list'>
                    <h3>For men</h3>
                    <div className='Categories-list-text' onClick={() => setCategoriesModal(true)}>
                        <span className='Span-category-one'>Category 1</span>
                        <span className='Span-category-another'>Category 2</span>
                        <span className='Span-category-another'>Category 3</span>
                    </div>
                </div>
            </div>
            
        </div>
        :null
        }
        </div>
    );
}

export default CategoryModal;