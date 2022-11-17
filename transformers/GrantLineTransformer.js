export function grantLineTransformer(data, indicator) {
  var final_data = [];
  let headerData = [
    'Year',
    'Budget Estimates ',
    'Revised Estimates ',
    'Actuals ',
  ];
  final_data.push(headerData);

  /*   let dataobj = {}
   data.forEach((elm) => {
        if (dataobj[elm['Year']]) {
           dataobj[elm['Year']][elm['Indicator']] = parseFloat(elm['Value'])
        }
        else {
         dataobj[elm['Year']] = {[elm['Indicator']] : parseFloat(elm['Value']) }   
        }
    });  */

  const dataobj = data;
  for (var item in dataobj) {
    if (Object.prototype.hasOwnProperty.call(dataobj, item)) {
      if (item == "2017-18") {
        continue
      }
      let temp_array = [item];

      for (var j = 1; j < headerData.length; j++) {
        if (dataobj[item][headerData[j]]) {
          temp_array.push(dataobj[item][headerData[j]]);
        } else {
          temp_array.push('');
        }
      }

      final_data.push(temp_array);
    }
  }

  console.log('finalData', dataobj, final_data);
  return final_data;
}
