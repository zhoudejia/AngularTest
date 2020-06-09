import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http:HttpClient
    ) {

    }

  // 获取月度总计
  getMonthlyTotal(){
    return this.http.get('assets/jsonfiles/monthlyTotal.json');
  }

  // 获取交易列表
  getTransactionList(){
    return this.http.get('assets/jsonfiles/transactionList.json');
  }
}
