//app module
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {JsonpModule} from "@angular/http";
//app service
import {DragBoxService} from "app/shared/services/app-service/drag-box.service";
import {ShowOrHideMaskService} from "app/shared/services/app-service/show-or-hide-mask.service";
import {ControlInfoBoxService} from "app/shared/services/app-service/control-info-box.service";
import {AuthService} from "app/shared/services/auth-service/auth.service";
import {AuthGuardService} from "app/shared/services/auth-service/auth-guard.service";
import {AppConfig} from "../app.config";
import {API} from "app/shared/lib/api/api";
import {InputTextModule} from "primeng/primeng";
import {BossHomeRoutingModule} from "./boss-routing.module";
import {BossHomeComponent} from "./boss.component";
import {AppSharedModule} from "app/shared/shared.module";
import {RequestTokenService} from "app/shared/services/app-service/request-token.service";
//app component
import {HeaderTopComponent} from "app/modules/common/header/header-top.component";
import {NavigationMenuComponent} from "app/modules/common/navigation-menu/navigation-menu.component";

import ENTRY_COMPONENTS from './EntryComponents';

@NgModule({
    imports: [
        FormsModule,
        AppSharedModule,
        JsonpModule,
        RouterModule,
        InputTextModule,
        BossHomeRoutingModule
    ],
    declarations: [
        BossHomeComponent,
        HeaderTopComponent,
        NavigationMenuComponent,
        ...ENTRY_COMPONENTS
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS
    ],
    providers: [
        API,
        AppConfig,
        DragBoxService,
        ShowOrHideMaskService,
        RequestTokenService,
        ControlInfoBoxService,
        AuthService,
        AuthGuardService,
    ]
})
export class BossModule {
}
