import React from 'react';
import '../Css/FeatureProducts.css';
import { Link } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';

const ShowFeatureProdcuts = ({ ele }) => {
    return (
        <>
            <div className="image-data">
                <Link to={`/single_product/${ele.id}`}>
                    <img src={ele.image} alt={ele.name} loading="lazy" />
                </Link>
                <div className='brand_info'>
                    <h3>{ele.company}</h3>
                    <h3><FormatPrice price={ele.price} /></h3>
                </div>
            </div>

        </>
    )
}

export default ShowFeatureProdcuts