import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowOrHideMaskService } from "app/shared/services/app-service/show-or-hide-mask.service";
import { TransportFeeMsgVo } from './../vo/transport-fee-msg.vo';

@Component({
  selector: 'transport-fee-msg',
  templateUrl: './transport-fee-msg.component.html',
  styleUrls: ['./transport-fee-msg.component.scss']
})
export class TransportFeeMsgComponent implements OnInit {
  @Output() closeWin = new EventEmitter();
  //绑定字段
  transportFeeMsgVo: TransportFeeMsgVo;
  
  constructor(public mask:ShowOrHideMaskService,) { }

  ngOnInit() {
    this.transportFeeMsgVo = new TransportFeeMsgVo();
  }

  /**
   * 关闭弹窗
   */
  close(){
      this.closeWin.emit();
  }

  /**
   * 保存
   */
  save() {
    
  }
}
