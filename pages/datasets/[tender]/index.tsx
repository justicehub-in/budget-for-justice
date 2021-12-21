import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { tabbedInterface, fetchAPI } from "utils/index";
import { LawJustice } from "components/icons/ListingIcons";
import Indicator from "components/analytics/Indicator";
import Modal from "react-modal";
// import { resourceGetter } from 'utils/resourceParser';
import BarChartViz from "components/viz/BarChart";
// import { kpiTransformer } from 'transformers/kpiTransformer';
import DataAlter from "components/datasets/DataAlter";
import { cloneDeep } from "lodash";
// import DList from 'components/_shared/DList';
// import { Table } from 'components/_shared';

// const basicContent = [
//   {
//     title: 'Topic 1',
//     desc: 'Description',
//   },
//   {
//     title: 'Topic 2',
//     desc: 'Description',
//   },
//   {
//     title: 'Topic 3',
//     desc: 'Description',
//   },
//   {
//     title: 'Topic 4',
//     desc: 'Description',
//   },
//   {
//     title: 'Topic 5',
//     desc: 'Description',
//   },
// ];

Modal.setAppElement("#__next");

type Props = {
  data: any;
  facets: any;
  csv: any;
};

const allNews = [
  {
    heading: "Title for the published news and placeholder for all others",
    para: "Data analysis feature helps you view, analyze and use the procurement \
    data of Assam. See stories and post done using this dataset. You can also \
    contribute your own story",
    publisher: "Times of India",
    tag: "Data for Justice",
    image: "/",
    link: "",
  },
  {
    heading: "Title for the published news and placeholder for all others",
    para: "Data analysis feature helps you view, analyze and use the procurement data of Assam. See stories and post done using this dataset. You can also contribute your own story",
    publisher: "The Hindu",
    tag: "Data for Justice",
    // image: '',
    link: "",
  },
  {
    heading: "Title for the published news and placeholder for all others",
    para: "Data analysis feature helps you view, analyze and use the procurement data of Assam. See stories and post done using this dataset. You can also contribute your own story",
    publisher: "Live Law",
    tag: "Data for Justice",
    // image: '',
    link: "",
  },
  {
    heading: "Title for the published news and placeholder for all others",
    para: "Data analysis feature helps you view, analyze and use the procurement data of Assam. See stories and post done using this dataset. You can also contribute your own story",
    publisher: "Live Law",
    tag: "Data for Justice",
    image: "/",
    link: "",
  },
];

// const keywords = [
//   'Education',
//   'Girl Education',
//   'Budget',
//   'Expenditure',
//   'Yearly Trends',
//   'Education',
//   'Girl Education',
//   'Budget',
//   'Expenditure',
//   'Budget',
//   'Yearly Trends',
//   'Education',
//   'Girl Education',
//   'Budget',
//   'Expenditure',
//   'Yearly Trends',
// ];

const vizFilters = {};

