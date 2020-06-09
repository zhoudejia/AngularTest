import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  transactionList: any = [];
  private todayTime;
  private yesterdayTime;
  constructor(public appService:AppService) {
    // 判断今天与昨天用
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = `${year}-${month}-${day}`; 
    this.todayTime = new Date(today).getTime();
    this.yesterdayTime = new Date(this.todayTime - twentyFourHours).getTime();
  }

  ngOnInit(): void {
    this.getTransactionList();
  }

  // 获取交易列表
  getTransactionList() {
    this.appService.getTransactionList().subscribe( data => {
      // 先判断列表第一天是不是昨天
      if(data[0].date< this.todayTime && this.yesterdayTime <= data[0].date){
        data[0].isYesterday = true;
      } else if(data[0].date >= this.todayTime){ // 如果列表第一天不是昨天，再判断是不是今天
        data[0].isToday = true;
        // 如果是今天，再判断列表第二天是否是昨天
        if(data[1].date < this.todayTime && this.yesterdayTime <= data[1].date){
          data[1].isYesterday = true;
        }
      }
      console.log(data)
      this.transactionList = data;
    }, err => {
      console.log(err)
    })
  }

  refresh(){
    this.transactionList = [];
    this.getTransactionList();
  }
}
