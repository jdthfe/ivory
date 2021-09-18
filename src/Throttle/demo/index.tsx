import React from 'react';
import { Throttle } from '@src/index';
import { Button } from '@jdthfe/eui';
const Demo = () => {

    const fun = () => {
        console.log('Throttle');
    }

    return <div className="Throttle">

        <Button theme="primary" onClick={
            Throttle(fun, 1000)
        }>
            Throttle
        </Button>

    </div >;
};

export default Demo;
