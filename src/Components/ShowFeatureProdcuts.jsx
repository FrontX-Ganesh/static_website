import React from 'react';
import '../Css/FeatureProducts.css'

const ShowFeatureProdcuts = ({ ele }) => {
    console.log(ele);
    return (
        <>
            <div className="image-data">
                <img src={ele.image} alt="" loading="lazy" />
                <h1>{ele.company}</h1>
            </div>
        </>
    )
}

export default ShowFeatureProdcuts