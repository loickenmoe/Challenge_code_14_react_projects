import '../styles/app.css';
import Header from "../components/Header"
import InvestmentCalculator from './compoundInterestRateApp/InvestmentCalculator';


function App() {
  return (
    <div className="App">
      <Header />
      <InvestmentCalculator />
    </div>
  );
}

export default App;
