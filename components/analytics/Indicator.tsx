import React, { useEffect } from 'react';
import Toggle from 'components/_shared/Toggle';

const Indicator = ({ data, newIndicator, meta }) => {
  useEffect(() => {
    (document.getElementById('Budget Estimates') as HTMLInputElement).checked =
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
          data.map(
            (item, index) =>
              item && (
                <div key={`indicatorItem-${index}`}>
                  <input
                    onClick={(e) => handleIndicatorChange(e.target)}
                    type="radio"
                    name="indicators"
                    id={item}
                    value={item}
                  />
                  <label htmlFor={item}>
                    {item} <Toggle data={meta[index]} />
                  </label>
                </div>
              )
          )}
      </fieldset>
    </div>
  );
};

export default Indicator;
