import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import {
  tabbedInterface,
  fetchAPI,
  categoryIcon,
  explorerPopulation,
} from "utils";
import {
  LawJustice,
  Share,
  Download,
  ArrowBack,
  ArrowForward,
} from "components/icons/ListingIcons";
import Indicator from "components/analytics/Indicator";
import Modal from "react-modal";
import BarChartViz from "components/viz/BarChart";
import DataAlter from "components/datasets/DataAlter";
import { cloneDeep } from "lodash";
import Image from "next/image";
// import { Table } from 'components/_shared';
import Banner from "components/_shared/Banner";

Modal.setAppElement("#__next");

type Props = {
  data: any;
  facets: any;
  csv: any;
};

const allNews = [
  {
    heading: "Euismod massa augue scelerisque semper at  tortor blandit.",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/",
    link: "",
    tags: ["Education", "Girl Education", "Budget", "Expenditure"],
  },
  {
    heading: "Ut tristique eu accumsan viverra nisl eget phasellus proin.",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/",
    link: "",
    tags: ["Education", "Girl Education", "Budget", "Expenditure"],
  },
];

const vizFilters = {};

const Analysis: React.FC<Props> = ({ data }) => {
  const [indicatorsList, setIndicatorsList] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [indicators, SetIndicators] = useState({});

  const bannerDetails = {
    heading: "Data Resources",
    content: (
      <>
        <p>All the raw data for your own explortation &amp; analysis</p>
        <div>
          <a
            className="btn-primary-invert"
            href={`https://justicehub.in/dataset/${data.id}`}
          >
            Go to JusticeHub
          </a>
          <button className="btn-primary">
            Download Data Package <Download />
          </button>
        </div>
      </>
    ),
    image: "/assets/icons/zip-file-download.svg",
    color: "#00ABB7",
  };

  const vizToggle = [
    {
      name: "Bar Graph",
      id: "#barGraph",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2ZM5 14c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1Zm4 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1Zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1Z" />
        </svg>
      ),
    },
    {
      name: "Line Chart",
      id: "#lineChart",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path d="M16 18c.5304 0 1.0391-.2107 1.4142-.5858S18 16.5304 18 16V2C18 .895431 17.1046 2e-7 16 4.4e-7l-1 2.2e-7L14 0s-.7976.0001147-1.328.00000143H2C1.46957.00000143.960859.210715.585786.585788.210714.960861 0 1.46957 0 2v14c0 .5304.210714 1.0391.585786 1.4142C.960859 17.7893 1.46957 18 2 18h14Zm-1.5-5c0 .1989-.079.3897-.2197.5303-.1406.1407-.3314.2197-.5303.2197H4c-.19891 0-.38968-.079-.53033-.2197C3.32902 13.3897 3.25 13.1989 3.25 13c0-.1989.07902-.3897.21967-.5303.14065-.1407.33142-.2197.53033-.2197h9.75c.1989 0 .3897.079.5303.2197.1407.1406.2197.3314.2197.5303ZM3.527 8.81l3.266-3.266c.15765-.15789.36357-.25851.585-.28588.22144-.02736.44566.02012.637.13488l1.663 1c.04734.02714.10223.03811.15636.03125.05414-.00686.10456-.03117.14364-.06925l2.5-2.5c.1876-.18857.4425-.29487.7085-.29553.266-.00066.5214.10439.71.29203.1886.18764.2949.44251.2955.70853.0007.26602-.1044.5214-.292.70997l-3.188 3.187c-.1577.15749-.3635.25779-.5847.28497-.22122.02717-.44517-.02033-.6363-.13497l-1.664-1c-.04719-.02742-.10206-.03866-.15623-.03197-.05416.00668-.10466.0309-.14377.06897l-2.586 2.58c-.1886.1822-.4412.283-.7034.2807-.2622-.0023-.51301-.1075-.69842-.2929-.18541-.1854-.29058-.4362-.29285-.6984-.00228-.26219.09851-.5148.28067-.7034Z" />
        </svg>
      ),
    },
  ];

  const vizItems = [
    {
      id: "barGraph",
      graph: (
        <Image
          src="/assets/images/bar-graph.jpg"
          alt=""
          width={824}
          height={492}
        />
      ),
    },
    {
      id: "lineChart",
      graph: (
        <Image
          src="/assets/images/line-chart.jpg"
          alt=""
          width={824}
          height={492}
        />
      ),
    },
  ];

  function handleButtonClick() {
    setModalIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    // ceating tabbed interface for viz selector
    const tablist = document.querySelector(".viz__tabs");
    const panels = document.querySelectorAll(".viz figure");
    tabbedInterface(tablist, panels);

    const indicatorList = [];
    // populating required indicators
    // Object.keys(csv.analytics[0]).forEach((val) => {
    //   if (val == 'tender/procurementMethod' || val == 'tender_count') return;
    //   indicatorList.push({ id: val, list: [] });
    //   vizFilters[val] = [];
    // });

    // filling indicators
    // for (const element of csv.analytics) {
    //   indicatorList.forEach((indicator) => {
    //     element[indicator.id] &&
    //       indicator.list.push({
    //         name: element[indicator.id],
    //         display_name: element[indicator.id],
    //       });
    //   });
    // }

    // getting unique value and formatting into object similar to 'search_facets' from CKAN
    indicatorList.forEach((indicator) => {
      vizFilters[indicator.id] = {
        items: indicator.list
          .filter(
            (elm: { name: any }, index: any, array: any[]) =>
              array.findIndex((t) => t.name === elm.name) === index
          )
          .slice(0, 5),
        title: indicator.id,
      };
    });

    // setting indicators state
    setIndicatorsList(vizFilters);
  }, []);

  // useEffect(() => {
  //   SetFilteredData(kpiTransformer(csv.analytics, indicators));
  // }, [indicators]);

  function handleNewVizData(val: any) {
    SetIndicators(cloneDeep(val));
  }

  return (
    <>
      <Head>
        <title>B4J | {data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="explorer">
        <div className="explorer__breadcrumb container">
          <a href="/">
            Home <ArrowForward />
          </a>
        </div>
        <div className="explorer__buttons container">
          <button className="btn-secondary">Select Another Scheme</button>
          <button className="btn-secondary-invert">
            Share <Share />
          </button>
        </div>

        <section className="explorer__heading container">
          <div className="explorer__content">
            <figure>{categoryIcon(data.tags)}</figure>
            <div>
              <h2>{data.title}</h2>
              <ul>
                {data.tags.map((item, index) => (
                  <li key={`explorer-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>{data.notes}</p>
          <div className="explorer__meta ">
            <span>
              <strong>Type of Scheme: </strong>Centrally Sponsored Scheme
            </span>
            <span>
              <strong>Frequency: </strong>Yearly
            </span>
          </div>
        </section>

        {/* <section className="explorer__summary container">
          <h3 className="sr-only">Scheme Summary</h3>
          <ul>
            <li>
              <strong>₹ 103761.63 Cr.</strong>
              <span>Total Scheme Budget</span>
            </li>
            <li>
              <strong>₹ 103761.63 Cr.</strong>
              <span>Total Scheme Expenditure</span>
            </li>
            <li>
              <strong>5.56%</strong>
              <span>of Total Budget</span>
            </li>
            <li>
              <strong>20.63%</strong>
              <span>of Dev. Budget</span>
            </li>
          </ul>
        </section> */}

        <div className="container">
          <DataAlter
            data={indicatorsList}
            newData={handleNewVizData}
            sortShow={false}
            newIndicator={handleNewVizData}
            indicators={indicators}
          />
        </div>

        <section className="explorer__viz container">
          <Indicator data={indicatorsList} newIndicator={handleNewVizData} />
          <div className="viz">
            <div className="viz__header">
              {/* viz selector toggle */}
              <ul className="viz__tabs">
                {vizToggle.map((item, index) => (
                  <li key={`toggleItem-${index}`}>
                    <a href={item.id}>
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* viz graphs */}
            {vizItems.map((item, index) => (
              <figure
                key={`vizIyem-${index}`}
                className="viz__bar"
                id={item.id}
              >
                {item.graph}
              </figure>
            ))}
          </div>
          {/* <button className="btn-primary" onClick={handleButtonClick}>
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.05967 4H6.99967V0.666667C6.99967 0.3 6.69967 0 6.33301 0H3.66634C3.29967 0 2.99967 0.3 2.99967 0.666667V4H1.93967C1.34634 4 1.04634 4.72 1.46634 5.14L4.52634 8.2C4.78634 8.46 5.20634 8.46 5.46634 8.2L8.52634 5.14C8.94634 4.72 8.65301 4 8.05967 4ZM0.333008 10.6667C0.333008 11.0333 0.633008 11.3333 0.999674 11.3333H8.99967C9.36634 11.3333 9.66634 11.0333 9.66634 10.6667C9.66634 10.3 9.36634 10 8.99967 10H0.999674C0.633008 10 0.333008 10.3 0.333008 10.6667Z"
                fill="white"
              />
            </svg>
            Download
          </button> */}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleButtonClick}
            className="dialog"
            overlayClassName="dialog__backdrop"
            contentLabel="Download Tenders"
            aria={{
              labelledby: "dialog-head",
              describedby: "dialog-para",
            }}
            closeTimeoutMS={200}
            preventScroll={true}
            htmlOpenClassName="ReactModal__Html--open"
          >
            <section className="dialog__header">
              <div>
                <h1 id="dialog-head">Download Tenders</h1>
                <p id="dialog-para">
                  Select your desired option to download the tenders
                </p>
              </div>
              <button
                type="button"
                className="dialog__close"
                id="modalCancel"
                aria-label="Close navigation"
                onClick={handleButtonClick}
              >
                &#x78;
              </button>
            </section>
            <section className="dialog__body">
              <div>
                <label htmlFor="downloadOption1">
                  <input
                    type="radio"
                    id="downloadOption1"
                    name="dialog-option"
                    value="tender-only"
                  />
                  Download the details of this tender
                </label>

                <label htmlFor="downloadOption2">
                  <input
                    type="radio"
                    id="downloadOption2"
                    name="dialog-option"
                    value="all-details"
                  />
                  Download the details of this tender along with all the
                  attached documents
                </label>
              </div>
              <div className="dialog__format">
                <p>Choose file format</p>
                <div>
                  <label htmlFor="downloadFormat1">
                    <input
                      type="radio"
                      id="downloadFormat1"
                      name="dialog-download"
                      value="csv"
                    />
                    CSV File
                  </label>

                  <label htmlFor="downloadFormat1">
                    <input
                      type="radio"
                      id="downloadFormat2"
                      name="dialog-download"
                      value="xls"
                    />
                    XLS File
                  </label>

                  <label htmlFor="downloadFormat1">
                    <input
                      type="radio"
                      id="downloadFormat3"
                      name="dialog-download"
                      value="pdf"
                    />
                    PDF File
                  </label>

                  <label htmlFor="downloadFormat1">
                    <input
                      type="radio"
                      id="downloadFormat4"
                      name="dialog-download"
                      value="zip"
                    />
                    ZIP File
                  </label>
                </div>
              </div>
            </section>
            <button
              className="btn-primary dialog__submit"
              id="modalSubmit"
              onClick={handleButtonClick}
            >
              Download
            </button>
          </Modal>
        </section>

        <Banner details={bannerDetails} />

        <section className="explorer__schemes">
          <div className="container">
            <h3 className="heading">Explore some relevant Data Summaries</h3>
            <p className="home__sub-head">
              People who review the current dataset also find these following
              datasets useful
            </p>

            <div className="explorer__schemes--split">
              {allNews.map((item, index) => (
                <article key={`relavant-${index}`}>
                  <img
                    src={`https://placekitten.com/580/23${index}`}
                    alt=""
                    width="580"
                    height="236"
                  />
                  <ul>
                    {item.tags.map((tag, list) => (
                      <li key={`relevantTags-${index}-${list}`}>{tag}</li>
                    ))}
                  </ul>
                  <header>
                    <h3>{item.heading}</h3>
                  </header>
                  <p>{item.para}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* <div role="navigation" className="explorer__pagination">
          <div className="container">
            <ul>
              <li className="prev">
                <a href="/">
                  <strong>
                    <ArrowBack /> Previous
                  </strong>
                  <br />
                  <span>Ut tristique eu accumsan</span>
                </a>
              </li>
              <li className="next">
                <a href="/">
                  <strong>
                    Next <ArrowForward />
                  </strong>
                  <br />
                  <span>viverra nisl eget phasellus</span>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchAPI(context.query.explorer);

  return {
    props: {
      data: explorerPopulation(data.result),
    },
  };
};

export default Analysis;
