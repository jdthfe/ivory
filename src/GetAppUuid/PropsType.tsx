declare global {
    interface Window {
        // ios 相关的方法
        webkit?: any;
        // Android 相关的方法
        JdAndroid?: any;

        getPhoneBasicInfo: any;
    }
}

export interface GetAppUuidProps {
    /** description */
    prop?: string;
}

export type GetAppUuidResult = {
    uuid: string;
    clientVersion: string;
    d_brand: string;
    d_model: string;
    cartuuid: string;
    area: string;
    statusBarHeight: string;
}

