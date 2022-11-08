import React from 'react';
import ShowFeatureProdcuts from './ShowFeatureProdcuts';
import { useContext } from "react";
import { AppContext } from "../Context/ProductContext";

const Home = (props) => {

  const { isLoading, featureProdcuts } = useContext(AppContext);

  if(isLoading){
    return <div className='loading_images'> ........ Loading </div>
  }

  return (
    <>
      <div className='container'>
        {
          featureProdcuts.map((curEle, index) => {
            return(
              <ShowFeatureProdcuts ele={curEle} key={index} />
            );
          })
        }
      </div>
    </>
  )
}

export default Home;