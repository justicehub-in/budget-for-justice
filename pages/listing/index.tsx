import Head from 'next/head';
import Search from 'components/datasets/Search';
import {
  LawJustice,
  WomenChild,
  Police,
  HomeAffairs,
} from 'components/icons/ListingIcons';

const lists = [
  {
    content:
      'Sapien elementum ultrices adipiscing orci sed pellentesque dignissim integer nisi',
    category: 'police',
  },
  {
    content: 'Risus ornare sit eget ultrices tellus donec sed proin in',
    category: 'wcd',
  },
  {
    content: 'Vitae id in viverra semper tellus enim vulputate id elit',
    category: 'lj',
  },
  {
    content:
      'Facilisi nunc, massa accumsan sed egestas porttitor est diam blandit',
    category: 'police',
  },
  {
    content: 'Sit ullamcorper fusce lacus in fames id cras arcu orci',
    category: 'ha',
  },
  {
    content:
      'Fringilla vitae neque tristique tincidunt vel ultrices turpis aliquet consequat',
    category: 'police',
  },
  {
    content:
      'Sapien elementum ultrices adipiscing orci sed pellentesque dignissim integer nisi',
    category: 'wcd',
  },
  {
    content:
      'Imperdiet elit, adipiscing sed laoreet facilisis mauris gravida sit mi',
    category: 'ha',
  },
  {
    content: 'Eu facilisis leo libero auctor dictum sapien, magnis nibh',
    category: 'lj',
  },
  {
    content: 'Feugiat sed eu interdum risus, diam tortor fringilla velt',
    category: 'lj',
  },
];

function categoryIcon(cat: string) {
  if (cat == 'lj') return <LawJustice />;
  else if (cat == 'wcd') return <WomenChild />;
  else if (cat == 'police') return <Police />;
  else return <HomeAffairs />;
}

function hideToggle(liveRegion: any, toggletip: any) {
  liveRegion.innerHTML = '';
  toggletip.setAttribute('aria-pressed', 'false');
}

function handleToggleClick(e: any) {
  const toggletip = e.target;
  toggletip.setAttribute('aria-pressed', 'true');
  const message = toggletip.getAttribute('data-toggletip-content');
  const liveRegion = toggletip.nextElementSibling;

  liveRegion.innerHTML = '';
  window.setTimeout(function () {
    liveRegion.innerHTML = `
    <span class="toggletip-bubble">${message}</span>
    `;
  }, 100);

  // close on outside click
  document.addEventListener('click', function handler(e: any) {
    toggletip.setAttribute('aria-pressed', 'true');
    if (toggletip != e.target) {
      hideToggle(liveRegion, toggletip);
      this.removeEventListener('click', handler);
    }
  });

  // close on blur
  toggletip.addEventListener('blur', function handler() {
    hideToggle(liveRegion, toggletip);
    this.removeEventListener('click', handler);
  });

  // close on ESC click
  toggletip.addEventListener('keydown', function handler(e: any) {
    if ((e.keyCode || e.which) === 27) {
      hideToggle(liveRegion, toggletip);
      this.removeEventListener('click', handler);
    }
  });
}

const Lisitng = () => {
  return (
    <>
      <Head>
        <title>B4J | Listing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="listing">
        <section className="listing__header">
          <div className="container">
            <h2 className="heading">Explore Budget for Justice</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for will uncover many web
              sites still in their infancy.
            </p>
            <Search />
          </div>
        </section>

        <section className="listing__indicators container">
          <div>
            <h3>Ministry or Department Indicators: </h3>
            <ul>
              <li>
                <LawJustice />
                <span>Law &amp; Justice</span>
              </li>
              <li>
                <WomenChild />
                <span>Women &amp; Child Development</span>
              </li>
              <li>
                <Police />
                <span>Police</span>
              </li>
              <li>
                <HomeAffairs />
                <span>Home Affairs</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="listing__items container">
          <h3>
            Ministries{' '}
            <span className="dlist__toggletip">
              <button
                type="button"
                data-toggletip-content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum."
                onClick={handleToggleClick}
                aria-pressed="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    fill="#ABB0B0"
                    d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm.6 9H5.4V5.4h1.2V9Zm0-4.8H5.4V3h1.2v1.2Z"
                  />
                </svg>
                <span className="sr-only">More info</span>
              </button>
              <span role="status"></span>
            </span>
          </h3>

          <ul>
            <li>
              <a href="#">
                <LawJustice />
                <span>Law &amp; Justice</span>
              </a>
            </li>
            <li>
              <a href="#">
                <WomenChild />
                <span>Women &amp; Child Development</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Police />
                <span>Police</span>
              </a>
            </li>
            <li>
              <a href="#">
                <HomeAffairs />
                <span>Home Affairs</span>
              </a>
            </li>
          </ul>
        </section>

        <section className="listing__items container">
          <h3>
            Categories{' '}
            <span className="dlist__toggletip">
              <button
                type="button"
                data-toggletip-content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum."
                onClick={handleToggleClick}
                aria-pressed="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    fill="#ABB0B0"
                    d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm.6 9H5.4V5.4h1.2V9Zm0-4.8H5.4V3h1.2v1.2Z"
                  />
                </svg>
                <span className="sr-only">More info</span>
              </button>
              <span role="status"></span>
            </span>
          </h3>

          <ul>
            {lists.map((item, index) => (
              <li key={`categories-${index}`}>
                <a href="#">
                  {categoryIcon(item.category)}
                  <span>{item.content}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="listing__items container">
          <h3>
            Schemes{' '}
            <span className="dlist__toggletip">
              <button
                type="button"
                data-toggletip-content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum."
                onClick={handleToggleClick}
                aria-pressed="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    fill="#ABB0B0"
                    d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm.6 9H5.4V5.4h1.2V9Zm0-4.8H5.4V3h1.2v1.2Z"
                  />
                </svg>
                <span className="sr-only">More info</span>
              </button>
              <span role="status"></span>
            </span>
          </h3>

          <ul>
            {lists.map((item, index) => (
              <li key={`categories-${index}`}>
                <a href="#">
                  {categoryIcon(item.category)}
                  <span>{item.content}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Lisitng;
