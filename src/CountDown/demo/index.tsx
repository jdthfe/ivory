import React, { useState } from 'react';
import { CountDown, Button } from '@src/index';
const Demo = () => {
    const cFun = () => {
        console.log('倒计时结束');
    };
    const [go, setGo] = useState(false);
    return (
        <div>
            <div>
                <Button onClick={() => setGo(!go)} theme="primary">
                    Go
                </Button>
                {/* <h5>倒计时1天</h5>
                <CountDown endDate={endData} unit={['天', '时', '分', '秒']} type={4} />
                <h5>倒计时180秒</h5>
                <CountDown endDate={180} unit={[':', ':']} type={3} />
                <h5>倒计时307秒</h5>
                <CountDown endDate={307} unit={[':', ':']} type={3} />
                <h5>倒计时120秒</h5>
                <CountDown type={1} endDate={120} /> */}
                <h5>倒计时5秒</h5>
                <CountDown type={1} go={go} endDate={50} timeUp={cFun} />
            </div>
        </div>
    );
};

export default Demo;
