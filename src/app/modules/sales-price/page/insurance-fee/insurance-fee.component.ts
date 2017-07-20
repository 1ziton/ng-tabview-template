import {Component, OnInit} from '@angular/core';
import {ShowOrHideMaskService} from "app/shared/services/app-service/show-or-hide-mask.service";

@Component({
    selector: 'app-insurance-fee',
    templateUrl: './insurance-fee.component.html',
    styleUrls: ['./insurance-fee.component.scss']
})
export class InsuranceFeeComponent implements OnInit {
    static componentName = "保价费";

    // 表格数据
    data: any;
    //标准保价费-报价费维护
    columnsOfferFee: any[] = [];
    //标准保价费-特殊保价费设置
    columnsSpecialFee: any[] = [];

    // 顶部切换按钮
    navs = ["标准保价费", "客户协议价"];
    curIndex: any;

    //控制二级筛选按钮
    active = [true, false];
    curIndexTwo: any;

    //选中行表格数据
    selectRow: any[] = [];

    /**
     * 控制弹窗显示隐藏的变量
     */
    showAddOffer: boolean = false;
    showMaintenanceOffer: boolean = false;

    constructor(public mask: ShowOrHideMaskService,) {
    }

    ngOnInit() {
        this.curIndex = 0;
        this.curIndexTwo = 0;
        this.initColumns();
        this.load();
    }

    /**
     * 数据筛选方法
     *
     */
    dataFilter(taskStatus, who) {
        this.curIndexTwo = who;
        for (let i = 0; i < this.active.length; i++) {
            this.active[i] = false;
        }
        this.active[who] = true;
    }

    /**
     * 顶部切换按钮方法
     * @param index
     */
    chanCurIndex(index: number) {
        this.curIndexTwo = 0;
        /**
         * 切换时使二级菜单状态初始化
         */
        for (let i = 0; i < this.active.length; i++) {
            this.active[i] = false;
        }
        this.active[0] = true;
        this.curIndex = index;
    }

    initColumns(): void {

        //标准保价费-报价费维护
        this.columnsOfferFee.push({
            header: '保价费率(%)',
            field: 'taskId',
        });
        this.columnsOfferFee.push({
            header: '最低一票',
            field: 'taskType',
        });
        this.columnsOfferFee.push({
            header: '维护时间',
            field: 'time',
        });
        this.columnsOfferFee.push({
            header: '维护人',
            field: 'serviceType',
        });

        //标准保价费-特殊保价费设置
        this.columnsSpecialFee.push({
            header: '开单网点',
            field: 'taskId',
            link: true
        });
        this.columnsSpecialFee.push({
            header: '指定品名',
            field: 'taskType'
        });
        this.columnsSpecialFee.push({
            header: '所属区域',
            field: 'serviceType'
        });
        this.columnsSpecialFee.push({
            header: '最低保费',
            field: 'taskType'
        });
        this.columnsSpecialFee.push({
            header: '维护时间',
            field: 'time'
        });
        this.columnsSpecialFee.push({
            header: '维护人',
            field: 'worker'
        });
    }

    load() {
        this.data = this.test();
    }

    /**
     * 列表点击函数
     * @param event 选中表格数据
     */
    rowSelect(event) {
        this.selectRow = event;
        //防止取消选中报错
        if (event.length === 0) {
            return;
        }
        // this.selectWorker = event[0];
    }


    /**
     * 测试数据
     */
    test() {
        let data = {
            content: [
                {
                    "taskId": "20", "taskType": '30', 'serviceType': '王二小', "taskStatusSelf": '131353497422',
                    "time": '2017/02/03', "worker": "131353497426"
                }
            ],
            first: true,
            last: true,
            number: 0,
            numberOfElements: 4,
            size: 20,
            totalElements: 4,
            totalPages: 1
        }
        return data;
    }

    /**
     * 显示新增或者修改弹窗
     * @param who 新增或者修改
     */
    showWin(who) {
        switch (who) {
            case 'addOffer':
                this.showAddOffer = true;
                this.mask.show();
                break;
            case 'maintenanceOffer':
                this.showMaintenanceOffer = true;
                this.mask.show();
                break;
        }
    }

    /**
     * 隐藏弹窗
     */
    closeWin(who) {
        switch (who) {
            case 'addOffer':
                this.showAddOffer = false;
                break;
            case 'maintenanceOffer':
                this.showMaintenanceOffer = false;
                break;
        }
        this.mask.hide();
    }
}
