import './DeleteProductModal.scss';

const DeleteProductModal = ({ itemToDel, setItemToDel, setIsDelete }) => {
  const cancelFunc = () => {
    setIsDelete(false);
    setItemToDel({});
  }
  return (
    <div className='DeleteProductModal'>
      <div className='delete-modal-main'>
        <h1>Delete product</h1>
        <p>Are you sure you want to remove this product "{itemToDel.name}"?</p>
        <div className='delete-modal-buttons'>
          <button onClick={() => cancelFunc()}>Cancel</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
};

export default DeleteProductModal;