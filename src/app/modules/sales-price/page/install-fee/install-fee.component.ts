import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-install-fee',
    templateUrl: './install-fee.component.html',
    styleUrls: ['./install-fee.component.scss']
})
export class InstallFeeComponent implements OnInit {
    static componentName = "安装费";

    constructor() {
    }

    ngOnInit() {
        /*tslint:disable*/
        console.log('InstallFeeComponent')
        /*tslint:enable*/
    }

}
