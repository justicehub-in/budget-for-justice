<h1 align="center">Budgets for Justice</h1>
<p align="center">An initiative by <a href="https://justicehub.in/">Justice Hub</a> and <a href="https://civis.vote/">Civis</a></p>
<p align="center">
<a href="https://github.com/justicehub-in/budget-for-justice/blob/main/LICENSE">
<img alt="GNU Affero General Public License v3.0" src="https://img.shields.io/badge/License-AGPL_v3-blue.svg"/>
</a>
</p>
<p align="center">The <a href='https://budgets.justicehub.in'>Budgets for Justice</a> platform brings together open budget data from the Union Government of India over the last few years to reveal trends and patterns in budget allocation and expenditures for the law and justice sector. Our objective is to make budget data more accessible, usable and comprehensive so we can stay informed about how the law and justice sector (including courts, police, prison, legal aid etc.) is funded and sourced. Read more <a href='https://budgets.justicehub.in/about'>here</a></p>

- [Features](#features)
- [Getting Started](#getting-started)
- [Guide](#guide)
  - [Styling 🎨](#styling-)
  - [Pages](#pages)
  - [Data fetching](#data-fetching)
    - [Fetch all datasets for listing pages](#fetch-all-datasets-for-listing-pages)
    - [Fetch particluar dataset](#fetch-particluar-dataset)
- [Developers](#developers)
  - [Boot the local instance](#boot-the-local-instance)
  - [Architecture](#architecture)
- [Contributing](#contributing)

## Features

- 🗺️ Unified sites: abilitiy to present data and content in one seamless site, pulling datasets from a DMS (eg CKAN) and a CMS.
- ♿ Accessible: The platform is accessible and screen-reader friendly.
- 👩‍💻 Developer friendly: built with NextJS and SASS to make the developer experience a treat.
- 🚀 ITCSS & BEM: Combination of BEM methodology and ITCSS architecture to better organize the styling and make it scalable.
- 📋 Typescript: Developed usign typescript to improve development experience by catching errors and providing fixes.
- 🧱 Extensible: quickly extend and develop/import your own React components
- 📝 Well documented: full set of documentation plus the documentation of NextJS

## Getting Started

Install a recent version of Node. Minimum Node 14 is recommended.

## Guide

### Styling 🎨

We use SASS preprocessor to manage styling. All of it can be found at `/styles` directory where it's managed by using ITCSS architecture to make it scalable. For naming, we use BEM methodology.

### Pages

- Home `/`
- Dataset lisitng `/datasets`
- Explorer `/datasets/[explorer]`
- About `/about`
- FAQ `/faq`

### Data fetching

We use REST API to fetch data from CKAN. Some of the data comes as metadata and other is in CSV files, for which we use different transformers. You can find more about it in `/transoformers` directory.

#### Fetch all datasets for listing pages

When visiting a dataset lisitng page, you may want to fetch the particular type of datasets. To do so, you can use `getServerSideProps` function from NextJS:

```javascript
import { GetServerSideProps } from "next";
import { fetchDatasets } from "utils/index";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchDatasets();

  return {
    props: {
      data,
    },
  };
};
```

- `fetchDatasets` helps to fetch a list of datasets.

Learn more about them [here](utils/README.md).

#### Fetch particluar dataset

Depending on dataset, they may return metadata in the form of `JSON` or a combination of `JSON` and `CSV` file. We can use `fetchAPI` in this case:

```javascript
import { GetServerSideProps } from "next";
import { fetchAPI } from "utils/index";
import { resourceGetter } from "utils/resourceParser";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchAPI(context.query.tender);
  const csv = await resourceGetter(data.result.resources, "CSV");

  return {
    props: {
      data,
      csv,
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

### Architecture

- Language: Javascript
- Framework: [Next.js](https://nextjs.com/)
- Styling: [SASS](https://sass-lang.com/) with [BEM](http://getbem.com/) and ITCSS
- Animation: [GSAP](https://greensock.com/gsap/)

## Contributing

For any new feature or bug reports, please request it in [issues](https://github.com/justicehub-in/budget-for-justice/issues).

See [CONTRIBUTING.md](https://github.com/justicehub-in/budget-for-justice/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to [Code of Conduct](https://docs.google.com/document/d/11q5eXXm0qJE6ljtTC39t_5X5XYwoQKh95fsYxExoGlw/preview).
