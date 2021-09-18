import React from 'react';
import { Button, WhiteSpace } from '@jdthfe/eui';
import { PingAsync } from '@src/index';

const Demo = () => {
    return <div className="GetQuery">
        <Button theme="primary" onClick={() => {
            PingAsync.pingClick({
                report_eventid: 'TestPingClickEventID',
                page_param: 'TestPingClickParam'
            });
        }}>上报PingClick埋点</Button>
        <WhiteSpace size="xl" />
        <Button theme="primary" onClick={
            () => {
                PingAsync.pingPv({
                    page_id: window.location.href,
                });
            }
        }>上报PingPv埋点</Button>
        <WhiteSpace size="xl" />
        <Button theme="primary" onClick={() => {
            PingAsync.expLog({
                type: 'expLog',
                extJson: {},
            });
        }}>上报曝光埋点</Button>
    </div>;
};

export default Demo;



