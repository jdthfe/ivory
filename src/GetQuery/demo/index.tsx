import React, { useState } from 'react';

import { Button, WhiteSpace } from "@jdthfe/eui";
import { GetQuery } from '@src/index'

const Demo = () => {
    const originUrl = "https://cashier.jd.co.th/payment?transactionNo=202109181422355952178142483913&lang=th_TH#/";
    const [url, setUrl] = useState('');
    return <div className="GetQuery">
        {originUrl}
        <WhiteSpace size="xl" />

        <Button theme="primary" onClick={
            () => {
                setUrl(GetQuery('transactionNo', originUrl));
            }
        }>GetQuery('transactionNo')</Button>
        <WhiteSpace size="xl" />
        {url}

    </div>;
};

export default Demo;
