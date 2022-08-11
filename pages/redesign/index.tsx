import React from 'react';
import Video from 'components/home/Video';
import Latest from 'components/home/Latest';
import Insights from 'components/home/Insights';
import News from 'components/home/News';
import Banner from 'components/_shared/Banner';
import Seo from 'components/_shared/seo';

import * as data from 'data/home';

const Home: React.FC = () => {
  return (
    <>
      <Seo />
      <main className="home">
        <Video data={data.video} />
        <Latest />

        <section className="home__about">
          <div className="container">
            <figure>
              <img
                src={data.carousel['image']}
                alt=""
                width={176}
                height={176}
              />
            </figure>
            <div>
              <p>{data.carousel['text']}</p>
              <a className="btn-primary" href={data.carousel['link']}>
                Read More
              </a>
            </div>
          </div>
        </section>
        <Insights insightList={data.Insights} />

        <div className="home__banner">
          <Banner details={data.CTA} />
        </div>

        <News />
      </main>
    </>
  );
};

export default Home;
