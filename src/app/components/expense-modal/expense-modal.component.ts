import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.css']
})
export class ExpenseModalComponent implements OnInit {
  

  constructor() { }
  showRecur:boolean=false;
  ngOnInit(): void {
    
  }
  onChange(evt)
  {
    if(evt.target.checked)
      this.showRecur=true;
      else
      this.showRecur=false;
  }

}
