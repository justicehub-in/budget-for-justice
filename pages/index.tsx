import React from "react";
import Head from "next/head";
// import Carousel from "components/home/Carousel";
// import Header from "components/home/Header";
import Video from "components/home/Video";
import Latest from "components/home/Latest";
import Insights from "components/home/Insights";
import News from "components/home/News";
import Banner from "components/_shared/Banner";
// import Slider from "components/_shared/Slider";
import * as data from "data/home";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Budget 4 Justice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        {/* <Header data={data.didYouKnow} /> */}
        <Video data={data.video} />
        <Latest />

        <section className="home__about">
          <div className="container">
            <figure>
              <img
                src={data.carousel["image"]}
                alt=""
                width={176}
                height={176}
              />
            </figure>
            <div>
              <p>{data.carousel["text"]}</p>
              <a className="btn-primary" href={data.carousel["link"]}>
                Read More
              </a>
            </div>
          </div>
        </section>

        {/* <Carousel data={data.carousel} /> */}

        <Insights insightList={data.Insights} />

        <div className="home__banner">
          <Banner details={data.CTA} />
        </div>

        <News />

        {/* <Slider data={data.contributors} /> */}
      </main>
    </>
  );
};

export default Home;
