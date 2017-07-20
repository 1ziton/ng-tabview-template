/**
 * entry components
 * 注册tabview动态加载的页面
 * Created by giscafer on 2017-07-20.
 */


import {DeliveryFeeComponent} from "app/modules/sales-price/page/delivery-fee/delivery-fee.component";
import {InstallFeeComponent} from "app/modules/sales-price/page/install-fee/install-fee.component";
import {TransportFeeComponent} from "app/modules/sales-price/page/transport-fee/transport-fee.component";
import {InsuranceFeeComponent} from "app/modules/sales-price/page/insurance-fee/insurance-fee.component";


export default [
    TransportFeeComponent, //首个组件表示默认展示的页面，即为首页，其他顺序可以随便放，但是第一个组件决定首页
    DeliveryFeeComponent,
    InstallFeeComponent,
    InsuranceFeeComponent,
]
