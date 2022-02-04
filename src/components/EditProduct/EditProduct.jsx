import Header from "../Header/Header";
import { ReactComponent as Image } from "../utils/images/img.svg";
import { useEffect, useState } from "react";
import { ReactComponent as Back } from "../utils/images/back.svg";
import { ReactComponent as Hand } from "../utils/images/Growth.svg";
import { ReactComponent as Delete } from "../utils/images/delete.svg";
import { Navigate } from "react-router-dom";
import "./EditProduct.scss";

const EditProduct = () => {
	const [price, setPrice] = useState(2549)
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

	

  return (
    <div className="">
      <Header />
      <div className="back">
        <Back onClick={() => Navigate("/admin_page")} />
      </div>
      <div className="edit-product">
        <div className="column1">
          <div className="column-image">
            <div className="product-image">
              {preview ? <img className="img" src={preview} /> : <Hand />}
            </div>
          </div>
          <div className="upload-file">
            <div className="upload-line">
              <Image />
              <label htmlFor="input-file">Upload image</label>
              <input
                id="input-file"
                className="input-file"
                type="file"
                accept="image/jpeg"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="inputTab">
            <label>Date created:</label>
            <input type="date" />
          </div>
          <div className="inputTab">
            <label>Visible product:</label>
            <div className="visibility">
              <div className="vis-but">
                <input type="radio" id="off" value={false} name="visibility" />
                <label className="off-button" for="off">
                  Off
                </label>
              </div>
              <div className="vis-but">
                <input type="radio" id="on" value={true} name="visibility" />
                <label className="on-button" for="on">
                  On
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="top-line">
            <h2>Edit product</h2>
            <Delete />
          </div>
          <div className="inputTab">
            <label>Name:</label>
            <input maxLength={50} type="text" />
          </div>
          <div className="inputTab">
            <label>Description:</label>
            <textarea maxLength={300} className="description" type="text" />
          </div>
          <div className="inputTab">
            <label>Price:</label>
            <input type="text" value={'$', `${price}`} onChange={(e) => setPrice(e.target.value)}/>
          </div>
          <div className="inputTab">
            <label>Number of available products:</label>
            <input type="number" />
          </div>
          <div className="buttons">
            <button onClick={() => Navigate("/admin_page")}>Back</button>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
