import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogAskModeComponent } from '../dialog-ask-mode.component';
import { Elements } from 'src/app/interfaces/elements';
import { TaskTimeService } from 'src/app/services/taskTime';
import { Subscription } from 'rxjs';
// import { EmployeeService } from '../services/employees.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']

})


export class StartComponent implements OnInit {
  employeeList$: Observable<any[]>;

// employee.id: number = 0

allEmployee:any[] =[];
length: number ; 
employee: any ;
employeeId: number;
// allEmployee.push(this.service.getAllEmployee);
// this.service.getAllEmployee.subscribe

  constructor(
    public dialog: MatDialog,
    private service: TaskTimeService) {
    // , private service: EmployeesService
  }


  ngOnInit(): void {
    this.employeeList$ = this.service.getAllEmployee()
    this.service.getAllEmployee().subscribe((x) => {
      this.length = x.length;
      for (let i=0 ; i < x.length ; i++){
        this.allEmployee.push(x)
        if (this.employee == this.allEmployee[i].name){
          this.employeeId = this.employee.id
        
        }
      }
    
    
    })
  }



  public onOpenDialog() {
    this.dialog.open(DialogAskModeComponent,
      { panelClass: 'custom-container' });
  }
}
