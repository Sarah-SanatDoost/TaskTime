import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogAskModeComponent } from '../dialog-ask-mode/dialog-ask-mode.component'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']

})

export class StartComponent implements OnInit {

// employeeList$ :Observable<any[]> ;

  constructor( public dialog: MatDialog  ) {
    // , private service: EmployeesService
   }


  ngOnInit(): void {
  }


  
  public onOpenDialog(){
    this.dialog.open(DialogAskModeComponent , { panelClass: 'custom-container' });
  }
}
