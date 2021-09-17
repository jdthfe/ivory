import React from 'react';
import { GetAppUuid } from '@src/index';
const Demo = () => {
    const test = () => {
        const testResult = GetAppUuid();
        console.log(testResult, 'testResult');


    };
    return (
        <div className="GetAppUuid">
            <div onClick={test}>Test GetAppUuid</div>
        </div>
    );
};

export default Demo;
