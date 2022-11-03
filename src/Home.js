import React from 'react';
import ShowFeatureProdcuts from './Components/ShowFeatureProdcuts';
import { useContext } from "react";
import { AppContext } from "./Context/ProductContext";

const Home = (props) => {

  const { featureProdcuts } = useContext(AppContext);

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