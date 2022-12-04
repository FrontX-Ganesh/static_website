import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/ProductContext';
import FormatPrice from '../Helper/FormatPrice';
import '../Css/SingleProduct.css';

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

  console.log(isSingleProduct);

  if(isSingleLoading){
    return <div className="loader"></div>
  }

  return (
    <>
      <div className='productData'> 
        <div className='productImages'>
          Product All Images..........
        </div>
        <div className='productDetails' style={ {width:'40%'} }>
          <h1>{ name }</h1>
          <div>{ stars }</div>
          <div>{ reviews } { (reviews <= 1) ? 'Review' : 'Reviews' }</div>
          <div>MRP :- <del> <FormatPrice price = {price + 2500}/></del></div>
          <div>Deal Of the Day :-  <FormatPrice price = {price}/> </div>
          <div>{ description }</div>
          <div style={{display : 'flex', justifyContent: 'space-between'}}><p> Fast Delivery </p> <p> 30 Days Replacemnt  </p> <p> Ganesh Delivered </p> <p> 1 Year Warrenty </p></div>
          <div> <p> Available : <span> {stock > 0 ? 'In Stock' : 'Not Available'} </span> </p></div>
          <div> ID :- <span> { id } </span></div>
          <div> Brand :- <span> { company } </span></div>
          
        </div>
      </div>
    </>
  )
}

export default SingleProduct;