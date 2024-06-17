// AddProduct.jsx
import React , { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

function AddProduct() {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        category: "children",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }

    const Add_Product = async () => {
        const formData = new FormData();
        formData.append('product', image);

        const uploadResponse = await fetch('http://localhost:4000/upload', {
            method: 'POST',
            body: formData,
        });
        const responseData = await uploadResponse.json();

        if (responseData.success) {
            const product = { ...productDetails, image: responseData.image_url };
            console.log(product);

            const addProductResponse = await fetch('http://localhost:4000/addproduct', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            });
            const data = await addProductResponse.json();

            if (data.success) {
                alert("Product Added");
            } else {
                alert("Failed");
            }
        }
    }

    return (
        <div className='add-product'>
            <div className='addproduct-itemfield'>
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
            </div>
            <div className='addproduct-price'>
                <div className='addproduct-itemfield'>
                    <p>Product Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
                </div>
                <div className='addproduct-itemfield'>
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className='addproduct-itemfield'>
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
                    <option value="adults">Adults</option>
                    <option value="children">Children</option>
                    <option value="students">Students</option>
                </select>
            </div>
            <div className='addproduct-itemfield'>
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' alt="Upload Area" />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
        </div>
    )
}

export default AddProduct;
