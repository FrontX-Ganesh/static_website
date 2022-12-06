import React from 'react';

const ProductImages = ({ image  = [] }) => {
    
    return (
        <>  
            <div className='decoration'>
                {   
                    image.map((curEle, index) => {
                        return <img src={curEle.url} key={index} alt="hello" height={170} width={170}></img>
                    })
                }
            </div>
        </>
        
    )
}

export default ProductImages