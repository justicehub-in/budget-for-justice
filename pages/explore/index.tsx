import Head from 'next/head';

const Explore = () => {
  return (
    <>
      <Head>
        <title>B4J | Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="explore container">
        <p className="explore__heading home__heading">
          Start your exploration with these featured schemes
        </p>
        <div className="explore__schemes">
          {/* 1st row - split */}
          <div className="explore__schemes--split">
            <article>
              <img
                src="https://placekitten.com/480/208"
                alt=""
                width="480"
                height="208"
              />
              <ul>
                <li>Women</li>
                <li>Budget</li>
                <li>Development</li>
                <li>Explore</li>
              </ul>
              <header>
                <h3>
                  Euismod massa augue scelerisque semper at tortor blandit.
                </h3>
              </header>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </article>
            <article>
              <img
                src="https://placekitten.com/480/207"
                alt=""
                width="480"
                height="208"
              />
              <ul>
                <li>Women</li>
                <li>Budget</li>
                <li>Development</li>
                <li>Explore</li>
              </ul>
              <header>
                <h3>
                  Euismod massa augue scelerisque semper at tortor blandit.
                </h3>
              </header>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </article>
          </div>

          {/* 2nd row */}
          <div>
            <article>
              <img
                src="https://placekitten.com/1008/324"
                alt=""
                width="1008"
                height="304"
              />
              <ul>
                <li>Women</li>
                <li>Budget</li>
                <li>Development</li>
                <li>Explore</li>
              </ul>
              <header>
                <h3>
                  Euismod massa augue scelerisque semper at tortor blandit.
                </h3>
              </header>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </article>
          </div>

          {/* 3rd row  */}
          <div>
            <article>
              <img
                src="https://placekitten.com/1008/325"
                alt=""
                width="1008"
                height="304"
              />
              <ul>
                <li>Women</li>
                <li>Budget</li>
                <li>Development</li>
                <li>Explore</li>
              </ul>
              <header>
                <h3>
                  Euismod massa augue scelerisque semper at tortor blandit.
                </h3>
              </header>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </article>
          </div>

          {/* 4th row - split */}
          <div className="explore__schemes--split">
            <article>
              <img
                src="https://placekitten.com/480/210"
                alt=""
                width="480"
                height="208"
              />
              <ul>
                <li>Women</li>
                <li>Budget</li>
                <li>Development</li>
                <li>Explore</li>
              </ul>
              <header>
                <h3>
                  Euismod massa augue scelerisque semper at tortor blandit.
                </h3>
              </header>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </article>
            <article>
              <img
                src="https://placekitten.com/480/209"
                alt=""
                width="480"
                height="208"
              />
              <ul>
                <li>Women</li>
                <li>Budget</li>
                <li>Development</li>
                <li>Explore</li>
              </ul>
              <header>
                <h3>
                  Euismod massa augue scelerisque semper at tortor blandit.
                </h3>
              </header>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </article>
          </div>
        </div>

        <section className="home__interact">
          <div className="container">
            <div className="home__interact-content">
              <h2 className="home__heading">Looking for someting else?</h2>
              <p>Check all datas sets in one go.</p>
              <a href="/listing" className="btn-primary">
                Browse All
              </a>
            </div>
            <img src="/assets/icons/arrows-btn.svg" alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Explore;
