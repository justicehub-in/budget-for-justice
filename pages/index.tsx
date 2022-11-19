import React, { useEffect } from 'react';
import Video from 'components/home/Video';
import * as data from 'data/home';
import { GetServerSideProps } from 'next';
import { Converter } from 'showdown';
import fs from 'fs';
import Seo from 'components/_shared/seo';
import Link from 'next/link';

function collapseHeader() {
  // Get all the <h2> headings
  const headings = document.querySelectorAll('.faq__content1 h3');

  Array.prototype.forEach.call(headings, (heading) => {
    // Give each <h2> a toggle button child
    // with the SVG plus/minus icon
    heading.innerHTML = `
      <button aria-expanded="false">
        <span>${heading.textContent}</span>
         <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.11997 1.29L5.99997 5.17L9.87997 1.29C10.27 0.899998 10.9 0.899998 11.29 1.29C11.68 1.68 11.68 2.31 11.29 2.7L6.69997 7.29C6.30997 7.68 5.67997 7.68 5.28997 7.29L0.699971 2.7C0.309971 2.31 0.309971 1.68 0.699971 1.29C1.08997 0.909998 1.72997 0.899998 2.11997 1.29Z" fill="black" fill-opacity="0.32"/>
        </svg>
      </button>
    `;

    // Function to create a node list
    // of the content between this <h3> and the next
    const getContent = (elem) => {
      const elems = [];
      while (
        elem.nextElementSibling &&
        elem.nextElementSibling.tagName !== 'H3'
      ) {
        elems.push(elem.nextElementSibling);
        elem = elem.nextElementSibling;
      }

      // Delete the old versions of the content nodes
      elems.forEach((node) => {
        node.parentNode.removeChild(node);
      });

      return elems;
    };

    // Assign the contents to be expanded/collapsed (array)
    const contents = getContent(heading);

    // Create a wrapper element for `contents` and hide it
    const wrapper = document.createElement('div');
    wrapper.hidden = true;

    // Add each element of `contents` to `wrapper`
    contents.forEach((node) => {
      wrapper.appendChild(node);
    });

    // Add the wrapped content back into the DOM
    // after the heading
    heading.parentNode.insertBefore(wrapper, heading.nextElementSibling);

    // Assign the button
    const btn = heading.querySelector('button');

    btn.onclick = () => {
      // Cast the state as a boolean
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      // Switch the state
      btn.setAttribute('aria-expanded', !expanded);
      // Switch the content's visibility
      wrapper.hidden = expanded;
    };
  });
}

