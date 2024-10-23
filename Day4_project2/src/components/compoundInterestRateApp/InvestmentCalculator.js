import React, { useState, useEffect } from "react";

const InvestmentCalculator = () => {
  const [principalAmount, setPrincipalAmount] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [years, setYears] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const rate = interestRate / 100 / 12; // Taux mensuel
      const n = years * 12; // Nombre total de paiements

      // Calcul du montant futur
      const futureValue =
        principalAmount * Math.pow(1 + rate, n) +
        monthlyContribution * ((Math.pow(1 + rate, n) - 1) / rate);

      setTotal(futureValue.toFixed(2));
    };

    calculateTotal();
  }, [principalAmount, monthlyContribution, interestRate, years]);

  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "yellow",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <label>
          Principle amount $:
          <input
            type="number"
            value={principalAmount}
            onChange={(e) => setPrincipalAmount(Number(e.target.value))}
            style={{
              width: "100%",
              border: "none",
              borderRadius: "5px",
              padding: ".5rem 0 .5rem .5rem",
              backgroundColor: "white",
              margin: "5px 0",
            }}
          />
        </label>

        <label>
          Monthly contribution $:
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            style={{
              width: "100%",
              border: "none",
              borderRadius: "5px",
              padding: ".5rem 0 .5rem .5rem",
              backgroundColor: "white",
              margin: "5px 0",
            }}
          />
        </label>

        <label>
          Interest rate %:
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            style={{
              width: "100%",
              border: "none",
              borderRadius: "5px",
              padding: ".5rem 0 .5rem .5rem",
              backgroundColor: "white",
              margin: "5px 0",
            }}
          />
        </label>

        <label>
          Year of investment:
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{
              width: "100%",
              border: "none",
              borderRadius: "5px",
              padding: ".5rem 0 .5rem .5rem",
              backgroundColor: "white",
              margin: "5px 0",
            }}
          />
        </label>

        <label>
          Total :
          <input
            type="text"
            value={total}
            readOnly
            style={{
              width: "100%",
              border: "none",
              textAlign:"right",
              borderRadius: "5px",
              padding: ".5rem .5rem .5rem 0 ",
              margin: "5px 0",
              backgroundColor: "purple",
              color: "white",
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
