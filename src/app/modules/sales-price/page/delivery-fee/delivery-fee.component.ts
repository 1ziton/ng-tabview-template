import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-delivery-fee',
    templateUrl: './delivery-fee.component.html',
    styleUrls: ['./delivery-fee.component.scss']
})
export class DeliveryFeeComponent implements OnInit {
    static componentName = "配送费";

    constructor() {
    }

    ngOnInit() {
        /*tslint:disable*/
        console.log('DeliveryFeeComponent')
        /*tslint:enable*/
    }

}
