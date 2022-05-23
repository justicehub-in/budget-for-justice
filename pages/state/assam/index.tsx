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
} from 'utils';
import { useSearch } from 'utils/search';
import Seo from 'components/_shared/seo';

import { ListingHeader } from 'animation/listingHeader';

export const iconObj = {
  Justice: '/assets/icons/justice.svg',
  Jails: '/assets/icons/jail.svg',
  Police: '/assets/icons/police.svg',
  'Law and Justice': '/assets/icons/law.svg',
};

export const highlights = {
  'Law and Justice': [
    'In Assam, the total share of the Law and Justice budget, which includes the budget for Administration of Justice, Jails, and Police, is 6.5%.',
    'Though the total expenditure budget has increased by 11.1 % over the previous year, the law and justice budget saw an increase of only 1%',
    'Within the Law and Justice category, Jails (Grant No. 15) received the maximum increase of 45.5% in terms of budget allocation as compared with the budget estimates for 2021-22. This is followed by Police (Grant No. 14) with an increase of 33.5%. The allocated budget for the Administration of Justice (Grant No. 3) got increased by 19.18%.',
  ],
  Jails: [
    'The share of budget allocated for Diet ranges between 12% to 13% of the entire budget for Jails.',
    'The share of budget allocated for diets in 2021-22 is 12.9 % which is lesser than the share in 2020-21 which was 13.68%',
    'In 2021-22, 38.6% of the entire estimated budget for Jails was allocated to the Salaries head under District Jails. This is the largest share among all heads present within the Jails grant.',
    'Share of the estimated budget allocated for Capital Outlay on Public Works ranges from 14% (in 2018-19) to 18% (in 2021-22)',
    'Share of the estimated budget under centrally sponsored schemes is between 1% to 2 %',
  ],
  Justice: [
    'Share of the estimated budget allocated to Civil and Session Courts has increased from 23.9 % in 2018-19 to 28.64 % in 2021-22 whereas that of Criminal Courts has increased from 15.16 % in 2018-19 to 28.7 % in 2021-22',
    'Share of the estimated budget allocated to High Courts has increased from 9.53 % in 2018-19 to 13.81 % in 2021-22',
    'Share of the estimated budget allocated for Capital Outlay on Public Works has decreased from 18.18% (in 2018-19) to 9.32% (in 2021-22)',
    'Share of the estimated budget allocated for Legal aid to the poor has seen a marginal increase from 1.77% (in 2018-19) to 2.75% (in 2021-22)',
    'Share of the estimated budget allocated for Legal Advisers and Counsels which includes the budget for Public Prosecutors, government advocates, advocate generals, etc) decreased from 10.73% (in 2019-20) to 8.48% (in 2021-22)',
  ],
  Police: [
    'The share of budget allocated to District police which includes heads such as Salaries, Purchase of Motor vehicles, rent, Maintenance, etc has been the highest in the last 4 years. The share has increased from 27% in 2018-19 to 30% in 2021-22',
    'The share of the budget allocated for Armed Police Battalions ranges from 17% - to 18% of the entire budget',
    'The budget allocated for National Scheme for Modernisation of Police & Other Forces is 0.32% in 2021-22',
    'The share of budget allocated under Education and Training related heads has decreased from 1.01 % in 2018-19 to 0.77% in 2021-22',
    'The share of budget allocated under Welfare of Police Personnel related heads has decreased from 0.17 % in 2018-19 to 0.14% in 2021-22',
  ],
};

