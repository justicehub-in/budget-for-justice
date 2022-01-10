import React from "react";
import Head from "next/head";
import Carousel from "components/home/Carousel";
import Header from "components/home/Header";
import Video from "components/home/Video";
// import Latest from "components/home/Latest";
import Insights from "components/home/Insights";
// import News from "components/home/News";
import Banner from "components/_shared/Banner";
import Slider from "components/_shared/Slider";
import * as data from "data/home";
console.log(data);

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Budget 4 Justice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <Header data={data.didYouKnow} />
        <Video data={data.video} />
        {/* <Latest /> */}

        <Carousel data={data.carousel} />

        <Insights insightList={data.Insights} />
        {/* <News /> */}

        <div className="home__banner">
          <Banner details={data.CTA} />
        </div>

        <Slider data={data.contributors} />
      </main>
    </>
  );
};

export default Home;
