import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Carousel from 'components/home/Carousel';
import { loadNamespaces } from './_app';
import useTranslation from 'next-translate/useTranslation';
import { tabbedInterface } from 'utils/index';

const schemeList = [
  {
    selector: '01',
    header: 'Scheme 1',
    desc: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crows nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.',
    insights: [
      {
        item: 'Women Beneficiaries',
        value: '5,00,000+',
      },
      {
        item: 'District Covered',
        value: '250+',
      },
      {
        item: 'Women Beneficiaries',
        value: '5,00,000+',
      },
    ],
    link: '/',
  },
  {
    selector: '02',
    header: 'Scheme 2',
    desc: 'Pinnace holystone mizzenmast quarter crows nest nipperkin Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.',
    insights: [
      {
        item: 'Women Beneficiaries',
        value: '4,00,000+',
      },
      {
        item: 'District Covered',
        value: '210+',
      },
      {
        item: 'Women Beneficiaries',
        value: '2,00,000+',
      },
    ],
    link: '/',
  },
  {
    selector: '03',
    header: 'Scheme 3',
    desc: 'nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crows.',
    insights: [
      {
        item: 'Women Beneficiaries',
        value: '3,00,000+',
      },
      {
        item: 'District Covered',
        value: '220+',
      },
      {
        item: 'Women Beneficiaries',
        value: '1,00,000+',
      },
    ],
    link: '/',
  },
];

const allNews = [
  {
    heading: 'Title for the published news and placeholder for all others',
    para: 'Data analysis feature helps you view, analyze and use the procurement \
    data of Assam. See stories and post done using this dataset. You can also \
    contribute your own story',
    publisher: 'Times of India',
    tag: 'Data for Justice',
    image: '',
    link: '',
  },
  {
    heading: 'Title for the published news and placeholder for all others',
    para: 'Data analysis feature helps you view, analyze and use the procurement data of Assam. See stories and post done using this dataset. You can also contribute your own story',
    publisher: 'The Hindu',
    tag: 'Data for Justice',
    image: '',
    link: '',
  },
  {
    heading: 'Title for the published news and placeholder for all others',
    para: 'Data analysis feature helps you view, analyze and use the procurement data of Assam. See stories and post done using this dataset. You can also contribute your own story',
    publisher: 'Live Law',
    tag: 'Data for Justice',
    image: '',
    link: '',
  },
  {
    heading: 'Title for the published news and placeholder for all others',
    para: 'Data analysis feature helps you view, analyze and use the procurement data of Assam. See stories and post done using this dataset. You can also contribute your own story',
    publisher: 'The Hindu',
    tag: 'Data for Justice',
    image: '',
    link: '',
  },
  {
    heading: 'Title for the published news and placeholder for all others',
    para: 'Data analysis feature helps you view, analyze and use the procurement data of Assam. See stories and post done using this dataset. You can also contribute your own story',
    publisher: 'Live Law',
    tag: 'Data for Justice',
    image: '',
    link: '',
  },
  {
    heading: 'Title for the published news and placeholder for all others',
    para: 'Data analysis feature helps you view, analyze and use the procurement data of Assam. See stories and post done using this dataset. You can also contribute your own story',
    publisher: 'Times of India',
    tag: 'Data for Justice',
    image: '',
    link: '',
  },
];

const latest = [
  {
    name: 'Recognition of Transgender Persons in Indian',
    link: 'https://agami.in/insights/data-for-justice/11031/',
  },
  {
    name: 'Bangalore International Centre Streams: The Next Generation of Justice makers',
    link: 'https://agami.in/insights/data-for-justice/11031/',
  },
  {
    name: 'Right To Information Applications: How burdened is the Government and oragnizations? ',
    link: 'https://agami.in/insights/data-for-justice/11031/',
  },
  {
    name: 'Charcha 2021: Everyone Making Justice',
    link: 'https://agami.in/insights/data-for-justice/11031/',
  },
];

const contributors = ['/', '/', '/', '/', '/', '/', '/', '/', '/'];

