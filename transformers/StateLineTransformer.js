export function stateLineTransformer(data, indicator) {
  var final_data = [];
  var final_data1 = [];
  let fiscalData = [
    'Indicator',
    'actual',
    'estimate_py',
    'revised_py',
    'estimate_cy',
  ];
  let years = [
    '2016-17',
    '2017-18',
    '2018-19',
    '2019-20',
    '2020-21',
    '2021-22',
  ];

  final_data.push(fiscalData);
  for (var y = 0; y < years.length; y++) {
    let temp_arr = [
      years[y],
      y > data.length - 1 ? '' : parseFloat(data[y]['total_actuals']),
      y - 1 < 0 || y - 1 > data.length - 1
        ? ''
        : parseFloat(data[y - 1]['total_estimate_py']),
      y - 1 < 0 || y - 1 > data.length - 1
        ? ''
        : parseFloat(data[y - 1]['total_revised_py']),
      y - 2 < 0 || y - 2 > data.length - 1
        ? ''
        : parseFloat(data[y - 2]['total_estimate_cy']),
    ];
    final_data.push(temp_arr);
  }
  return final_data;
}
