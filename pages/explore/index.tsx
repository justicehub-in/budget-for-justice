import Head from "next/head";
import Banner from "components/_shared/Banner";

const bannerDetails = {
  heading: "Looking for someting else?",
  content: (
    <>
      <p>Check all datas sets in one go.</p>
      <a href="/listing" className="btn-primary">
        Browse All
      </a>
    </>
  ),
  image: "/assets/icons/arrows-btn.svg",
  color: "#00ABB7",
};

const Explore = () => {
  return (
    <>
      <Head>
        <title>B4J | Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="explore container">
        <div className="explore__header">
          <p className="heading">
            Start your exploration with these featured schemes
          </p>
        </div>
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

        <Banner details={bannerDetails} />
      </main>
    </>
  );
};

export default Explore;
