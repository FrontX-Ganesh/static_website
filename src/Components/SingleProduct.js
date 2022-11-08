import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/ProductContext'


const SingleProduct = () => {
  
  const API = "https://api.pujakaitem.com/api/products";
  const { id } = useParams();
  const { isSingleLoading, isSingleProduct, getSigleProducts } = useContext(AppContext);
  
  useEffect(()=>{
    getSigleProducts(`${API}?id=${id}`);
  },[])

  if(isSingleLoading){
    return <div>....... Single Product Loading</div>
  }


  return (
    <>
      <div>Single Product</div>
    </>
  )
}

export default SingleProduct;