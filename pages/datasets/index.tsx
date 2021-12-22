import React, { useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Search from "components/datasets/Search";
import {
  LawJustice,
  WomenChild,
  Police,
  HomeAffairs,
} from "components/icons/ListingIcons";
import { ToggleData } from "data/placeholder";
import Toggle from "components/_shared/Toggle";
import { datasetPopulation } from "utils";
import { useSearch } from "utils/search";

function categoryIcon(tags: any) {
  if (tags.includes("Ministry of Law and Justice")) return <LawJustice />;
  else if (tags.includes("Ministry of Law and Justice")) return <WomenChild />;
  else if (tags.includes("Ministry of Law and Justice")) return <Police />;
  else return <HomeAffairs />;
}

const Lisitng = ({ data }) => {
  const [filteredObj, setFilteredObj] = useState(data);
  const router = useRouter();

  function changeResult(val) {
    const newObj = useSearch(val, data);
    setFilteredObj(newObj);
  }

  return (
    <>
      <Head>
        <title>B4J | Datasets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="listing">
        <section className="listing__header">
          <div className="container">
            <h2 className="heading">Explore Budget for Justice</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for will uncover many web
              sites still in their infancy.
            </p>
            <Search newSearch={changeResult} />
          </div>
        </section>

        <section className="listing__indicators container">
          <div>
            <h3>Ministry or Department Indicators: </h3>
            <ul>
              <li>
                <LawJustice />
                <span>Law &amp; Justice</span>
              </li>
              <li>
                <WomenChild />
                <span>Women &amp; Child Development</span>
              </li>
              <li>
                <Police />
                <span>Police</span>
              </li>
              <li>
                <HomeAffairs />
                <span>Home Affairs</span>
              </li>
            </ul>
          </div>
        </section>

        {filteredObj.ministry.length > 0 && (
          <section className="listing__items container">
            <h3>
              Ministries <Toggle data={ToggleData} />
            </h3>

            <ul>
              {filteredObj.ministry.map((item, index) => (
                <li key={`ministryList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}
                      <span>{item.title}</span>
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
              Categories <Toggle data={ToggleData} />
            </h3>

            <ul>
              {filteredObj.category.map((item, index) => (
                <li key={`categoryList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}

                      <span>{item.title}</span>
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
              Schemes <Toggle data={ToggleData} />
            </h3>

            <ul>
              {filteredObj.scheme.map((item, index) => (
                <li key={`schemeList-${index}`}>
                  <Link href={`${router.pathname}/${item.id}`}>
                    <a>
                      {categoryIcon(item.tags)}

                      <span>{item.title}</span>
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
  const ministry = await fetch(
    "https://justicehub.in/api/3/action/package_search?fq=(tags:ministry AND groups:budget-for-justice)&rows=200"
  ).then((res) => res.json());
  const scheme = await fetch(
    "https://justicehub.in/api/3/action/package_search?fq=(tags:scheme AND groups:budget-for-justice)&rows=200"
  ).then((res) => res.json());
  const category = await fetch(
    "https://justicehub.in/api/3/action/package_search?fq=(tags:scheme-category AND groups:budget-for-justice)&rows=200"
  ).then((res) => res.json());
  const data = {
    ministry: datasetPopulation(ministry.result.results),
    scheme: datasetPopulation(scheme.result.results),
    category: datasetPopulation(category.result.results),
  };

  return {
    props: {
      data,
    },
  };
};

export default Lisitng;
