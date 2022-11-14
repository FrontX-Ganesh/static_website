import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/ProductContext';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { isSingleProduct, isSingleLoading, getSigleProducts } = useContext(AppContext);
  const { id } = useParams();

  const {
    id : alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews
  } = isSingleProduct;

  useEffect(()=>{
    getSigleProducts(`${API}?id=${id}`);
  },[])

  if(isSingleLoading){
    return <div class="loader"></div>
  }

  return (
    <>
      <div>Single Product {name}</div>
    </>
  )
}

export default SingleProduct;