const interaction = [
  {
    name: 'explorer',
    icon: '',
    content: (
      <>
        <h2 className="home__heading">Placeholder Text for Heading</h2>
        <p className="home__sub-head">
          Everything you need to analyse the data more efficiently
        </p>
        <div className="home__interact-links">
          <a
            rel="nofollow noreferrer"
            className="btn-primary"
            href="https://forum.justicehub.in"
          >
            Explore Now
          </a>
          <a
            rel="nofollow noreferrer"
            className="btn-primary-invert"
            href="https://forum.justicehub.in"
          >
            Raw Datasets
          </a>
        </div>
      </>
    ),
  },
  {
    name: 'join-us',
    icon: '',
    content: (
      <>
        <h2 className="home__heading">
          Become a valuable part of our exclusive community
        </h2>
        <p className="home__sub-head">
          Get regular newslettesr &amp; events update
        </p>
        <form className="home__interact-subscribe">
          <div>
            <label htmlFor="join-email">Email</label>
            <input id="join-email" type="email" required />
          </div>
          <button className="btn-primary">Subscribe</button>
        </form>
      </>
    ),
  },
  {
    name: 'write-us',
    icon: '',
    content: (
      <>
        <form className="home__interact-share">
          <div className="share__name">
            <label htmlFor="share-name">Name</label>
            <input id="share-name" type="text" />
          </div>
          <div className="share__email">
            <label htmlFor="share-name">Email</label>
            <input id="share-name" type="text" />
          </div>
          <div className="share__message">
            <label htmlFor="share-content">Message</label>
            <textarea
              name="share-content"
              id="share-content"
              cols={25}
              rows={5}
            ></textarea>
          </div>
          <button className="btn-primary">Share</button>
        </form>
      </>
    ),
  },
];

