import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShowOrHideMaskService } from "app/shared/services/app-service/show-or-hide-mask.service";

@Component({
  selector: 'app-insurance-fee-msg',
  templateUrl: './insurance-fee-msg.component.html',
  styleUrls: ['./insurance-fee-msg.component.scss']
})
export class InsuranceFeeMsgComponent implements OnInit {
  @Output() closeWin = new EventEmitter();
  @Input() offerMsg: any;
  //保价fielv
  offerRate: number;
  //最低一票
  lowestFee: number;


  constructor(public mask: ShowOrHideMaskService, ) { }

  ngOnInit() {
    this.offerRate = this.offerMsg[0].taskId;
    this.lowestFee = this.offerMsg[0].taskType;
  }

  /**
   * 关闭弹窗
   */
  close() {
    this.closeWin.emit();
  }
  /**
   * 保存弹窗
   */
  save() {
    this.closeWin.emit();
    this.offerMsg[0].taskId = this.offerRate;
    this.offerMsg[0].taskType = this.lowestFee;
  }

}
