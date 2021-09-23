import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.css']
})
export class ExpenseModalComponent implements OnInit {
  expense_modal: any;

  constructor() { }
  showRecur:boolean=false;
  ngOnInit(): void {
    this.expense_modal.nativeElement.modal.fade.show=true;
  }
  onChange(evt)
  {
    if(evt.target.checked)
      this.showRecur=true;
      else
      this.showRecur=false;
  }

}