const Home: React.FC<{ locale: any; locales: any; forumData: any }> = () => {
  useEffect(() => {
    // create tabbed interface for schemes
    const tablist = document.getElementById('schemeSelector');
    const panels = document.querySelectorAll(
      '.home__scheme [role="tabpanel"]'
    );
    if (tablist) tabbedInterface(tablist, panels);

    // create tabbed interface for interactions
    const tablistInteraction = document.getElementById('indicatorSelector');
    const panelsInteraction = document.querySelectorAll(
      '.home__interact [role="tabpanel"]'
    );
    if (tablistInteraction)
      tabbedInterface(tablistInteraction, panelsInteraction);
  }, []);

  function updateContributors(n: number) {
    const scrollPos = document.getElementById('contributors').scrollLeft;
    document
      .getElementById('contributors')
      .scrollTo({ left: scrollPos + n * 216, behavior: 'smooth' });
  }
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t(`common:title`)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <section className="home__know">
          <div className="container wrapper">
            <h2>Did you know?</h2>
            <ul>
              <li>
                <span></span> Some interesting insight drawn from the available
                data.
              </li>
              <li>
                <span></span>
                This book is a treatise on the theory of ethics, a very popular
                but during the Renaissance.
              </li>
              <li>
                <span></span>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </li>
            </ul>
          </div>
        </section>
        <section className="home__video container">
          <div className="home__video-item">
            <img
              src={`https://placekitten.com/700/356`}
              alt=""
              width="700"
              height="356"
            />
          </div>
          <div className="home__video-desc">
            <h2 className="home__heading">Here’s what we do!</h2>
            <p>
              Watch a quick introduction on what you can do using Budget for
              Justice.
            </p>
          </div>
        </section>
        <section className="home__latest container">
          <div>
            <h2 className="home__heading">Read the Latest</h2>
            <p className="home__sub-head">
              Everything you need to analyse the data more efficiently
            </p>
          </div>
          <ul>
            {latest.map((news, index) => (
              <li key={`latest-${index}`}>
                <a href={news.link}>
                  <span>{`0${index + 1}`}</span> <p>{news.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="home__impact">
          <Carousel />
        </section>

        <section className="home__scheme">
          <div className="container">
            <h2 className="sr-only">Schemes Insight</h2>
            <ul id="schemeSelector" role="tablist">
              {schemeList.map((scheme: any, index: number) => (
                <li role="presentation" key={`schemeSelector-${index}`}>
                  <a
                    role="tab"
                    tabIndex={-1}
                    href={`#scheme-${scheme.selector}`}
                    data-id={`scheme-${scheme.selector}`}
                    id={`schemeNews${index}`}
                  >
                    {scheme.selector}
                  </a>
                </li>
              ))}
            </ul>
            <div className="home__scheme-content">
              {schemeList.map((scheme: any, index: number) => (
                <section
                  key={`scheme-news-${index}`}
                  id={`scheme-${scheme.selector}`}
                  role="tabpanel"
                  tabIndex={-1}
                  aria-labelledby={`schemeNews${index}`}
                >
                  <div>
                    <h3>{scheme.header}</h3>
                    <p>{scheme.desc}</p>
                    <ul className="home__scheme-insights">
                      {scheme.insights.map((insight: any, index2: number) => (
                        <li key={`indicator-${index}+${index2}`}>
                          <strong>{insight.value}</strong>
                          <p>{insight.item}</p>
                        </li>
                      ))}
                    </ul>
                    <a
                      rel="nofollow noreferrer"
                      className="btn-primary-invert"
                      href={scheme.link}
                    >
                      Explore Scheme
                    </a>
                  </div>
                  <img
                    src={`https://placekitten.com/240/30${index}`}
                    alt=""
                    width="240"
                    height="300"
                  />
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="home__news container">
          <h2 className="home__heading">Featured News &amp; Stories</h2>
          <p className="home__sub-head">
            Everything you need to analyse the data more efficiently
          </p>

          <div className="home__news-item">
            {allNews.map((item, index) => (
              <section key={`newsItem-${index}`}>
                <img
                  src={`https://placekitten.com/270/16${index}`}
                  alt=""
                  width="270"
                  height="160"
                />
                <small>{item.tag}</small>
                <h2>{item.heading}</h2>

                {/* <p>{item.para}</p> */}
                <footer>{item.publisher}</footer>
              </section>
            ))}
          </div>
        </section>

        <section className="home__interact ">
          <div className="container">
            <div className="home__interact-content">
              <h2 className="home__heading">Placeholder Text for Heading</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s.
              </p>
              <p>
                For more information connect us at{' '}
                <a href="#">collaborate@civicdatalab.in</a>
              </p>
            </div>
            <img src="/assets/icons/send-email-fly.svg" alt="" />
          </div>
        </section>

        <section className="home__contributors">
          <div className="container">
            <h2 className="home__heading">Contributors</h2>
            <div>
              <button
                className="slider__prev"
                onClick={() => updateContributors(-1)}
                type="button"
              >
                <span className="sr-only">Previous Slide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  fill="none"
                  viewBox="0 0 56 56"
                >
                  <path
                    fill="#f7d3cd"
                    d="M56 28c0 15.464-12.536 28-28 28S0 43.464 0 28 12.536 0 28 0s28 12.536 28 28Z"
                  />
                  <path
                    fill="#EFF2F2"
                    d="M21 29h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L32.17 27H21c-.55 0-1 .45-1 1s.45 1 1 1Z"
                  />
                </svg>
              </button>
              <ul id="contributors">
                {contributors.map((item, index) => (
                  <li key={`contri-${index}`}>
                    <img
                      src={`https://placekitten.com/200/10${index}`}
                      alt=""
                      width="200"
                      height="100"
                    />
                  </li>
                ))}
              </ul>
              <button
                className="slider__next"
                onClick={() => updateContributors(1)}
                type="button"
              >
                <span className="sr-only">Previous Slide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  fill="none"
                  viewBox="0 0 56 56"
                >
                  <path
                    fill="#F65940"
                    d="M56 28c0 15.464-12.536 28-28 28S0 43.464 0 28 12.536 0 28 0s28 12.536 28 28Z"
                    opacity=".63"
                  />
                  <path
                    fill="#EFF2F2"
                    d="M21 29h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L32.17 27H21c-.55 0-1 .45-1 1s.45 1 1 1Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  locales,
}) => {
  const forumDataFetch = await fetch(
    'https://forum.justicehub.in/latest.json'
  ).then((res) => res.json());

  const forumData = forumDataFetch.topic_list.topics.slice(1, 5);

  return {
    props: {
      _ns: await loadNamespaces(['common'], locale),
      locale,
      locales,
      forumData,
    },
  };
};

export default Home;
