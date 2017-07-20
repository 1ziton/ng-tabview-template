/**
 * Created by giscafer on 2017-07-18.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BossHomeComponent} from "./boss.component";
import {AuthGuardService} from "app/shared/services/auth-service/auth-guard.service";
let homeRouter: Routes = [
    {
        path: '',
        component: BossHomeComponent,
        children: [
            {
                path:'',
                redirectTo:'sales-price',
                pathMatch:'full'
            },
            {
                path:'**',
                redirectTo:'home',
                pathMatch:'full'
            }
        ]
    }

];
@NgModule({
    imports: [RouterModule.forChild(homeRouter)
    ],
    declarations: [],
    providers: [],
})
export class BossHomeRoutingModule {
}
