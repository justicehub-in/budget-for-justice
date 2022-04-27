export function stateLineTransformer(data, indicator) {
  var final_data = [];
  let fiscalData = ["Indicator", "actual", "estimate_py", "revised_py", "estimate_cy"];
  let actual = ["actual"];
  let estimate_py = ["estimate_py"];
  let revised_py = ["revised_py"];
  let estimate_cy = ["estimate_cy"];


  final_data.push(fiscalData);
  for (var i = 0; i < data.length; i++) {
    final_data.push([data[i]["year"], (parseFloat(data[i]["total_actuals"])), (parseFloat(data[i]["total_estimate_py"])), (parseFloat(data[i]["total_revised_py"])), (parseFloat(data[i]["total_estimate_cy"]))]);
  }  
  

  console.log(final_data);
  return final_data;
}
