import { useState } from "react";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState(145000);
  const [annualRate, setAnnualRate] = useState(14);
  const [months, setMonths] = useState(12);

  const monthlyRate = annualRate / 12 / 100;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">EMI Calculator</h2>

      {/* Loan Amount */}
      <label className="block mb-2 text-gray-700">Loan Amount</label>
      <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
        min={1000}
        max={500000}
      />

      {/* Interest Rate */}
      <label className="block mb-2 text-gray-700">Interest Rate (%)</label>
      <input
        type="number"
        value={annualRate}
        onChange={(e) => setAnnualRate(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
        step="0.1"
        min={0}
      />

      {/* EMI Duration */}
      <label className="block mb-2 text-gray-700">Select EMI Option (Months)</label>
      <select
        value={months}
        onChange={(e) => setMonths(Number(e.target.value))}
        className="w-full p-2 border rounded mb-6"
      >
        <option value={3}>3 Months</option>
        <option value={6}>6 Months</option>
        <option value={12}>12 Months</option>
        <option value={24}>24 Months</option>
        <option value={36}>36 Months</option>
      </select>

      {/* Result Display */}
      <div className="bg-gray-100 p-4 rounded text-gray-800 space-y-2">
        <p>
          <strong>Your Monthly EMI:</strong> ₹{emi.toFixed(0)}
        </p>
        <p>
          <strong>Total Interest:</strong> ₹{totalInterest.toFixed(0)}
        </p>
        <p>
          <strong>Principal Amount:</strong> ₹{principal}
        </p>
        <p>
          <strong>Total Amount Payable:</strong> ₹{totalPayment.toFixed(0)}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <a
                                href="/apply"
                                className="bg-blue-600 text-white px-5 py-2 ml-45 mt-10 rounded hover:bg-blue-700 text-center"
                            >
                                Apply for Loan
                            </a>
                        </div>
    </div>
  );
};

export default EMICalculator;
