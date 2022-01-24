import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from 'components/datasets/Search';
import {
  LawJustice,
  WomenChild,
  Police,
  HomeAffairs,
  All,
} from 'components/icons/ListingIcons';
import Toggle from 'components/_shared/Toggle';
import { categoryIcon, stripTitle, fetchDatasets } from 'utils';
import { useSearch } from 'utils/search';
import Seo from 'components/_shared/seo';

import { ListingHeader } from 'animation/listingHeader';

export const SectionTypeData = {
  Ministries:
    'This section lists all the budget datasets that are curated at a ministry / department level.',
  Categories:
    'This section lists all the budget datasets for scheme categories. These categories represent a collection of schemes and are present within the budget documents.',
  Schemes:
    'This section lists all the budget datasets for various schemes that are present within a budget document.',
};

const Lisitng = ({ data }) => {
  const [filteredObj, setFilteredObj] = useState(data);
  const [currentIndicator, setCurrentIndicator] = useState('all');

  const router = useRouter();

  useEffect(() => {
    ListingHeader('.listing__header');

    (document.getElementById('list-all') as HTMLInputElement).checked = true;
  }, []);

  function changeResult(val) {
    (document.getElementById('list-all') as HTMLInputElement).checked = true;
    setCurrentIndicator('all');

    const newObj = useSearch(val, data);
    setFilteredObj(newObj);
  }

  function useFilter(val) {
    if (val != currentIndicator) {
      if (val.getAttribute('value') == 'all') {
        setFilteredObj(data);
      } else {
        const newFilteredObj = {};

        Object.keys(filteredObj).forEach((cat) => {
          newFilteredObj[cat] = data[cat].filter((item) =>
            item.tags.includes(val.getAttribute('value'))
          );
        });
        setFilteredObj(newFilteredObj);
        setCurrentIndicator(val);
      }
    }
  }

  const seo = {
    title: 'Budgets for Justice | Datasets',
  };

  return (
    <>
      <Seo seo={seo} />
      <div className="skiptarget">
        <span id="maincontent">-</span>
      </div>
      <main className="listing">
        <section className="listing__header">
          <div className="container">
            <h2 className="heading">Budget Datasets (2016-17 to 2021-22)</h2>
            <p>
              Select a data set from the list below to view the trends in
              budget estimates, revised estimates, actual expenditure and fund
              utilisation for a scheme, scheme category or a
              ministry/department. Data points for all indicators are available
              from 2016-17 onward.
            </p>
            <Search newSearch={changeResult} />
          </div>
        </section>

        <section className="listing__indicators container">
          <div>
            <h3>Select Ministry or Department: </h3>
            <div className="listing__filter">
              <div>
                <input
                  type="radio"
                  id="list-all"
                  name="datasetList"
                  value="all"
                  onClick={(e) => useFilter(e.target)}
                />
                <label htmlFor="list-all">
                  <All /> All
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="list-law"
                  name="datasetList"
                  onClick={(e) => useFilter(e.target)}
                  value="law"
                />
                <label htmlFor="list-law">
                  <LawJustice /> Law &amp; Justice
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="list-wcd"
                  name="datasetList"
                  onClick={(e) => useFilter(e.target)}
                  value="wcd"
                />
                <label htmlFor="list-wcd">
                  <WomenChild /> Women &amp; Child Development
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="list-police"
                  name="datasetList"
                  onClick={(e) => useFilter(e.target)}
                  value="police"
                />
                <label htmlFor="list-police">
                  <Police /> Police
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="list-home"
                  name="datasetList"
                  onClick={(e) => useFilter(e.target)}
                  value="home"
                />
                <label htmlFor="list-home">
                  <HomeAffairs /> Home Affairs
                </label>
              </div>
            </div>
          </div>
        </section>

        {filteredObj.ministry.length > 0 && (
          <section className="listing__items container">
            <h3>
              Ministries <Toggle data={SectionTypeData.Ministries} />
            </h3>

            <ul>
              {filteredObj.ministry.map((item, index) => (
                <li key={`ministryList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}
                      <span>{stripTitle(item.title)}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {filteredObj.category.length > 0 && (
          <section className="listing__items container">
            <h3>
              Categories <Toggle data={SectionTypeData.Categories} />
            </h3>

            <ul>
              {filteredObj.category.map((item, index) => (
                <li key={`categoryList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}

                      <span>{stripTitle(item.title)}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {filteredObj.scheme.length > 0 && (
          <section className="listing__items container">
            <h3>
              Schemes <Toggle data={SectionTypeData.Schemes} />
            </h3>

            <ul>
              {filteredObj.scheme.map((item, index) => (
                <li key={`schemeList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}

                      <span>{stripTitle(item.title)}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchDatasets();

  return {
    props: {
      data,
    },
  };
};

export default Lisitng;
