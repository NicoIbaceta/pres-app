import { BudgetService } from './services/budget.service';
import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { OutcomesComponent } from './components/outcomes/outcomes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, IncomesComponent, OutcomesComponent, FormComponent],
  providers:[BudgetService]
})

export class AppComponent {
  title = 'presupuesto-app';

  constructor(private budgetService: BudgetService){}

  addIncome(amount: number, description: string) {
    this.budgetService.addIncome(amount,description);
  }
}
