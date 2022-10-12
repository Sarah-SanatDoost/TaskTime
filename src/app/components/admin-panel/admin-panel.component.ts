import { Component, OnInit } from '@angular/core';
import { Elements } from 'src/app/interfaces/elements';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  employees : Elements[]=[
    {firstName:'سارا' , lastName: 'صنعت دوست' , arriveTime: '9:10'},
    {firstName:'مهسا' , lastName: 'خاتمی' , arriveTime: '9:00'},
    {firstName:'زهرا' , lastName: 'عیدی' ,arriveTime: '9:50'},
    {firstName:'مصطفی' , lastName: 'عقیلی' , arriveTime: '9:10'},
    {firstName:'پارسا' , lastName: 'مقبلی' , arriveTime: '9:10'},
    {firstName:'سپهر' , lastName: 'اقدسی' , arriveTime: '9:10'},
    {firstName:'علیرضا' , lastName: 'اسراری' , arriveTime: '9:10'},
    {firstName:'سارا' , lastName: 'صنعت دوست' , arriveTime: '9:10'},
    {firstName:'سارا' , lastName: 'صنعت دوست' , arriveTime: '9:10'},
  ]

  constructor() { }



  ngOnInit(): void {
  }

}
