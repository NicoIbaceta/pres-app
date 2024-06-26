import { Budget } from "../models/budget.model";
import { Income } from "../models/income.model";
import { Outcome } from "../models/outcome.model";

export class BudgetService {
    totalBudget: Budget;

    constructor() {
        this.totalBudget = this.initializeBudget();
    }

    private initializeBudget(): Budget {
        return new Budget(0, 0, 0, [], []);
    }

    public addIncome(amount: number, description: string): void {
        this.totalBudget.incomes.push(new Income(amount, description));
        this.totalBudget.incomesTotal = this.totalBudget.incomesTotal + amount;
    }

    public addOutcome(amount: number, description: string): void {
        let percentage = this.calculateOutcomePercentage();
        this.totalBudget.outcomes.push(new Outcome(amount, description, percentage));
    }

    public calculateOutcomePercentage(): number {
        return 0;
    }
}