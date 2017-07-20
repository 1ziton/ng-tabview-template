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
import {TabViewService} from "./services/tabview.service";
//公共弹窗
import { TransportFeeMsgComponent } from './modal/transport-fee-msg/transport-fee-msg.component';
import { InsuranceFeeMsgComponent } from "app/shared/modal/insurance-fee-msg/insurance-fee-msg.component";
import {PanelNavComponent} from "app/shared/ui/panel-nav/panel-nav.component";


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
        PanelNavComponent,
        WorkersSelectComponent,
        RepairGoodsComponent,
        AbnormalMoverComponent,

        // 业务组件库结束

        /*公共弹窗 B*/
        TransportFeeMsgComponent,
        InsuranceFeeMsgComponent
        /*公共弹窗 E*/
    ],
    exports: [
        PanelNavComponent,
        CommonModule,
        FormsModule,
        // primeng组件开始
        SharedModule,
        DataTableModule,
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

        WorkersSelectComponent,
        RepairGoodsComponent,
        AbnormalMoverComponent,
        // 业务组件结束

        /*公共弹窗 B*/
        TransportFeeMsgComponent,
        InsuranceFeeMsgComponent
        /*公共弹窗 E*/
    ],
    providers: [
        TabViewService,
        ConfirmationService,
        DatePipe,
    ],
})
export class AppSharedModule {
}
