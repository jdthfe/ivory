import { GetAppUuidProps, GetAppUuidResult } from './PropsType';


const GetAppUuid = (props?: GetAppUuidProps) => {
    console.log(props);

    const promFun = new Promise<GetAppUuidResult>((resolve) => {
        try {
            // 如果是 ios版的 app
            if (
                window &&
                window.webkit &&
                window.webkit.messageHandlers &&
                window.webkit.messageHandlers.JDAppUnite &&
                window.webkit.messageHandlers.JDAppUnite.postMessage
            ) {
                console.log(`ios window.webkit.messageHandlers.JDAppUnite.postMessage`);
                const originalGetPhoneBasicInfo = window.getPhoneBasicInfo;
                window.getPhoneBasicInfo = function (data: any) {
                    console.log('window.webkit.messageHandlers.JDAppUnite.postMessage==>', data);
                    resolve(data);
                    window.getPhoneBasicInfo = originalGetPhoneBasicInfo;
                };
                window.webkit.messageHandlers.JDAppUnite.postMessage({
                    method: 'getPhoneBasicInfo',
                    params: 'callBackName',
                });
                // 如果是 Android版的 app
            } else if (window && window.JdAndroid && window.JdAndroid.getAppParams) {
                console.log(`window.JdAndroid.getAppParams`);
                const data = window.JdAndroid.getAppParams();
                console.log('window.JdAndroid.getAppParams == > ', data);
                resolve(data);
            } else {
                console.log(`getAppUuid failed`);
                resolve({
                    uuid: '',
                    clientVersion: '',
                    d_brand: '',
                    d_model: '',
                    cartuuid: '',
                    area: '',
                    statusBarHeight: '',
                });
            }
        } catch (e) {
            console.log(`获取 app 信息失败`, e);
            // 获取失败
            resolve({
                uuid: '',
                clientVersion: '',
                d_brand: '',
                d_model: '',
                cartuuid: '',
                area: '',
                statusBarHeight: '',
            });
        }
    });

    return promFun;
};

export default GetAppUuid;
