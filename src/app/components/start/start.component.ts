import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogAskModeComponent } from '../dialog-ask-mode/dialog-ask-mode.component';
import { Elements } from 'src/app/interfaces/elements';
// import { EmployeeService } from '../services/employees.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']

})

export class StartComponent implements OnInit {

employees : Elements[]=[
  {firstName:'سارا' , lastName: 'صنعت دوست' , mode:'smile'},
  {firstName:'مهسا' , lastName: 'خاتمی' , mode:'smile'},
  {firstName:'زهرا' , lastName: 'عیدی' , mode:'smile'},
]


// employeeList$ :Observable<any[]> ;

  constructor( public dialog: MatDialog ) {
    // , private service: EmployeesService
   }


  ngOnInit(): void {
  }


  
  public onOpenDialog(){
    this.dialog.open(DialogAskModeComponent ,
       { panelClass: 'custom-container' });
  }
}
