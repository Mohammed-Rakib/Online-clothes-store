import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit} = useForm();
    
    const [imageUrl, setImageUrl] = useState('');
    const onSubmit = (data) => {
        const productData = {
            name: data.name,
            size: data.size,
            price: data.price,
            imageUrl:imageUrl
        }
        const url = `https://young-shelf-43530.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        
        .then(data => {
            console.log('server side response', data);
        })
        
    }
    const handleImageChange = (product) => {
       
        const imageData = new FormData();
        imageData.set('key','fe834545cf9ccab761e32c03f567e890');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function (response) {
        setImageUrl(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
    <div className="container mt-5">
     <h1>Add your awesome T-shirt here</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
      <input className="form-control my-2" name="name" defaultValue="New Product" {...register("name")} />
      <input className="form-control" type="text" name="price" defaultValue="100" {...register("price", { required: true })}  />
      <input className="form-control my-2" type="text" name="size" defaultValue="XXL,XL,M,S" {...register("size", { required: true })}/>
      <input className="form-control" name="exampleRequired" type="file" onChange={handleImageChange} />
      <input className="form-control my-2 bg-outline-primary" type="submit" />
      </form>
     
    </div>
    );
};

export default AddProduct;