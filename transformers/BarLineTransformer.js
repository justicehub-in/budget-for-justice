export function barLineTransformer(data) {
  var final_data = [];
  let fiscalData = [];
  let valueData = [];

  for (var i = 0; i < data.length; i++) {
    fiscalData.push(data[i]["fiscalYear"]);
    valueData.push(data[i]["value"].includes('%') ? data[i]["value"].slice(0, -2) : data[i]["value"]);
  }

  final_data.push(fiscalData);
  final_data.push(valueData);
  final_data.push(["Fiscal Year", "Value"]);

  return final_data;
}
