import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogAskModeComponent } from '../dialog-ask-mode.component';
import { Elements } from 'src/app/interfaces/elements';
import { TaskTimeService } from 'src/app/services/taskTime';
// import { EmployeeService } from '../services/employees.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']

})

export class StartComponent implements OnInit {
employeeList$: Observable<any[]>;


// employees : Elements[]=[
//   {firstName:'سارا' , lastName: 'صنعت دوست' , mode:'smile'},
//   {firstName:'مهسا' , lastName: 'خاتمی' , mode:'smile'},
//   {firstName:'زهرا' , lastName: 'عیدی' , mode:'smile'},
// ]


// employeeList$ :Observable<any[]> ;

  constructor(
     public dialog: MatDialog,
     private service: TaskTimeService ) {
    // , private service: EmployeesService
   }


  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee()
  }


  
  public onOpenDialog(){
    this.dialog.open(DialogAskModeComponent ,
       { panelClass: 'custom-container' });
  }
}
