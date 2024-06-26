import { BudgetService } from '../../services/budget.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { symbol } from '../../constants/form.constants'

@Component({
  selector: 'app-form',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [BudgetService]
})

export class FormComponent {
  symbolConstant = symbol;
  descriptionInput: string = '';
  amountInput: number = 0;
  symbolInput: string = this.symbolConstant.income;

  constructor(private budgetService: BudgetService) { }

  addRegister() {
    this.symbolInput === this.symbolConstant.income ?
      this.budgetService.addIncome(this.amountInput, this.descriptionInput) :
      this.budgetService.addOutcome(this.amountInput, this.descriptionInput);
  }
}
