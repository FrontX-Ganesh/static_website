import React from 'react';

const ProductImages = ({ image }) => {
    if(image == undefined){
        return <div> Product Images Loading</div>
    }
    return (
        <>  
            <div>
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