const Analysis: React.FC<Props> = () => {
  const [indicatorsList, setIndicatorsList] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [indicators, SetIndicators] = useState({});
  const [filteredData, SetFilteredData] = useState([]);

  const vizToggle = [
    {
      name: "Bar",
      id: "#barGraph",
      icon: (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-stroke"
        >
          <path
            d="M0 14.5H15M5.5 12V6M9.5 12V3M13.5 12V0M1.5 9V12"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  const vizItems = [
    {
      id: "barGraph",
      graph: (
        <BarChartViz
          yAxisLabel="Sale"
          xAxisLabel="Products"
          theme={["#4965B2", "#ED8686", "#69BC99"]}
          dataset={filteredData}
          stack="True"
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
        <title>B4J | Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container explorer">
        <div>
          <button className="btn-secondary">Select Another Scheme</button>
          <button className="btn-secondary-invert">Share</button>
        </div>
        <section className="explorer__heading">
          <h2>
            Id ut neque viverra fermentum blandit pellentesque risus sit
            pretium.
          </h2>
        </section>
        {/* <MegaHeader data={headerData} /> */}
        <div className="page-wrap container">
          <section className="analysis__heading">
            <h3>Summary</h3>
            <ul>
              <li>
                <strong>₹ 103761.63 Cr.</strong>
                <p>Total Scheme Budget</p>
              </li>
              <li>
                <strong>₹ 103761.63 Cr.</strong>
                <p>Total Scheme Expenditure</p>
              </li>
              <li>
                <strong>5.56%</strong>
                <p>of Total Budget</p>
              </li>
              <li>
                <strong>20.63%</strong>
                <p>of Dev. Budget</p>
              </li>
            </ul>
          </section>

          <DataAlter
            data={indicatorsList}
            newData={handleNewVizData}
            sortShow={false}
            newIndicator={handleNewVizData}
            indicators={indicators}
          />

          <section className="analysis__content">
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
                  {filteredData.length > 0 && item.graph}
                </figure>
              ))}
            </div>
            <button className="btn-primary" onClick={handleButtonClick}>
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
            </button>

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

          {/* <section className="analysis__table">
            <Table />
          </section> */}

          <section className="tender__relevant container">
            <h3 className="heading">Explore some relevant datasets</h3>
            <p className="home__sub-head">
              Everything you need to analyse the data more efficiently
            </p>

            <div className="tender__relevant-item">
              {allNews.map((item, index) => (
                <section
                  key={`newsItem-${index}`}
                  className={item.image && "tender__relevant-item--image"}
                >
                  {item.image && (
                    <img
                      src={`https://placekitten.com/270/16${index}`}
                      alt=""
                      width="270"
                      height="160"
                    />
                  )}
                  <div>
                    <small>{item.tag}</small>
                    <h2>{item.heading}</h2>

                    <p>{item.para}</p>
                    <footer>{item.publisher}</footer>
                  </div>
                </section>
              ))}
            </div>
            {/* <footer>
              <a
                rel="nofollow noreferrer"
                className="btn-primary-invert"
                href="https://forum.justicehub.in"
              >
                See all stories
              </a>
            </footer> */}
          </section>

          <section className="analysis__meta container">
            {/* <div className="analysis__description">
              <h3 className="heading">Data Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                repellat, inventore voluptatum facilis a harum pariatur
                veritatis amet possimus soluta nemo tempore nostrum quae nulla
                quia nam quibusdam quidem expedita?
              </p>
            </div>

            <div className="analysis__keywords">
              <h3 className="heading">Keywords</h3>
              <ul>
                {keywords.map((item, index) => (
                  <li key={`keywords-${index}`}>{item}</li>
                ))}
              </ul>
            </div> */}

            <div className="analysis__resources">
              <h3 className="heading">Data &amp; Resources</h3>
              <p className="home__sub-head">
                Everything you need to analyse the data more efficiently
              </p>
              <ul>
                <li>
                  <strong>File Name</strong>
                  <p>Small Description</p>
                  <a href="#">Download</a>
                </li>
                <li>
                  <strong>File Name</strong>
                  <p>Small Description</p>
                  <a href="#">Download</a>
                </li>
                <li>
                  <strong>File Name</strong>
                  <p>Small Description</p>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
            {/* 
            <div className="analysis__info">
              <h3 className="heading">Additional Info.</h3>
              <DList content={basicContent} />
            </div> */}
          </section>

          <div role="navigation" className="tender__pagination container">
            <ul>
              <li className="prev">
                <span>Previous Dataset Title</span>
                <a href="/">
                  <span>Previous</span>
                </a>
              </li>
              <li className="next">
                <span>Next Dataset Title</span>
                <a href="/">
                  <span>Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchAPI(context.query.analysis);

  // const csv = await resourceGetter(data.result.resources, 'CSV');

  return {
    props: {
      data,
      // csv,
    },
  };
};

export default Analysis;
