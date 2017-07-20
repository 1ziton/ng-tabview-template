import {Injectable} from "@angular/core";
import {API} from "app/shared/lib/api/api";
import {environment} from "environments/environment.prod";

/**
 * 主配置类，所有的配置均在此
 * */
@Injectable()
export class AppConfig {

    /**
     * 报表服务地址
     * @type {string}
     */
    reportUrl: string = "http://localhost:13000";
    /**
     * 核心服务地址
     * @type {string}
     */
    baseUrl: string = "http://localhost:12000";


    constructor(public api: API) {
        //config_global属性控制是否外部可配置
        if (environment.config_global) {
            this.reportUrl = window['reportUrl'];
            this.baseUrl = window['baseUrl'];
        }
        this.api.url = this.baseUrl + "/api.do";
    }
}
