import React from 'react';
import { Button } from '@jdthfe/eui';
import { CheckUA } from '@src/index';

const Demo = () => {
    return <div className="CheckUA">

        <Button theme="primary" onClick={() => {
            alert(JSON.stringify(CheckUA))
        }}>isAndroid</Button>
    </div>;
};

export default Demo;
