import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { initializeApollo } from '../lib/apolloClient';
// import HomeSearch from 'components/home/HomeSearch';
import Carousel from 'components/home/Carousel';
import { SEARCH_QUERY } from '../graphql/queries';
import { loadNamespaces } from './_app';
import useTranslation from 'next-translate/useTranslation';

const Home: React.FC<{ locale: any; locales: any; forumData: any }> = ({
  forumData,
}) => {
  const { t } = useTranslation();
  // return post time in required format
  function getDate(time: string) {
    // ordinal suffix for date
    const getOrdinal = function (d: number) {
      let type: string;
      if (d > 3 && d < 21) type = 'th';
      else
        switch (d % 10) {
          case 1:
            type = 'st';
            break;
          case 2:
            type = 'nd';
            break;
          case 3:
            type = 'rd';
            break;
          default:
            type = 'th';
            break;
        }
      return `${d}${type}`;
    };

    const dt = new Date(time);
    const date = getOrdinal(dt.getDate());
    const month = dt.toLocaleString('default', { month: 'short' });
    return `${date} ${month}`;
  }

  return (
    <>
      <Head>
        <title>{t(`common:title`)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <Carousel />

        <section className="home__datasets">
          <div className="container">
            <h2 className="sr-only">Datasets Info</h2>
            <ul>
              <li>
                <p>25+</p>
                <p>Schemes</p>
              </li>
              <li>
                <p>255+</p>
                <p>Indicators</p>
              </li>
              <li>
                <p>12%</p>
                <p>Budget Covered</p>
              </li>
              <li>
                <p>500+</p>
                <p>Contributors</p>
              </li>
              <li>
                <p>2,00,000</p>
                <p>Active Users</p>
              </li>
            </ul>
          </div>
        </section>

        {/* <HomeSearch /> */}
        {/* <Carousel /> */}

        <section className="home__goals">
          <div className="container">
            <h2 className="home__heading">Our end goals</h2>
            <p className="home__sub-head">
              Everything you need to analyse the data more efficiently
            </p>
            <ul>
              <li>Demystifying the Budget Data for L&#38;J Sector</li>
              <li>Demystifying the Budget Data for L&#38;J Sector</li>
              <li>Demystifying the Budget Data for L&#38;J Sector</li>
            </ul>
          </div>
        </section>

        <section className="home__impact">
          <div className="container">
            <h2 className="home__heading">We can help you make an impact</h2>
            <p className="home__sub-head">
              Everything you need to analyse the data more efficiently
            </p>
          </div>
        </section>

        <section className="home__collab container">
          <div className="wrapper">
            <h2 className="home__heading">
              Lets come together &#38; create something that leaves an impact!
            </h2>
            <ul>
              <li>Collaboratively create the recommendation</li>
              <li>Collaboratively create the recommendation</li>
              <li>Collaboratively create the recommendation</li>
              <li>Collaboratively create the recommendation</li>
            </ul>
            <p>
              For more information connect us at{' '}
              <a href="mailto:collaborate@civicdatalab.in">
                collaborate@civicdatalab.in
              </a>
            </p>
          </div>
        </section>

        <section className="home__explore">
          <div className="container">
            <h2 className="home__heading">
              Explore the Budget Data for Law &#38; Justice
            </h2>
            <p className="home__sub-head">
              Everything you need to analyse the data more efficiently
            </p>

            <div className="home__explore-posts">
              <section>
                <img src="/assets/icons/analysis.jpg" alt="" />
                <h2 className="">Data Analysis</h2>

                <p>
                  Data analysis feature helps you view, analyze and use the
                  procurement data of Assam
                </p>
                <a className="" href="/analysis">
                  View Data Analysis
                </a>
              </section>
              <section>
                <img src="/assets/icons/stories.jpg" alt="" />
                <h2 className="">Data Stories</h2>

                <p>
                  See stories and post done using this dataset. You can also
                  contribute your own story
                </p>
                <a className="" href="/stories">
                  View Data Stories
                </a>
              </section>
            </div>
          </div>
        </section>

        {/* forum integerated section */}
        {/* <section className="home__discussion container">
          <h2 className="home__heading">
            Popular community discussion threads
          </h2>
          <p className="home__sub-head">
            Everything you need to analyse the data more efficiently
          </p>

          <div className="home__forum">
            {forumData.length > 0 &&
              forumData.map((post: any, index: number) => (
                <article key={`forumPost-${index}`}>
                  <div>
                    <h3>
                      <a href={`https://forum.justicehub.in/t/${post.slug}`}>
                        {post.title}
                      </a>
                    </h3>
                    <div>
                      updated by {post.last_poster_username} -{' '}
                      <time dateTime="true">{getDate(post.bumped_at)}</time>
                    </div>
                  </div>
                  <aside>
                    <ul>
                      <li>
                        <b>{post.views}</b> views
                      </li>
                      <li>
                        <b>{post.posts_count - 1}</b> comments
                      </li>
                      <li>
                        <b>{post.like_count}</b> likes
                      </li>
                    </ul>
                  </aside>
                </article>
              ))}
          </div>
          <footer>
            <a
              rel="nofollow noreferrer"
              className="btn-primary"
              href="https://forum.justicehub.in"
            >
              Open Forum
            </a>
          </footer>
        </section> */}

        <section className="home__featured container">
          <h2 className="home__heading">Featured News &amp; Stories</h2>
          <p className="home__sub-head">
            Everything you need to analyse the data more efficiently
          </p>

          <div className="home__featured-item">
            <section>
              <h2 className="">
                Title for the published news and placeholder for all others
              </h2>

              <p>
                Data analysis feature helps you view, analyze and use the
                procurement data of Assam. See stories and post done using this
                dataset. You can also contribute your own story
              </p>
              <footer className="">Times of India</footer>
            </section>
            <section>
              <h2 className="">
                Title for the published news and placeholder for all others
              </h2>

              <p>
                Data analysis feature helps you view, analyze and use the
                procurement data of Assam. See stories and post done using this
                dataset. You can also contribute your own story
              </p>
              <footer className="">The Hindi</footer>
            </section>
            <section>
              <h2 className="">
                Title for the published news and placeholder for all others
              </h2>

              <p>
                Data analysis feature helps you view, analyze and use the
                procurement data of Assam. See stories and post done using this
                dataset. You can also contribute your own story
              </p>
              <footer className="">Live Law</footer>
            </section>
            <section>
              <h2 className="">
                Title for the published news and placeholder for all others
              </h2>

              <p>
                Data analysis feature helps you view, analyze and use the
                procurement data of Assam. See stories and post done using this
                dataset. You can also contribute your own story
              </p>
              <footer className="">Live Law</footer>
            </section>
            <section>
              <h2 className="">
                Title for the published news and placeholder for all others
              </h2>

              <p>
                Data analysis feature helps you view, analyze and use the
                procurement data of Assam. See stories and post done using this
                dataset. You can also contribute your own story
              </p>
              <footer className="">Live Law</footer>
            </section>
            <section>
              <h2 className="">
                Title for the published news and placeholder for all others
              </h2>

              <p>
                Data analysis feature helps you view, analyze and use the
                procurement data of Assam. See stories and post done using this
                dataset. You can also contribute your own story
              </p>
              <footer className="">Live Law</footer>
            </section>
          </div>
          <footer>
            <a
              rel="nofollow noreferrer"
              className="btn-primary-invert"
              href="https://forum.justicehub.in"
            >
              See all stories
            </a>
          </footer>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  locales,
}) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SEARCH_QUERY,
    variables: {
      sort: 'metadata_created desc',
      rows: 3,
    },
  });

  const forumDataFetch = await fetch(
    'https://forum.justicehub.in/latest.json'
  ).then((res) => res.json());

  const forumData = forumDataFetch.topic_list.topics.slice(1, 5);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      _ns: await loadNamespaces(['common'], locale),
      locale,
      locales,
      forumData,
    },
  };
};

export default Home;
