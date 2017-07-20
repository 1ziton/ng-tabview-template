import { Component, OnInit } from '@angular/core';
import { TransportFeeVo } from './../vo/transport-fee.vo';
import { ShowOrHideMaskService } from "app/shared/services/app-service/show-or-hide-mask.service";
import { tableDataTest } from './../../../../../assets/mock-data/table-data-test';

@Component({
    selector: 'app-transport-fee',
    templateUrl: './transport-fee.component.html',
    styleUrls: ['./transport-fee.component.scss']
})
export class TransportFeeComponent implements OnInit {
    static componentName = "运输费";

    //顶部切换栏
    navs = ["标准运费", "客户协议价"];
    //顶部状态栏默认为正常
    curIndex: any = 0;
    //tab栏切换显示和隐藏
    btnIf = [false, false];
    //选中行表格数据
    selectRow: any[] = [];
    //搜索框字段
    transportFeeVo: TransportFeeVo;
    //表格数据
    standardData: any = {}; //标准运费
    protocolData: any = {}; //协议运费

    /**
    * 控制弹窗显示隐藏的变量
    */
    showAddWin: boolean = false;

    constructor(public mask: ShowOrHideMaskService, ) { }

    ngOnInit() {
        this.transportFeeVo = new TransportFeeVo();
        //表格数据
        this.changeNav(0);
    }

    /**
    * 顶部切换按钮
    * @param index
    */
    changeNav(index) {
        this.btnIf = [false, false, false, false];
        this.btnIf[index] = true;
        this.curIndex = index;
        this.selectRow = [];
        if( index === 0 ){
            this.standardData = tableDataTest || {};
        }else {
            this.protocolData = tableDataTest || {};
        }
    }

    /**
     * 搜索查询
     */
    doSearch() {
        //this.load({first: 0, rows: 10,curIndex:this.curIndex})
    }

    /**
     * 表格数据加载
     */
    load() {

    }

    /**
     * 列表点击函数
     * @param event 选中表格数据
     */
    onRowSelect(event) {
        this.selectRow = event;
        //防止取消选中报错
        if (event.length === 0) {
            return;
        }
    }

    /**
     * 显示新增或者修改弹窗
     * @param who 新增或者修改
     */
    showWin(who) {
        switch (who) {
            case 'add':
                this.showAddWin = true;
                this.mask.show();
                break;
        }
    }

    /**
     * 隐藏弹窗
     */
    closeWin(who) {
        switch (who) {
            case 'add':
                this.showAddWin = false;
                break;
        }
        this.mask.hide();
    }

}
