import "./App.scss";
import ExpensesCalculator from "./ExpensesCalculator/ExpensesCalculator";

export const App = () => (
  <div className="App">
    <header>
      <h1>Amazing expenses checker</h1>
    </header>
    <ExpensesCalculator />
  </div>
);

export default App;
