import React from "react";
import Head from "next/head";
import Banner from "components/_shared/Banner";

const bannerDetails = {
  heading: "Looking for more clarity?",
  content: (
    <>
      <p>All the raw data for your own explortation &amp; analysis</p>
      <div>
        <a className="btn-primary-invert" href="https://forum.justicehub.in">
          Go to Forum
        </a>
        <a className="btn-primary" href="/faq">
          Open FAQs
        </a>
      </div>
    </>
  ),
  image: "/assets/icons/conversation-question.svg",
  color: "#00ABB7",
};

const About = () => {
  return (
    <>
      <Head>
        <title>OCI - Assam | About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="about">
        <div className="about__header">
          <div className="container">
            <div>
              <h2 className="heading">
                Budget for Justice - Lorem Ipsum is simply dummy text
              </h2>
              <p>
                Non, vestibulum, est lorem elementum donec morbi mi commodo.
                Ac, quam enim amet, nibh diam eget quis. Elementum sed vitae,
                consequat elementum nunc donec auctor commodo. Sit vestibulum
                tellus vestibulum amet dictum. Sem est pretium at id elit erat
                vitae in. Cursus id neque curabitur netus mauris. Sit vel
                risus, molestie leo sapien leo ultrices elit condimentum. At
                pulvinar vel sapien pretium pulvinar aliquet volutpat viverra.
              </p>
            </div>

            <figure>
              <img
                src="https://placekitten.com/416/540"
                width={416}
                height={540}
                alt=""
              />
            </figure>
          </div>
        </div>

        <div className="about__process container">
          <h2 className="heading">A look at how we put the pieces together</h2>
          <p className="home__sub-head">
            Know the complete process of doing what your are seeing on this
            platform
          </p>

          <div>
            <figure>
              <img
                src="https://placekitten.com/416/452"
                width={416}
                height={452}
                alt=""
              />
            </figure>
            <section>
              <h3>01. Massa quam quam semper massa</h3>
              <ul>
                <li>
                  Interdum arcu morbi lorem lorem sagittis, mattis sem sapien
                  eget. A fringilla ultricies nisi vitae ut vitae. Felis
                  gravida eu blandit gravida.
                </li>
                <li>
                  Elementum duis lacus vitae in ornare neque, enim, ultricies
                  tortor. Tincidunt sed aliquam tortor sed pellentesque nisl
                  tempus. Accumsan nec faucibus consequat arcu ut et.
                </li>
                <li>
                  Morbi donec hac dolor eu pulvinar nisi. Maecenas blandit
                  tortor tristique tincidunt montes, lacus consequat
                  adipiscing. Nisl dignissim fusce amet, adipiscing aliquet
                  elit eget.
                </li>
                <li>
                  Egestas nullam ornare mattis turpis sed pellentesque. Nunc,
                  vehicula neque nunc scelerisque felis, dictum eu. Vitae
                  feugiat velit in sed elementum.
                </li>
              </ul>
            </section>
          </div>

          <div>
            <section>
              <h3>02. Ac egestas lectus elit urna</h3>
              <ul>
                <li>
                  Interdum arcu morbi lorem lorem sagittis, mattis sem sapien
                  eget. A fringilla ultricies nisi vitae ut vitae. Felis
                  gravida eu blandit gravida.
                </li>
                <li>
                  Elementum duis lacus vitae in ornare neque, enim, ultricies
                  tortor. Tincidunt sed aliquam tortor sed pellentesque nisl
                  tempus. Accumsan nec faucibus consequat arcu ut et.
                </li>
                <li>
                  Morbi donec hac dolor eu pulvinar nisi. Maecenas blandit
                  tortor tristique tincidunt montes, lacus consequat
                  adipiscing. Nisl dignissim fusce amet, adipiscing aliquet
                  elit eget.
                </li>
                <li>
                  Egestas nullam ornare mattis turpis sed pellentesque. Nunc,
                  vehicula neque nunc scelerisque felis, dictum eu. Vitae
                  feugiat velit in sed elementum.
                </li>
              </ul>
            </section>
            <figure>
              <img
                src="https://placekitten.com/416/453"
                width={416}
                height={452}
                alt=""
              />
            </figure>
          </div>

          <div>
            <figure>
              <img
                src="https://placekitten.com/416/454"
                width={416}
                height={452}
                alt=""
              />
            </figure>
            <section>
              <h3>03. Elit ipsum mollis sit nunc</h3>
              <ul>
                <li>
                  Interdum arcu morbi lorem lorem sagittis, mattis sem sapien
                  eget. A fringilla ultricies nisi vitae ut vitae. Felis
                  gravida eu blandit gravida.
                </li>
                <li>
                  Elementum duis lacus vitae in ornare neque, enim, ultricies
                  tortor. Tincidunt sed aliquam tortor sed pellentesque nisl
                  tempus. Accumsan nec faucibus consequat arcu ut et.
                </li>
                <li>
                  Morbi donec hac dolor eu pulvinar nisi. Maecenas blandit
                  tortor tristique tincidunt montes, lacus consequat
                  adipiscing. Nisl dignissim fusce amet, adipiscing aliquet
                  elit eget.
                </li>
                <li>
                  Egestas nullam ornare mattis turpis sed pellentesque. Nunc,
                  vehicula neque nunc scelerisque felis, dictum eu. Vitae
                  feugiat velit in sed elementum.
                </li>
              </ul>
            </section>
          </div>
        </div>

        <section className="about__analysis">
          <div className="container">
            <h2 className="heading">
              Best Analysis Platform for the Budget for Justice
            </h2>

            <p className="home__sub-head">
              People who review the current dataset also find these following
              datasets useful
            </p>

            <div>
              <section>
                <h3>Raw Data</h3>
                <p>
                  Non, vestibulum, est lorem elementum donec morbi mi commodo.
                  Ac, quam enim amet, nibh diam eget quis. Elementum sed vitae,
                  consequat elementum nunc donec auctor commodo. Sit vestibulum
                  tellus vestibulum amet dictum. Sem est pretium at id elit
                  erat vitae in. Cursus id neque curabitur netus mauris. Sit
                  vel risus, molestie leo sapien leo ultrices elit condimentum.
                  At pulvinar vel sapien pretium pulvinar aliquet volutpat
                  viverra.
                </p>
                <a className="btn-primary" href="/">
                  See Methodologies
                </a>
              </section>

              <section>
                <h3>Realtime Data Explorer</h3>
                <p>
                  Non, vestibulum, est lorem elementum donec morbi mi commodo.
                  Ac, quam enim amet, nibh diam eget quis. Elementum sed vitae,
                  consequat elementum nunc donec auctor commodo. Sit vestibulum
                  tellus vestibulum amet dictum. Sem est pretium at id elit
                  erat vitae in. Cursus id neque curabitur netus mauris. Sit
                  vel risus, molestie leo sapien leo ultrices elit condimentum.
                  At pulvinar vel sapien pretium pulvinar aliquet volutpat
                  viverra.
                </p>
                <a className="btn-primary" href="/">
                  Explore Now
                </a>
              </section>
            </div>
          </div>
        </section>

        <section className="about__end container">
          <h2 className="heading">Heading - Placeholder</h2>

          <p className="home__sub-head">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <p className="about__end-para">
            Fusce etiam cursus feugiat fermentum sem. Aliquam vitae mi vel
            egestas in vel massa. Lorem nisl urna, scelerisque fermentum purus
            ac hendrerit enim habitant. Sagittis, viverra mus imperdiet justo.
            Mattis scelerisque tempus placerat placerat non, nec aenean a.
            Convallis blandit fermentum eget aliquet nec tortor sit et diam.
            Praesent nunc dictumst purus fermentum viverra. Felis eget at sit
            bibendum sagittis nibh convallis rutrum. Rutrum neque ut faucibus
            dictumst ullamcorper. Feugiat pellentesque tristique volutpat amet,
            scelerisque. Tortor interdum lacus vel donec arcu risus arcu,
            dolor. Habitant auctor nunc arcu, suspendisse laoreet. Sapien in
            egestas urna, dignissim. At non lectus quam morbi nullam commodo,
            rhoncus ornare.
          </p>

          <Banner details={bannerDetails} />
        </section>
      </main>
    </>
  );
};

export default About;
