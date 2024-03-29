import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from 'components/datasets/Search';
import {
  LawJustice,
  WomenChild,
  Police,
  HomeAffairs,
  All,
} from 'components/icons/ListingIcons';
import Toggle from 'components/_shared/Toggle';
import {
  categoryIcon,
  stripTitle,
  fetchDatasets,
  fetchStateDataset,
  tabbedInterface,
} from 'utils';
import { resourceGetter } from 'utils/resourceParser';
import { useSearch } from 'utils/search';
import Seo from 'components/_shared/seo';
import BarChartViz from 'components/viz/BarChart';
import { grantLineTransformer } from 'transformers/GrantLineTransformer';
import Table from 'components/_shared/Table';

import { ListingHeader } from 'animation/listingHeader';

const grant = ({ data, fileData, sumData, grant }) => {

  console.log('abcd', fileData, '----', sumData, '---', grant)

  const router = useRouter();
  const unique_cat = [...new Set(fileData.map((item) => item.category))];
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedIndicator, setSelectedIndicator] =
    useState('Budget Estimates');

  // page load set schemes
  let uniqueSchemes = fileData.filter((obj) => {
    if (selectedCat != '') {
      return obj.category === selectedCat;
    } else {
      return true;
    }
  });
  uniqueSchemes = uniqueSchemes.filter(
    (v, i, a) => a.findIndex((t) => t.display_title === v.display_title) === i
  );

  // set filteredscheme with selected cats unique schemes but at first page load set it with any 10 schemes
  const [filteredSchemes, setFilteredSchemes] = useState(
    selectedCat == '' ? uniqueSchemes.splice(0, 10) : uniqueSchemes
  );

  const handleCatChange = (event) => {
    setSelectedCat(event.target.value);
    console.log(fileData);
    uniqueSchemes = fileData.filter((obj) => {
      return obj.category === event.target.value;
    });
    uniqueSchemes = uniqueSchemes.filter(
      (v, i, a) =>
        a.findIndex((t) => t.display_title === v.display_title) === i
    );

    setFilteredSchemes(uniqueSchemes);
  };

  const handleSearchChange = (value) => {
    console.log('i', uniqueSchemes.length);
    console.log(uniqueSchemes);
    setFilteredSchemes(
      uniqueSchemes.filter((obj) => {
        if ('display_title' in obj) {
          return obj.display_title.toLowerCase().includes(value.toLowerCase());
        } else {
          false;
        }
      })
    );
    console.log(filteredSchemes.length);
  };

  const seo = {
    title: `${grant} | Assam | Budgets for Justice`,
    description: `${grant} | Assam | Budgets for Justice`,
  };

  useEffect(() => {
    // ceating tabbed interface for viz selector
    const tablist = document.querySelector('.viz__tabs');
    const panels = document.querySelectorAll('.viz figure');
    tabbedInterface(tablist, panels);
  }, [fileData]);

  function showDropdown(e) {
    setCurrentViz(e.target.getAttribute('id'));
    if (e.target.getAttribute('id') == '#tableView') setIsTable(true);
    else setIsTable(false);
  }
  const [isTable, setIsTable] = useState(false);
  const [currentViz, setCurrentViz] = useState('#barGraph');
  const vizToggle = [
    {
      name: 'Bar Graph',
      id: '#barGraph',
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
      name: 'Line Chart',
      id: '#lineChart',
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
      id: 'barGraph',
      graph: (
        <BarChartViz
          yAxisLabel="Value (in crores)"
          xAxisLabel="Fiscal Year"
          theme={['#4965B2', '#ED8686', '#69BC99']}
          dataset={grantLineTransformer(sumData, selectedIndicator)}
          stack={false}
          Title={`Budgets for ${grant} `}
          subTitle={`State budget data for ${grant} (2017-18 to 2021-22) `}
          left="8%"
          type="bar"
          smooth={true}
          unit="Crores" />
      ),
    },
    {
      id: 'lineChart',
      graph: (
        <BarChartViz
          yAxisLabel="Value (in crores)"
          xAxisLabel="Fiscal Year"
          theme={['#4965B2', '#ED8686', '#69BC99']}
          dataset={grantLineTransformer(sumData, selectedIndicator)}
          stack={false}
          Title={`Budgets for ${grant} `}
          subTitle={`State budget data for ${grant} (2017-18 to 2021-22) `}
          left="8%"
          type="line"
          smooth={true}
          unit="Crores"
        />
      ),
    },
  ];

  return (
    <>
      <Seo seo={seo} />
      <div className="screen">
        <div className="about__initiative1 container1">
          <Link href={'/state/assam'}>
            <a className="utxt">Home</a>
          </Link>
        </div>
        <div className="about__initiative1 container1">
          <div>
            <h2 className="heading">{grant.split('-')[1]} Budget</h2>
            <h2 className="subtxt">{grant.split('-')[0]}</h2>
          </div>
        </div>
        <main className="explorer">
          <section className="explorer__viz1 container">
            <div className="viz">
              <div className="viz__header">
                {/* viz selector toggle */}
                <ul className="viz__tabs">
                  {vizToggle.map((item, index) => (
                    <li key={`toggleItem-${index}`}>
                      <a
                        id={item.id}
                        href="#"
                        onClick={(e) => showDropdown(e)}
                      >
                        {item.icon}
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* viz graphs */}
                {vizItems.map((item, index) => (
                  <figure
                    key={`vizItem-${index}`}
                    className="viz__bar"
                    id={item.id}
                  >
                    {item.graph}
                  </figure>
                ))}
              </div>
            </div>

            {/*<figure
                          className="viz__bar"
                        >
                              <BarChartViz
                              yAxisLabel="Value (in crores)"
                              xAxisLabel="Fiscal Year"
                              theme={['#4965B2', '#ED8686', '#69BC99']}
                              dataset={grantLineTransformer(sumData, selectedIndicator)}
                              stack={false}
                              Title= {`Budgets for ${grant} `}
                              subTitle={`State budget data for ${grant} (2017-18 to 2021-22) `}
                              left="8%"
                              type='line'
                              smooth={true}
                            />
                        </figure>*/}
          </section>
        </main>

        <div className="about__initiative1 container1">
          {' '}
          <h3 className="midtx1">Schemes</h3>
        </div>
        <div className="headfoot">
          <div className="alig">
            <input
              type="text"
              placeholder="Search..."
              name="q"
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <select
              id="custom_select"
              className="select-comp"
              onChange={handleCatChange}
            >
              <option hidden>Category</option>
              {unique_cat.map((item, index) => (
                item ? <option key={`option-${index}`}>{item}</option> : ""
              ))}
            </select>
          </div>
        </div>
      </div>
      <section className="listing__items container">
        <ul>
          {filteredSchemes.map((item, index) => (
            <Link
              key={`scheme-${index}`}
              href={{
                pathname: `${router.pathname}/${item.display_title}`,
                query: { grant: grant },
              }}
            >
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    fill="none"
                    viewBox="0 0 16 18"
                  >
                    <path
                      fill="#DE4B33"
                      d="M1.33333 15.6667v-5c0-1.76806.70238-3.46375 1.95262-4.714C4.5362 4.70246 6.23189 4.00008 8 4.00008c1.76811 0 3.4638.70238 4.714 1.95262 1.2503 1.25025 1.9527 2.94594 1.9527 4.714v5H15c.2761 0 .5.2239.5.5v.6667c0 .2762-.2239.5-.5.5H1c-.276142 0-.5-.2238-.5-.5v-.6667c0-.2761.223858-.5.5-.5h.33333Zm1.69164-5.4991c-.02756.2747.19889.4991.47503.4991h.66667c.27614 0 .49615-.2251.53741-.4981.10575-.6997.43241-1.35239.9389-1.85887.50648-.50649 1.15918-.83315 1.85887-.9389C7.7749 7.32957 8 7.10956 8 6.83342v-.66667c0-.27615-.22442-.5026-.49919-.47504-1.14275.11463-2.21707.62023-3.03634 1.4395-.81928.81928-1.32488 1.8936-1.4395 3.03639Zm4.1417-9.00085c0-.276144.22385-.500002.5-.500002h.66666c.27615 0 .5.223858.5.500002v1.5c0 .27614-.22385.5-.5.5h-.66666c-.27615 0-.5-.22386-.5-.5v-1.5ZM14.1281 3.3603c.1953-.19526.5119-.19526.7071 0l.4713.47131c.1953.19523.1953.51175.0001.70703l-1.0598 1.06035c-.1952.19529-.5118.19538-.7071.00021l-.4717-.4714c-.1954-.19524-.1955-.51192-.0002-.70723l1.0603-1.06027ZM.693553 4.53864c-.195262-.19527-.195262-.51185 0-.70711l.471307-.47131c.19523-.19523.51175-.19527.70703-.00008l1.0606 1.0601c.19519.1951.1954.51146.00046.70681l-.47106.47206c-.1952.19562-.51208.19578-.70749.00038L.693553 4.53864Z"
                    ></path>
                  </svg>
                  <span>{item.display_title}</span>
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </section>
      {/* <div className="subfoot">
                        <div className="alignleft1">
                        Showing 25 of 160 
                        </div>
                        <div className="alignright">
                        <a className="explore" href="">Load More</a>
                        </div>
                  </div> */}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //fetch dataset of state
  const data = await fetchStateDataset();
  const grant = context.query.grant;

  // get the grant resource url and grant summary url
  let resUrl = '';
  let sumUrl = '';
  for (const res of data.resources) {
    if (res.name.includes(grant)) {
      resUrl = res.url;
    }
    if (res.name.includes('Grant Summary')) {
      sumUrl = res.url;
    }
  }

  // fetch and parse grant csv
  const fileData = await resourceGetter(resUrl, true);

  // fetch and parse summary csv
  let summaryData = await resourceGetter(sumUrl, true);

  // split and check grant name since there is difference in grant whole name in summary file and grant res file
  summaryData = summaryData.filter((obj) => {
    return (
      (obj.GrantNumber.split('-')[1] || '').trim().toLowerCase().includes(
        String(grant).toLowerCase())
    );
  });

  // convert summarydata  into dataobj
  const dataobj = {};
  summaryData.forEach((elm) => {
    if (dataobj[elm['Year']]) {
      dataobj[elm['Year']][elm['Indicator']] = parseFloat(elm['Value']);
    } else {
      dataobj[elm['Year']] = { [elm['Indicator']]: parseFloat(elm['Value']) };
    }
  });

  return {
    props: {
      data,
      fileData,
      sumData: dataobj,
      grant,
    },
  };
};

export default grant;
