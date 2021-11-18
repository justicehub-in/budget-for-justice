import { Format } from '../types/Resource';
import Papa from 'papaparse';

async function parseResources(resource: any) {
  const obj = {};
  for (const file of resource) {
    const csvFile = await fetch(file.url).then((res) => res.text());
    const parsedFile = Papa.parse(csvFile, { header: true, preview: 1 });
    obj[file.res_type] = parsedFile.data[0];
  }
  return obj;
}

export async function resourceGetter(resource: any, resourceFormat: Format) {
  const file = await parseResources(resource);
  switch (resourceFormat) {
    case 'CSV':
      return file;
  }
}
