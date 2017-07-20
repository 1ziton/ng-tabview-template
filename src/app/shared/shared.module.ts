import {NgModule} from "@angular/core";
//share module
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {
    ConfirmDialogModule,
    ConfirmationService,
    CheckboxModule,
    StepsModule,
    MenuModule,
    MultiSelectModule,
    GrowlModule,
    TabViewModule
} from "primeng/primeng";
//primeng-ext
import {AutoCompleteModule} from "./primeng-ext/autocomplete";
import {FileUploadModule} from "./primeng-ext/fileupload";
//ui
import {UITabViewModule} from "./ui/tabview/tabview";
import {TabDirective} from "./ui/tabview/tab.directive";
import {UIGrid} from "./ui/grid/grid";
import {UITree} from "./ui/tree/tree";
import {UIUpload} from "./ui/upload/upload";
import {UISelectBox} from "./ui/select-box/select-box";
import {EchartsDirective} from "./ui/echarts/echarts";
import {PanelNavComponent} from "./ui/panel-nav/panel-nav.component";
//primeng
import {CalendarModule} from "primeng/components/calendar/calendar";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {OverlayPanelModule} from "primeng/components/overlaypanel/overlaypanel";
import {ButtonModule} from "primeng/components/button/button";
import {SharedModule} from "primeng/components/common/shared";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {TreeModule} from "primeng/components/tree/tree";
import {DialogModule} from "primeng/components/dialog/dialog";
import {PickListModule} from "primeng/components/picklist/picklist";
import {WorkersSelectComponent} from "../components/worker-select/workers-select.component";
import {RepairGoodsComponent} from "../components/repair-goods-select/repair-goods-select.component";
import {AbnormalMoverComponent} from "../components/abnormal-mover/abnormal-mover-select.component";
import {SpinnerModule} from 'primeng/primeng';
//service
import {AbnormalTypeService} from "./services/app-service/abnormal-type.service";
import {TabViewService} from "./services/tabview.service";
import {AreaService} from "./services/app-service/area.service";
import {AreaTreeService} from "./services/app-service/area-tree.service";
import {GoodsTreeService} from "./services/app-service/goods-tree.service";
//业务组件
import {AreaSelectComponent} from "../components/area-select/area-select.component";
import {MetaSelectComponent} from "../components/meta-select/meta-select.component";
import {DepartmentSelectComponent} from "../components/department-select/department-select.component";
import {ExceptionSelectComponent} from "../components/exception-select/exception-select.component";
import {ShipperSelectComponent} from "../components/shipper-select/shipper-select.component";
import {CneeSelectComponent} from "../components/cnee-select/cnee-select.component";
import {WorkerSelectComponent} from "../components/user-worker/worker-select.component";
import {MasterSelectComponent} from "../components/master-select/master-select.component";
import {GoodSelectComponent} from "../components/good-select/good-select.component";
import {TransportSelectComponent} from "../components/transport-select/transport-select.component";
//公共弹窗
import { TransportFeeMsgComponent } from './modal/transport-fee-msg/transport-fee-msg.component';
import { InsuranceFeeMsgComponent } from "app/shared/modal/insurance-fee-msg/insurance-fee-msg.component";


@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        // primeng组件开始
        SharedModule,
        DataTableModule,
        TreeModule,
        CalendarModule,
        AutoCompleteModule,
        DropdownModule,
        OverlayPanelModule,
        ButtonModule,
        MultiSelectModule,
        DialogModule,
        PickListModule,
        SpinnerModule,
        FileUploadModule,
        ConfirmDialogModule,
        CheckboxModule,
        StepsModule,
        MenuModule,
        GrowlModule,
        TabViewModule,
        UITabViewModule
        // primeng组件结束
    ],
    declarations: [
        TabDirective,
        // ui组件库开始
        UISelectBox,
        UIGrid,
        UITree,
        UIUpload,
        PanelNavComponent,
        EchartsDirective,
        // ui组件库结束
        // 业务组件库开始
        AreaSelectComponent,
        MetaSelectComponent,
        DepartmentSelectComponent,
        WorkerSelectComponent,
        ExceptionSelectComponent,
        ShipperSelectComponent,
        TransportSelectComponent,
        CneeSelectComponent,
        WorkersSelectComponent,
        RepairGoodsComponent,
        AbnormalMoverComponent,
        MasterSelectComponent,
        GoodSelectComponent,
        // 业务组件库结束

        /*公共弹窗 B*/
        TransportFeeMsgComponent,
        InsuranceFeeMsgComponent
        /*公共弹窗 E*/
    ],
    exports: [
        TabDirective,
        CommonModule,
        FormsModule,
        // primeng组件开始
        SharedModule,
        DataTableModule,
        WorkerSelectComponent,
        TreeModule,
        CalendarModule,
        AutoCompleteModule,
        TabViewModule,
        DropdownModule,
        OverlayPanelModule,
        ButtonModule,
        MultiSelectModule,
        DialogModule,
        PickListModule,
        SpinnerModule,
        FileUploadModule,
        ConfirmDialogModule,
        CheckboxModule,
        StepsModule,
        MenuModule,
        GrowlModule,
        // primeng组件结束

        // ui组件库开始
        UITabViewModule,
        UISelectBox,
        UIGrid,
        UITree,
        UIUpload,
        PanelNavComponent,
        EchartsDirective,
        // ui组件库结束
        //业务组件开始
        AreaSelectComponent,
        MetaSelectComponent,
        DepartmentSelectComponent,
        ExceptionSelectComponent,
        ShipperSelectComponent,
        TransportSelectComponent,
        CneeSelectComponent,
        WorkersSelectComponent,
        RepairGoodsComponent,
        AbnormalMoverComponent,
        MasterSelectComponent,
        GoodSelectComponent,
        // 业务组件结束

        /*公共弹窗 B*/
        TransportFeeMsgComponent,
        InsuranceFeeMsgComponent
        /*公共弹窗 E*/
    ],
    providers: [
        TabViewService,
        AreaService,
        ConfirmationService,
        AreaTreeService,
        GoodsTreeService,
        AbnormalTypeService,
        DatePipe,
    ],
})
export class AppSharedModule {
}
