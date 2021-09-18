export interface PingParams {
    event_id?: string;
    page_id?: string | number;
    page_no?: number;
    extJson?: any;
    page_param?: any;
    event_param?: any;
    [key: string]: any;
}

declare global {
    const MPing: any;
    const expLogJSON: any;
    interface Window {
        jap: any;
        MPing: any;
    }
}

class PingAsync {
    private loaded: boolean;
    private queue: any[];
    public constructor() {
        if (!window.jap) {
            window.jap = {
                siteId: 'JA2017_261847', //站点编号，必传字段
                autoLogPv: true, //是否自动上报pv
            };
        }
        this.queue = [];
        this.loaded = false;
        this.loadJs();
        window.addEventListener('load', this.loadJs.bind(this), false);
    }
    private setLoaded() {
        this.loaded = true;
        if (this.queue.length > 0) {
            while (this.queue.length != 0) {
                let type = this.queue[0].type;
                if (type === 'expLog') {
                    this.expLog(this.queue[0]);
                } else if (type === 'pv') {
                    this.pingPv(this.queue[0]);
                } else {
                    this.pingClick(this.queue[0]);
                }
                this.queue.shift();
            }
        }
    }
    public pingClick(option: PingParams = {}) {
        let _ = this;
        if (_.loaded) {
            let click = new MPing.inputs.Click(option.report_eventid);
            for (let key in option) {
                click[key] = option[key];
            }
            // click.event_param = option.event_param;
            // click.page_param = option.page_param;
            // click.event_level = option.event_level;
            click.updateEventSeries();
            let mping = new MPing();
            mping.send(click);
        } else {
            _.queue.push(option);
        }
    }

    public pingPv(option: PingParams = {}) {
        let _ = this;
        if (_.loaded) {
            var pv = new MPing.inputs.PV(option.page_id); // 构造pv 请求,可选参数为pageId，可以为数字、字符串、或者{page_id: "1212"}；如埋点方案未要求或者未提到pageid，请忽略，即 var pv = new MPing.inputs.PV();
            if (option.page_param) {
                pv.page_param = option.page_param;
            }
            var mping = new MPing(); // 构造上报实例
            mping.send(pv); // 上报pv
        } else {
            option.type = 'pv';
            _.queue.push(option);
        }
    }

    public expLog(option: PingParams = {}) {
        let _ = this;
        if (_.loaded) {
            expLogJSON('pv_stock', 'sku', JSON.stringify(option.extJson));
        } else {
            _.queue.push(option);
        }
    }

    private loadJs() {
        let _ = this;
        (function (d, s, id) {
            if (d.getElementById(id) && typeof MPing != 'undefined') {
                _.setLoaded();
                return;
            } else if (d.getElementById(id) && typeof MPing == 'undefined') {
                let wait = setInterval(function () {
                    if (typeof MPing != 'undefined') {
                        _.setLoaded();
                        clearInterval(wait);
                    }
                }, 200);
                return;
            }
            let js: any = d.createElement(s);
            js.id = id;
            js.src = '//pcssr.jd.co.th/unify.min.js';
            document.body.appendChild(js);
            js.onload = js.onreadystatechange = function () {
                if (
                    !this.readyState ||
                    this.readyState === 'loaded' ||
                    this.readyState === 'complete'
                ) {
                    if (typeof MPing == 'undefined') {
                        console.error('unify load fail');
                        return;
                    }
                    _.setLoaded();
                    js.onload = js.onreadystatechange = null;
                    window.removeEventListener('load', this.loadJs);
                }
            };
        })(document, 'script', 'unify');
    }
}

export default new PingAsync();

