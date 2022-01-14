import { saveAs } from "file-saver";
import { stripTitle } from "utils";
import * as echarts from "echarts/core";

function fileName(type, name, indicator, format) {
  // splitting the string to find the required part of title
  const shortName = stripTitle(name);

  // If there is no type, eg: table, don;t add it to the name
  if (type != "NA" && format != "csv")
    return `${shortName} - ${indicator} - ${type}.${format}`;
  else return `${shortName} - ${indicator}.${format}`;
}

function download_csv(csv, filename) {
  const csvFile = new Blob([csv], { type: "text/csv" });
  const downloadLink = document.createElement("a");

  // File name
  downloadLink.download = filename;

  // We have to create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Make sure that the link is not displayed
  downloadLink.style.display = "none";

  // Add the link to your DOM
  document.body.appendChild(downloadLink);

  // Lanzamos
  downloadLink.click();
}

export function export_table_to_csv(filename: any) {
  const csv = [];
  const rows = document.querySelectorAll("#tableView tr");

  for (let i = 0; i < rows.length; i += 1) {
    const row = [];
    const cols = rows[i].querySelectorAll("td, th") as any;

    for (let j = 0; j < cols.length; j += 1) row.push(cols[j].innerText);

    csv.push(row.join(","));
  }

  // Download CSV
  download_csv(csv.join("\n"), filename);
}

const DownloadViz = ({ viz, type, name, indicator }) => {
  function svg2img() {

        let myChart = echarts.getInstanceByDom(document.querySelector('.echarts-for-react '));
	
	let url = myChart.getConnectedDataURL({
	pixelRatio: 5,　　//derived ratio picture resolution, default 1
	backgroundColor: '#fff',　　//chart background color
	excludeComponents:[　　//ignored when you save a chart tool components, the default toolbar ignored 
	'toolbox'
	],
	type:'png'　　//Image types support png and jpeg 
	});

	let $a = document.createElement('a');
	let type = 'png';
	$a.download = myChart.getOption().title[0].text + '.' + type;
	$a.target = '_blank';
	$a.href = url;

	//Chrome and Firefox
	if (typeof MouseEvent === 'function') {
	let evt = new MouseEvent('click', {
	view: window,
	bubbles: true,
	cancelable: false
	});
	$a.dispatchEvent(evt);
	}
	//IE
	else {
	let html = ''

	'<body style="margin:0;">'
	'![](' + url + ')'
	'</body>';
	let tab = window.open();
	tab.document.write(html);
	}

    //const svg = document.querySelector(`${viz} svg`);
    //const xml = new XMLSerializer().serializeToString(svg);
    //const svg64 = window.btoa(encodeURIComponent(xml));
    //saveAs(
    //  "data:image/png;base64," + svg64,
    //  fileName(type, name, indicator, "png")
    //);
  }

  function downloadViz(viz) {
    if (viz == "#tableView")
      export_table_to_csv(fileName(type, name, indicator, "csv"));
    else svg2img();
  }

  return (
    <button onClick={() => downloadViz(viz)} className="btn-secondary-mini">
      {`Download ${viz == "#tableView" ? "CSV" : "Visualisation"}`}
    </button>
  );
};

export default DownloadViz;
