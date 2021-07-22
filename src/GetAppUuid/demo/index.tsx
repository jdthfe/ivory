import React from 'react';
import { GetAppUuid } from '@src/index';
const Demo = () => {
    return (
        <div className="GetAppUuid">
            <GetAppUuid>children</GetAppUuid>
            <GetAppUuid prop={'Hello World'}>children</GetAppUuid>
        </div>
    );
};

export default Demo;
