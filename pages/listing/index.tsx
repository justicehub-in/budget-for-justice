import Head from 'next/head';
import Search from 'components/datasets/Search';
import {
  LawJustice,
  WomenChild,
  Police,
  HomeAffairs,
} from 'components/icons/ListingIcons';
import { lists, ToggleData } from 'data/placeholder';
import Toggle from 'components/_shared/Toggle';

function categoryIcon(cat: string) {
  if (cat == 'lj') return <LawJustice />;
  else if (cat == 'wcd') return <WomenChild />;
  else if (cat == 'police') return <Police />;
  else return <HomeAffairs />;
}

const Lisitng = () => {
  return (
    <>
      <Head>
        <title>B4J | Listing</title>
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
            <Search />
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

        <section className="listing__items container">
          <h3>
            Ministries <Toggle data={ToggleData} />
          </h3>

          <ul>
            <li>
              <a href="#">
                <LawJustice />
                <span>Law &amp; Justice</span>
              </a>
            </li>
            <li>
              <a href="#">
                <WomenChild />
                <span>Women &amp; Child Development</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Police />
                <span>Police</span>
              </a>
            </li>
            <li>
              <a href="#">
                <HomeAffairs />
                <span>Home Affairs</span>
              </a>
            </li>
          </ul>
        </section>

        <section className="listing__items container">
          <h3>
            Categories <Toggle data={ToggleData} />
          </h3>

          <ul>
            {lists.map((item, index) => (
              <li key={`categories-${index}`}>
                <a href="#">
                  {categoryIcon(item.category)}
                  <span>{item.content}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="listing__items container">
          <h3>
            Schemes <Toggle data={ToggleData} />
          </h3>

          <ul>
            {lists.map((item, index) => (
              <li key={`categories-${index}`}>
                <a href="#">
                  {categoryIcon(item.category)}
                  <span>{item.content}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Lisitng;
