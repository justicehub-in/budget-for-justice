export function stateLineTransformer(data, indicator) {
  var final_data = [];
  var final_data1 = [];

  let fiscalData = [
    'Indicator',
    'Budget Estimates',
    'Revised Estimates',
    'Actuals',
  ];

  let years = [
    '2016-17',
    '2017-18',
    '2018-19',
    '2019-20',
    '2020-21',
    '2021-22',
    '2022-23',
  ];

  final_data.push(fiscalData);
  for (var y = 0; y < years.length; y++) {
    let temp_arr = [
      years[y],
      y - 2 < 0 || y - 2 > data.length - 1
        ? ''
        : parseFloat(data[y - 2]['total_estimate_cy']),
      y - 1 < 0 || y - 1 > data.length - 1
        ? ''
        : parseFloat(data[y - 1]['total_revised_py']),
      y > data.length - 1 ? '' : parseFloat(data[y]['total_actuals']),
    ];
    final_data.push(temp_arr);
  }
  console.log('finalData', data, final_data);
  return final_data;
}


//   let fiscalData = [
//     'Indicator',
//     'estimate_py',
//     'estimate_cy',
//     'revised_py',
//     'actual',
//   ];
//   let years = [
//     '2016-17',
//     '2017-18',
//     '2018-19',
//     '2019-20',
//     '2020-21',
//     '2021-22',
//     '2022-23',
//   ];

//   final_data.push(fiscalData);
//   for (var y = 0; y < years.length; y++) {
//     let temp_arr = [
//       years[y],
//       y - 1 < 0 || y - 1 > data.length - 1
//         ? ''
//         : parseFloat(data[y - 1]['total_estimate_py']),
//       y - 2 < 0 || y - 2 > data.length - 1
//         ? ''
//         : parseFloat(data[y - 2]['total_estimate_cy']),
//       y - 1 < 0 || y - 1 > data.length - 1
//         ? ''
//         : parseFloat(data[y - 1]['total_revised_py']),
//       y > data.length - 1 ? '' : parseFloat(data[y]['total_actuals']),
//     ];
//     final_data.push(temp_arr);
//   }
//   console.log('finalData', data, final_data);
//   return final_data;
// }
