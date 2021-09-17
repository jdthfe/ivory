const CheckUA = {
    ua: (window.navigator.userAgent || "").toLowerCase(),

    isIos: /iphone|ipd|ipod/.test((window.navigator.userAgent || "").toLowerCase()),

    isAndroid: /android/.test((window.navigator.userAgent || "").toLowerCase()),

    isJDCAPP: /jdappthai/i.test((window.navigator.userAgent || "").toLowerCase()),

    isWeChat: /MicroMessenger/i.test((window.navigator.userAgent || "").toLowerCase()),

    isQQ: /MQQBrowser/i.test((window.navigator.userAgent || "").toLowerCase()),

    isSafari: /safari/i.test((window.navigator.userAgent || "").toLowerCase()),

    isLine: /line/i.test((window.navigator.userAgent || "").toLowerCase()),

    isDolfin: /t1w=t1w/i.test((window.navigator.userAgent || "").toLowerCase()) && /dolfin_JDC_SDK/i.test((window.navigator.userAgent || "").toLowerCase()),
};

export default CheckUA;
