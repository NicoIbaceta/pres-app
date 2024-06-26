import { Income } from "./income.model";
import { Outcome } from "./outcome.model";

export class Budget {
    constructor(
        public totalBudget: number,
        public incomesTotal: number,
        public outcomesTotal: number,
        public incomes: Income[],
        public outcomes: Outcome[]
    ) { }
}