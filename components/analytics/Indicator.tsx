import React, { useEffect } from "react";
const indicatorObj = {};

const Indicator = ({ data, newIndicator }) => {
  // function headingCollapsable() {
  //   const headings = document.querySelectorAll(".filters__heading");

  //   Array.prototype.forEach.call(headings, (h: any) => {
  //     const btn = h.querySelector("button");
  //     const target = h.nextElementSibling;

  //     btn.onclick = () => {
  //       const expanded = btn.getAttribute("aria-expanded") === "true";

  //       btn.setAttribute("aria-expanded", !expanded);
  //       target.hidden = expanded;
  //     };
  //   });
  // }

  useEffect(() => {
    (document.getElementById("Budget Estimates") as HTMLInputElement).checked =
      true;
  }, []);

  // function formatFilterName(name: string) {
  //   if (name == "fiscal_year") {
  //     return "fiscal year";
  //   } else if (name == "buyer_name") return "buyer name";
  //   else if (name == "tender/mainProcurementCategory") return "category";
  //   else if (name == "tender/stage") return "tender stage";
  //   else return name;
  // }

  function handleIndicatorChange(e: any) {
    newIndicator(e.target.value);
  }

  return (
    <div className="indicator">
      <h3>Indicators</h3>
      <fieldset onChange={handleIndicatorChange}>
        <legend className="sr-only">Choose Indicator:</legend>
        {data &&
          data.map((item, index) => (
            <div key={`indicatorItem-${index}`}>
              <input type="radio" name="indicators" id={item} value={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
      </fieldset>
    </div>
  );
};

export default Indicator;
