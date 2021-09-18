import React, { useState } from 'react';
import { Button, WhiteSpace } from '@jdthfe/eui';
import { DeepObjectMerge } from '@src/index';
const Demo = () => {
    const messyObj1 = { o: { a: 3 } };
    const messyObj2 = { o: { b: 4 } };

    const [obj, setObj] = useState();
    return <div className="DeepObjectMerge">

        <span dangerouslySetInnerHTML={{ __html: `${JSON.stringify(messyObj1)}, ${JSON.stringify(messyObj2)}` }}>
        </span>
        <WhiteSpace size="xl" />

        <Button theme="primary" onClick={() => {
            const a = DeepObjectMerge(messyObj1, messyObj2);
            setObj(a)
        }}>
            DeepObjectMerge
        </Button>

        <WhiteSpace size="xl" />

        {JSON.stringify(obj)}

    </div>;
};

export default Demo;
