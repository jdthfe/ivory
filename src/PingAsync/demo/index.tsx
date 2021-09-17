import React from 'react';
import { PingAsync } from '@src/index';
const Demo = () => {
    return (
        <div className="PingAsync">
            <PingAsync>children</PingAsync>
            <PingAsync prop={'Hello World'}>children</PingAsync>
        </div>
    );
};

export default Demo;
