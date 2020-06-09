import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-card-total',
  templateUrl: './card-total.component.html',
  styleUrls: ['./card-total.component.css']
})
export class CardTotalComponent implements OnInit {
  selectMonth: any = [{
    value: "202006",
    name: "2020年06月"
  }, {
    value: "202005",
    name: "2020年05月"
  }, {
    value: "202004",
    name: "2020年04月"
  }];
  selectAccount: any = [{
    cardID: "000",
    cardName: "全部账户"
  }, {
    cardID: "001",
    cardName: "储蓄账户"
  }, {
    cardID: "002",
    cardName: "微信账户"
  }];

  monthSearch = '';
  accountSearch = '000';
  cardInfo: any = [];
  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.monthSearch = this.selectMonth[0].value;
    this.getMonthlyTotal();
  }

  getMonthlyTotal() {
    this.cardInfo = {
      expenditure: 0,
      income: 0,
      balance: 0,
      budget: 0
    }
    this.appService.getMonthlyTotal().subscribe(data => {
      let monthInfo: any = data;
      for (let i = 0; i < monthInfo.length; i++) {
        if (monthInfo[i].month === this.monthSearch) {
          let history = monthInfo[i].history;
          for (let j = 0; j < history.length; j++) {
            if (this.accountSearch === '000') {
              this.cardInfo.expenditure += history[j].expenditure;
              this.cardInfo.income += history[j].income;
              this.cardInfo.balance += history[j].cardBalance;
              this.cardInfo.budget += history[j].budget;
            } else {
              if (this.accountSearch === history[j].cardID) {
                this.cardInfo.expenditure = history[j].expenditure;
                this.cardInfo.income = history[j].income;
                this.cardInfo.balance = history[j].cardBalance;
                this.cardInfo.budget = history[j].budget;
                break;
              }
            }
          }
        }
      }
      console.log(this.cardInfo);
    }, err => {
      console.log(err)
    })
  }

  // 切换月份
  changeMonth(month) {
    this.monthSearch = month;
    this.getMonthlyTotal();
  }

  // 切换账户
  changeAccount(account) {
    this.accountSearch = account;
    this.getMonthlyTotal();
  }
}
