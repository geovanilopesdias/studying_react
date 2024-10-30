import { useState } from "react";

export default function YearCalculator() {
  const [year, setYear] = useState(2024);
  const [isLeap, setIsLeap] = useState(false);
  const [showResult, setShowResult] = useState(false);

  function handleClick() {
    setIsLeap(isLeapYear(year));
    setShowResult(true); // Show result when button is clicked
  }

  function handleInputChange(e) {
    setYear(parseInt(e.target.value));
    setShowResult(false); // Hide result while editing
  }

  return (
    <>
      <div className="calculator">
        <input
          type="number"
          className="year_input"
          value={year}
          onChange={handleInputChange}
        />
        <button className="calculate" onClick={handleClick}>
          Calculate
        </button>
        {showResult && (
          <p>
            {isLeap ? `${year} is a leap year` : `${year} is not a leap year`}
          </p>
        )}
      </div>
    </>
  );
}

function isLeapYear(year) {
  let isDivBy4 = year % 4 == 0;
  let isDivBy100 = year % 100 == 0;
  let isDivBy400 = year % 400 == 0;
  return (isDivBy4 && !isDivBy100) || isDivBy400;
}
