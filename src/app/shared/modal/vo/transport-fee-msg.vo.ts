/**
 * 新增路线
 */
export class TransportFeeMsgVo{
    /**
     * 始发网点
     */
    public billingOrg:string;
    /**
     * 目的省市区
     */
    public areaCode:string;
    /**
     * 中转城市
     */
    public middleCity:string;
    /**
     * 所属区域
     */
    public belongTo:string;
    /**
     * 提货电话
     */
    public phone:string;
    /**
     * 提货地址
     */
    public address:string;
    /**
     * 预约用时
     */
    public time:string;
}