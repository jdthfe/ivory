import { PingAsync } from '@src/index';

// 上报PingClick埋点
PingAsync.pingClick({
    report_eventid: 'TestPingClickEventID',
    page_param: 'TestPingClickParam'
});

// 上报PingPv埋点
PingAsync.pingPv({
    page_id: window.location.href,
});

// 上报曝光埋点
PingAsync.expLog({
    type: 'expLog',
    extJson: {},
});
