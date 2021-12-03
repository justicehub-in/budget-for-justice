<h1 align="center">Public Procurement Explorer - Assam</h1>
<p align="center">In collaboration between <a href="https://civicdatalab.in/">CivicDataLab</a> and <a href="https://www.open-contracting.org/implement/lift/">Open Contracting Partnership</a></p>
<br/>
<p align="center">
<img alt="" src="https://github.com/CivicDataLab/oci-assam-frontend/raw/main/public/assets/images/CDLxOCP.png"/>
<br/>
<br/>
<a href="https://github.com/CivicDataLab/oci-assam-frontend/blob/main/LICENSE">
<img alt="MIT License" src="https://img.shields.io/apm/l/atomic-design-ui.svg?"/>
</a>
</p>
<p align="center">A data-driven tool to enable public officials in the state of Asaam to make smarter, data-informed decisions about public spending</p>

- [Features](#features)
- [Getting Started](#getting-started)
- [Guide](#guide)
  - [Styling 🎨](#styling-)
  - [Backend](#backend)
  - [Pages](#pages)
  - [Data fetching](#data-fetching)
    - [Fetch all datasets for listing pages](#fetch-all-datasets-for-listing-pages)
    - [Fetch particluar dataset](#fetch-particluar-dataset)
- [Developers](#developers)
  - [Boot the local instance](#boot-the-local-instance)
  - [Tests](#tests)
  - [Architecture](#architecture)
- [Contributing](#contributing)

## Features

- 🗺️ Unified sites: present data and content in one seamless site, pulling datasets from a DMS (e.g. CKAN) and content from a CMS (e.g. wordpress) with a common internal API.
- ♿ Accessible: The platform is screen-reader friendly.
- 👩‍💻 Developer friendly: built with NextJS, SASS, GraphQL to make the developer experience a treat.
- 🚀 ITCSS & BEM: Combination of BEM methodology and ITCSS architecture to better organize the styling and make it scalable.
- 📋 Typescript: Developed usign typescript to improve development experience by catching errors and providing fixes.
- 🧱 Extensible: quickly extend and develop/import your own React components
- 📝 Well documented: full set of documentation plus the documentation of NextJS and Apollo

## Getting Started

Install a recent version of Node. Node 16 is recommended.

## Guide

### Styling 🎨

We use SASS preprocessor to manage styling. All of it can be found at `/styles` directory where it's managed by using ITCSS architecture to make it scalable. For naming, we use BEM methodology.


### Backend

You can connect CMS and DMS backends easily via environment variables:

```console
$ export DMS=http://ckan:5000
$ export CMS=http://myblog.wordpress.com
```

> Note that we don't yet have implementations for the following CKAN features:
>
> - Activities
> - Auth
> - Groups

### Pages

- Home `/`
- Dataset lisitng `/datasets`
- Tender `/datasets/[tender]`
- KPI listing `/kpi`
- KPI Analysis `/kpi/[analysis]`
- Stories `/stories`
- About `/about`

### Data fetching

We use REST API to fetch data from CKAN. Some of the data comes as metadata and other is in CSV files, for which we use different transformers. You can find more about it in `/transoformers` directory.
#### Fetch all datasets for listing pages

When visiting a dataset lisitng page, you may want to fetch the particular type of datasets. To do so, you can use `getServerSideProps` function from NextJS:

```javascript
import { GetServerSideProps } from 'next';
import { convertToCkanSearchQuery, fetchDatasets } from 'utils/index';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const variables = convertToCkanSearchQuery(context.query || {});
  const data = await fetchDatasets('type_of_dataset', variables);

  return {
    props: {
      data,
    },
  };
};
```
- `convertToCkanSearchQuery` (from [PortalJS](https://github.com/datopian/portal.js)) helps to convert the search query parameters into a object which we can use.
- `fetchDatasets` helps to fetch a list of datasets of particular type. 

Learn more about them [here](utils/README.md).

#### Fetch particluar dataset

Depending on dataset, they may return metadata in the form of `JSON` or a combination of `JSON` and `CSV` file. We can use `fetchAPI` in this case:

```javascript
import { GetServerSideProps } from 'next';
import { fetchAPI } from 'utils/index';
import { resourceGetter } from 'utils/resourceParser';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchAPI(context.query.tender);
  const csv = await resourceGetter(data.result.resources, 'CSV');

  return {
    props: {
      data,
      csv
    },
  };
};
```

## Developers

### Boot the local instance

Install the dependencies:

```bash
npm i
```

Boot the demo frontend:

```console
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the home page 🎉

You can start editing the page by modifying `/pages/index.tsx`. The page auto-updates as you edit the file.

### Tests

We use Jest for running tests:

```bash
npm run test

# turn on watching
npm run test --watch
```

### Architecture

- Language: Javascript
- Framework: [Next.js](https://nextjs.com/)
- Styling: [SASS](https://sass-lang.com/) with [BEM](http://getbem.com/) and ITCSS

## Contributing

For any new feature or bug reports, please request it in [issues](https://github.com/CivicDataLab/oci-assam-frontend/issues).

See [CONTRIBUTING.md](https://github.com/CivicDataLab/oci-assam-frontend/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to [Code of Conduct](https://github.com/CivicDataLab/oci-assam-frontend/blob/main/CODE_OF_CONDUCT.md).

