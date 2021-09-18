import React, { useState } from 'react';
import { Button, WhiteSpace } from '@jdthfe/eui';
import { FormatePrice } from '@src/index'
const Demo = () => {
    const originPrice = "123456789";
    const [price, setPrice] = useState('');
    return <div className="FormatePrice" >
        {originPrice}
        <WhiteSpace />
        <Button theme="primary" onClick={
            () => {
                setPrice(FormatePrice(originPrice));
            }
        }>FormatePrice</Button>
        <WhiteSpace />
        {price}
    </div>;
};

export default Demo;
