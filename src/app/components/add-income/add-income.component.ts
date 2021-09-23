import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Income } from 'src/app/models/income';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
  constructor(private incomeService : IncomeService, private router: Router) { }
  showRec : boolean;
  income: Income = new Income();
  ngOnInit(): void {
  }

  onChange(event) {
    if(event.target.checked) this.showRec = true;
    else this.showRec = false;
  }

  onSubmit(){
    this.saveIncome();
  }

  saveIncome() {
    this.incomeService.addIncome(this.income).subscribe(data => {
      //console.log(data);
      this.router.navigate(['/home']);
    },
    (err)=> console.log(err)
    )
  }
}
