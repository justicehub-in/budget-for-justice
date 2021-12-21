import React, { useEffect } from "react";
const indicatorObj = {};

const Indicator = ({ data, newIndicator }) => {
  function headingCollapsable() {
    const headings = document.querySelectorAll(".filters__heading");

    Array.prototype.forEach.call(headings, (h: any) => {
      const btn = h.querySelector("button");
      const target = h.nextElementSibling;

      btn.onclick = () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";

        btn.setAttribute("aria-expanded", !expanded);
        target.hidden = expanded;
      };
    });
  }

  useEffect(() => {
    headingCollapsable();

    Object.keys(data).forEach((val) => {
      indicatorObj[val] = [];
    });
  }, [data]);

  // function formatFilterName(name: string) {
  //   if (name == "fiscal_year") {
  //     return "fiscal year";
  //   } else if (name == "buyer_name") return "buyer name";
  //   else if (name == "tender/mainProcurementCategory") return "category";
  //   else if (name == "tender/stage") return "tender stage";
  //   else return name;
  // }

  // function handleIndicatorChange(e: any) {
  //   const selectedFilter = e.target as HTMLInputElement;
  //   const type = selectedFilter.dataset.type;
  //   const value = selectedFilter.id;

  //   const pressed = selectedFilter.getAttribute("aria-pressed");
  //   selectedFilter.setAttribute(
  //     "aria-pressed",
  //     pressed == "false" ? "true" : "false"
  //   );

  //   const index = indicatorObj[type].indexOf(value);
  //   if (index > -1) {
  //     indicatorObj[type].splice(index, 1);
  //   } else {
  //     indicatorObj[type].push(value);
  //   }
  //   newIndicator(indicatorObj);
  // }

  return (
    <div className="indicator">
      <h3>Indicators</h3>
      <fieldset>
        <legend className="sr-only">Choose Indicator:</legend>
        <div>
          <input type="radio" name="indicators" id="val1" />
          <label htmlFor="val1">
            Iaculis ultrices velit auctor platea nec adipiscing
          </label>
        </div>
        <div>
          <input type="radio" name="indicators" id="val2" />
          <label htmlFor="val2">Double Line Indicator Placeholder</label>
        </div>
        <div>
          <input type="radio" name="indicators" id="val3" />
          <label htmlFor="val3">Dolor eget mauris netus</label>
        </div>
        <div>
          <input type="radio" name="indicators" id="val4" />
          <label htmlFor="val4">
            Eleifend quam lacus, at risus purus scelerisque
          </label>
        </div>
        <div>
          <input type="radio" name="indicators" id="val5" />
          <label htmlFor="val5">Tortor mauris malesuada</label>
        </div>
      </fieldset>
    </div>
  );
};

export default Indicator;