const home = ({ content }) => {
  useEffect(() => {
    collapseHeader();
  }, []);
  return (
    <>
      <section className="home">
        <Video data={data.video} />
      </section>

      <section className="qa">
        <main className="faq container">
          <div
            className="faq__content1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </main>
      </section>
      <div className="budge">
        <div className="h1banner">
          <div className="h1bannerc1">
            <h2 className="h1bannerhead">
              Explore <span>Union </span>Budget for Justice from 2016-17 to
              2022-23
            </h2>

            <a
              className="h1bannerbut"
              href="/datasets"
              target="_blank"
              rel="noreferrer noopener"
            >
              Launch Explorer
            </a>
          </div>
        </div>
        <div className="h2banner">
          <div className="h1bannerc1">
            <h2 className="h1bannerhead">
              Explore <span>Assam’s</span> Budget for Justice from 2016-17 to
              2021-22
            </h2>
            <p className="h1bannertxt"></p>
            <a
              className="h1bannerbut"
              href="/state/assam"
              target="_blank"
              rel="noreferrer noopener"
            >
              Launch Explorer
            </a>
          </div>
        </div>
      </div>
      <div className="about__initiative1 container1">
        <div>
          <h2 className="heading1">Understanding Budgets</h2>
          {/* <h2 className="subheading1">
            Lorem ipsum is simply dummy text for printing and typewriting
          </h2> */}
        </div>
      </div>
      <div className="grpcard">
        <div className="column2">
          <div className="card2">
            <div className="subcd2">
              <img
                className="obilogo"
                src="/assets/images/podcast.png"
                alt=""
              />
              <div className="cardh1">
                <h2 className="pctxt">
                  Understanding Law and Justice budgets in India
                </h2>
                <a
                  className="cardbut1"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://dataforjustice.substack.com/p/understanding-budgets-for-law-and-justice-1393947"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/notes.png"
                    alt=""
                  />
                  Read Notes
                </a>
                <a
                  className="cardbut2"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://open.spotify.com/episode/6vUst4BfrBgEbl8r8Njb95?si=TMNwsyN7RtC4WPVZ_Cnt0w"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/Vector.png"
                    alt=""
                  />
                  Listen Podcast
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="subcd2">
              <img
                className="obilogo"
                src="/assets/images/podcast.png"
                alt=""
              />
              <div className="cardh1">
                <h2 className="pctxt">
                  Understanding budgeting for Police in India
                </h2>
                <a
                  className="cardbut1"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://dataforjustice.substack.com/p/understanding-police-budgets-in-india-1393948"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/notes.png"
                    alt=""
                  />
                  Read Notes
                </a>
                <a
                  className="cardbut2"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://open.spotify.com/episode/2RReAAOp0SvTBjgJQdkPP4?si=cD6omUslTw-YMYh1f43htQ"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/Vector.png"
                    alt=""
                  />
                  Listen Podcast
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="subcd2">
              <img
                className="obilogo"
                src="/assets/images/podcast.png"
                alt=""
              />
              <div className="cardh1">
                <h2 className="pctxt">
                  Budgets for Legal Aid with Project 39A
                </h2>
                <a
                  className="cardbut1"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://dataforjustice.substack.com/p/understanding-legal-aid-budgets-in-india-1393946"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/notes.png"
                    alt=""
                  />
                  Read Notes
                </a>
                <a
                  className="cardbut2"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://open.spotify.com/episode/6TKvn8M8LBVuc1ttAMt6K9?si=9f574ae4bd224aee"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/Vector.png"
                    alt=""
                  />
                  Listen Podcast
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="card2">
            <div className="subcd2">
              <img
                className="obilogo"
                src="/assets/images/podcast.png"
                alt=""
              />
              <div className="cardh1">
                <h2 className="pctxt">
                  Budgets for e-Courts and Judicial Infra
                </h2>
                <a
                  className="cardbut1"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://dataforjustice.substack.com/p/understanding-budgets-on-e-courts-and-judicial-infrastructure-1393944"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/notes.png"
                    alt=""
                  />
                  Read Notes
                </a>
                <a
                  className="cardbut2"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://open.spotify.com/episode/0sZZbar5rXjehoRQrECKsV?si=fe303360e5e94a09"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/Vector.png"
                    alt=""
                  />
                  Listen Podcast
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="subcd2">
              <img
                className="obilogo"
                src="/assets/images/podcast.png"
                alt=""
              />
              <div className="cardh1">
                <h2 className="pctxt">
                  Insights from the India Justice Report
                </h2>
                <a
                  className="cardbut1"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://dataforjustice.substack.com/p/a-conversation-with-india-justice-report-1393942"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/notes.png"
                    alt=""
                  />
                  Read Notes
                </a>
                <a
                  className="cardbut2"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://open.spotify.com/episode/0EPrflC8z96dsLLY0Vsc2l?si=a4d5ee07d15c4f70"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/Vector.png"
                    alt=""
                  />
                  Listen Podcast
                </a>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="subcd2">
              <img
                className="obilogo"
                src="/assets/images/podcast.png"
                alt=""
              />
              <div className="cardh1">
                <h2 className="pctxt">
                  Budgets for correctional facilities in India
                </h2>
                <a
                  className="cardbut1"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://dataforjustice.substack.com/p/understanding-budgets-for-correctional-facilities-1393943"
                >
                  <img
                    className="cardlogos"
                    src="/assets/images/notes.png"
                    alt=""
                  />
                  Read Notes
                </a>

                <div className="dum">Listen Podcasttt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__initiative1 container1">
        <div>
          <h2 className="heading1">Featured News & Stories</h2>
          {/* <h2 className="subheading1">
            Lorem ipsum is simply dummy text for printing and typewriting
          </h2> */}
        </div>
      </div>
      <div className="grpcard">
        <div className="column3">
          <div className="card2">
            <div className="subcd3">
              <div className="story1">
                <h2 className="cardh1">Union Budget</h2>
                <Link href="https://www.indiaspend.com/explainers/how-the-union-budget-funds-indias-justice-system-804821">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cardh2"
                  >
                    How The Union Budget Funds India&#39;s Justice System
                  </a>
                </Link>
                {/* <hr></hr>
                <div className="articles">
                  <img
                    className="articleslogo"
                    src="/assets/images/Icon.png"
                    alt=""
                  />
                  <h2 className="articlename">Times of India</h2>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
        <div className="column3">
          <div className="card2">
            <div className="subcd3">
              <div className="story1">
                <h2 className="cardh1">Budgets for Justice</h2>
                <Link href="https://medium.com/civicdatalab/budgets-for-justice-making-law-and-justice-budgets-accessible-and-actionable-28eb56a0d348">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className="cardh2"
                  >
                    Making Law and Justice budgets Accessible and Actionable
                  </a>
                </Link>
                {/* <hr></hr>
                <div className="articles">
                  <img
                    className="articleslogo"
                    src="/assets/images/Icon.png"
                    alt=""
                  />
                  <h2 className="articlename">Times of India</h2>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partners">
        <h2 className="partnersh1">Our Partners</h2>
        <div className="partnersinfo">
          <div className="clients1">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://agami.in/"
            >
              <img
                className="agami"
                src="/assets/images/agami_dark.png"
                alt=""
              />
            </a>
          </div>
          <div className="clients2">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://civicdatalab.in/"
            >
              <img className="cdl" src="/assets/images/cdl_logo.png" alt="" />
            </a>
          </div>
          <div className="clients3">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.civis.vote/"
            >
              <img className="civis" src="/assets/images/civis.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let content = fs.readFileSync(`data/mpfaq.md`, 'utf8');
  const converter = new Converter();
  content = converter.makeHtml(content);
  return { props: { content } };
};

export default home;