const assam = ({ data }) => {
  const router = useRouter();
  const [selectedHighlight, setSelectedHighlight] =
    useState('Law and Justice');

  const seo = {
    title: 'Budgets for Justice | Assam',
  };

  function togglehighlight(item) {
    console.log(item);
    setSelectedHighlight(item);
  }

  return (
    <>
      <Seo seo={seo} />
      <div className="screen1">
        <div className="about__initiative container1">
          <div>
            <h2 className="heading">Assam</h2>
            <h2 className='subheading'>Law & Justice Data</h2>
          </div>
        </div>

        <div className="cardbg">
          <div className="card">
            <div id="textbox">
              <p className="alignleft">Total Budget - Assam</p>
              <p className="alignright">
                ₹ 1,19,551.06 Cr.&nbsp;|&nbsp;
                <span className="special">
                  11.1% &nbsp;
                  <img
                    className="profitup"
                    src="/assets/icons/profit.svg"
                    alt=""
                  />
                </span>
              </p>
            </div>
            <div className="row">
              <div className="column">
                <div className="subcard">
                  <div id="textbox">
                    <p className="alignleft">Jails</p>
                    <p className="alignright">
                      <span className="ctext">Grant No. 15</span>
                    </p>
                  </div>
                  <hr></hr>
                  <div id="textbox">
                    <p className="alignleft">₹ 159.78 Cr</p>
                    <p className="alignright">
                      <span className="special">
                        45.4% &nbsp;
                        <img
                          className="profitup"
                          src="/assets/icons/profit.svg"
                          alt=""
                        />
                      </span>
                    </p>
                  </div>
                  <div id="textbox">
                    <p className="alignleft">
                      <span className="ctext">0.13% of Total Budget</span>
                    </p>
                    <a className="explore" href={'assam/Grant No 15 - Jails'}>
                      Explore
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="subcard">
                  <div id="textbox">
                    <p className="alignleft">Justice</p>
                    <p className="alignright">
                      <span className="ctext">Grant No. 3</span>
                    </p>
                  </div>
                  <hr></hr>
                  <div id="textbox">
                    <p className="alignleft">₹ 728.51 Cr</p>
                    <p className="alignright">
                      <span className="special">
                        19.18% &nbsp;
                        <img
                          className="profitup"
                          src="/assets/icons/profit.svg"
                          alt=""
                        />
                      </span>
                    </p>
                  </div>
                  <div id="textbox">
                    <p className="alignleft">
                      <span className="ctext">0.61% of Total Budget</span>
                    </p>
                    <a
                      className="explore"
                      href={'assam/Grant No 3 - Administration of Justice'}
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="subcard">
                  <div id="textbox">
                    <p className="alignleft">Police</p>
                    <p className="alignright">
                      <span className="ctext">Grant No. 14</span>
                    </p>
                  </div>
                  <hr></hr>
                  <div id="textbox">
                    <p className="alignleft">₹ 6920.6 Cr</p>
                    <p className="alignright">
                      <span className="special">
                        33.5% &nbsp;
                        <img
                          className="profitup"
                          src="/assets/icons/profit.svg"
                          alt=""
                        />
                      </span>
                    </p>
                  </div>
                  <div id="textbox">
                    <p className="alignleft">
                      <span className="ctext">5.79% of Total Budget</span>
                    </p>
                    <a className="explore" href={'assam/Grant No 14 - Police'}>
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="screen2">
        <div className="about__initiative container1">
          <div>
            <h3 className="s2head"> Quick Summaries</h3>
            <h2 className="s2txt">Budget Highlights</h2>
          </div>
        </div>
        <div className="dis">
          <div className="column1">
            {/*                   {data.resources.map((item, index) => (
                    <div className="card1" key={`grant-${index}`}>
                        <Link href={`${router.pathname}/${item.name}`}>
                        <div className="alignleft1">
                          <img className="profitup1" src={iconObj[item.name]} alt="" />                        
                          <h2>{item.name}</h2> 
                        </div>
                      </Link>
                    </div>
))} */}
            {Object.keys(highlights).map((item, index) => (
              <div
                className="card1"
                style={{ cursor: 'pointer' }}
                key={`grant-${index}`}
                role="button"
                tabIndex={0}
                onClick={() => togglehighlight(item)}
                onKeyDown={() => togglehighlight(item)}
              >
                <div className="alignleft1">
                  <img className="profitup1" src={iconObj[item]} alt="" />
                  <h2>{item}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="space">
            <ul>
              {highlights[selectedHighlight].map((item, index) => (
                <li key={`highlight-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="s2banner">
          <div className="s2bannerc1">
            <h2 className="s2bannerhead">
              Explore how to make State Budgets Data Open, Accessible and
              Citizen Friendly
            </h2>
            <p className="s2bannertxt">
              EA Guide to Make State Budgets Data Open, Accessible and Citizen
              Friendly
            </p>
            <a className="s2bannerbut" href="https://bit.ly/cdlguideobi" target="_blank" rel="noreferrer noopener">
              Open Guide Book
            </a>
          </div>

          <img className="s2bannerc2" src="/assets/images/ban.PNG" alt="" />
        </div>
        <div className="about__initiative container1">
          <div>
            <h3 className="s2head">Explore Other</h3>
            <h2 className="s2txt">Relevant Platforms & Guidebooks</h2>
          </div>
        </div>
        <div className="grpcard">
          <div className="column2">
            <div className="card2">
              <div className="subcd2">
                <img src="/assets/images/crd1.png" alt="" />
                <div className="subp">
                  <a href="https://union.openbudgetsindia.org/en/">
                    <h2 className="subh">Union Budget Explorer 2022-23</h2>
                  </a>
                  <h2 className="ctext">
                    Analyze everything about Union budget 2022-2023
                  </h2>
                </div>
                <img
                  className="sarrow"
                  src="/assets/icons/sidearrow.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="card2">
              <div className="subcd2">
                <img src="/assets/images/crd2.png" alt="" />
                <div className="subp">
                  <a href="https://union2021.openbudgetsindia.org/en/">
                    {' '}
                    <h2 className="subh">Union Budget Explorer 2021-22</h2>
                  </a>
                  <h2 className="ctext">
                    Analyze everything about Union budget 2021-2022
                  </h2>
                </div>
                <img
                  className="sarrow"
                  src="/assets/icons/sidearrow.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="card2">
              <div className="subcd2">
                <img src="/assets/images/crd3.png" alt="" />
                <div className="subp">
                  <a href="https://union2020.openbudgetsindia.org/en/">
                    {' '}
                    <h2 className="subh">Union Budget Explorer 2020-21</h2>
                  </a>
                  <h2 className="ctext">
                    Analyze everything about Union Budget 2020-21
                  </h2>
                </div>
                <img
                  className="sarrow"
                  src="/assets/icons/sidearrow.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="column2">
            <div className="card2">
              <div className="subcd2">
                <img src="/assets/images/crd4.png" alt="" />
                <div className="subp">
                  <a href="https://union2019.openbudgetsindia.org/en/">
                    {' '}
                    <h2 className="subh">Union Budget Explorer 2019-20</h2>
                  </a>
                  <h2 className="ctext">
                    Analyze everything about Union Budget 2019-20
                  </h2>
                </div>
                <img
                  className="sarrow"
                  src="/assets/icons/sidearrow.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="card2">
              <div className="subcd2">
                <img src="/assets/images/crd5.png" alt="" />
                <div className="subp">
                  <a href="https://union2019i.openbudgetsindia.org/en/">
                    <h2 className="subh">Union Budget Explorer 2019-20(I)</h2>
                  </a>
                  <h2 className="ctext">
                    Analyze everything about Union Budget 2019-20(I)
                  </h2>
                </div>
                <img
                  className="sarrow"
                  src="/assets/icons/sidearrow.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="card2">
              <div className="subcd2">
                <img src="/assets/images/crd6.png" alt="" />
                <div className="subp">
                  <a href="https://union2018.openbudgetsindia.org/en/">
                    <h2 className="subh">Union Budget Explorer 2018-19</h2>
                  </a>
                  <h2 className="ctext">
                    Analyze everything about Union budget 2018-19
                  </h2>
                </div>
                <img
                  className="sarrow"
                  src="/assets/icons/sidearrow.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about__initiative container1">
          <div>
            <h3 className="s2head">RESOURCES</h3>
            <h2 className="s2txt">Know more about the Assam - L&J Data</h2>
          </div>
        </div>
        <div className="lasttxt">
          <div className="lastcon">
            <p className="sp1"></p>
            <a href="https://finassam.in/budget_documents/" target="_blank" rel="noreferrer noopener"><p>Assam Budget - Official Documents</p></a>
          </div>
          <div className="lastcon">
            <p className="sp2"></p>
            <a href="https://openbudgetsindia.org/organization/about/assam" target="_blank" rel="noreferrer noopener"><p>Assam Budget Data on Open Budgets India</p></a>
          </div>
          <div className="lastcon">
            <p className="sp3"></p>
            <a href="https://medium.com/civicdatalab/budgets-for-justice-making-law-and-justice-budgets-accessible-and-actionable-28eb56a0d348" target="_blank" rel="noreferrer noopener"><p>{"Budgets for Justice: Making Law and Justice budgets Accessible and Actionable"}</p></a>
          </div>
          <div className="lastcon">
            <p className="sp4"></p>
            <a href="https://rbi.org.in/Scripts/AnnualPublications.aspx?head=State%20Finances%20:%20A%20Study%20of%20Budgets" target="_blank" rel="noreferrer noopener"><p>{"RBI - State Finances : A Study Of Budgets"}</p></a>
          </div>
          <div className="lastcon">
            <p className="sp5"></p>
            <a href="https://budgetbasics.openbudgetsindia.org/" target="_blank" rel="noreferrer noopener"><p>Budget Basics</p></a>
          </div>
          <div className="lastcon">
            <p className="sp6"></p>
            <a href="https://prsindia.org/budgets/states/assam-budget-analysis-2022-23" target="_blank" rel="noreferrer noopener"><p>Assam Budget Analysis - 2022/23 by PRS</p></a>
          </div>
          <a
            rel="noreferrer noopener"
            href="/state/assam/resources"
            className="btn-primary footer__substack"
          >
            Explore More
          </a>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchStateDataset();

  return {
    props: {
      data,
    },
  };
};

export default assam;
