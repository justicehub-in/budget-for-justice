import React from 'react';
import Head from 'next/head';
import Carousel from 'components/home/Carousel';
import Header from 'components/home/Header';
import Video from 'components/home/Video';
import Latest from 'components/home/Latest';
import Insights from 'components/home/Insights';
import News from 'components/home/News';
import Banner from 'components/_shared/Banner';
import Slider from 'components/_shared/Slider';
import { contributors } from 'data/placeholder';

const bannerDetails = {
  heading: 'Placeholder Text for Heading',
  content: (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s.
      </p>
      <p>
        For more information connect us at{' '}
        <a href="#">collaborate@civicdatalab.in</a>
      </p>
    </>
  ),
  image: '/assets/icons/send-email-fly.svg',
  color: '#F65940',
};

const Home: React.FC<{ forumData: any }> = () => {
  return (
    <>
      <Head>
        <title>Budget 4 Justice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <Header />
        <Video />
        <Latest />

        <Carousel />

        <Insights />
        <News />

        <Banner details={bannerDetails} />

        <Slider data={contributors} />
      </main>
    </>
  );
};

export default Home;
