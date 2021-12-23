import React, { useEffect } from "react";

const Indicator = ({ data, newIndicator }) => {

  useEffect(() => {
    (document.getElementById("Budget Estimates") as HTMLInputElement).checked =
      true;
  }, [data]);

  function handleIndicatorChange(e: any) {
    newIndicator(e.value);
  }

  return (
    <div className="indicator">
      <h3>Indicators</h3>
      <fieldset>
        <legend className="sr-only">Choose Indicator:</legend>
        {data &&
          data.map((item, index) => (
            <div key={`indicatorItem-${index}`}>
              <input onClick={e => handleIndicatorChange(e.target)} type="radio" name="indicators" id={item} value={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
      </fieldset>
    </div>
  );
};

export default Indicator;
