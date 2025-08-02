import React, { useEffect, useState } from 'react';

const GetCar = () => {
  
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
 


    return {products}
};

export default GetCar;