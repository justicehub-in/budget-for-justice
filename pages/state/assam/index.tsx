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
import Image from 'next/image';

import { useSearch } from 'utils/search';
import Seo from 'components/_shared/seo';

import { ListingHeader } from 'animation/listingHeader';

export const iconObj = {
  Justice: '/assets/icons/justice.svg',
  Jails: '/assets/icons/jail.svg',
  Police: '/assets/icons/police.svg',
  'Law and Justice': '/assets/icons/law.svg',
};

const assam = ({ data }) => {
  const router = useRouter();
  const [selectedHighlight, setSelectedHighlight] =
    useState('Law and Justice');

  const seo = {
    title: 'Budgets for Justice | Assam',
  };

  function togglehighlight(item) {
    setSelectedHighlight(item);
  }

  const caseStudies = [
    {
      title: 'Budgeting for Open Air Prisons',
      desc: 'The budget for Open Air Jails is allocated as part of Grant No. 15 in the state budget of Assam.',
      link: '#',
      image: {
        url: '/assets/images/case1.png',
        width: 324,
        height: 235,
      },
    },
    {
      title: 'Police budgeting in Assam',
      desc: 'In 2022-23, Assam allocated 6% of its total expenditure on police, which is higher than the average expenditure on police by states (4.3%).',
      link: '#',
      image: {
        url: '/assets/images/case2.png',
        width: 324,
        height: 235,
      },
    },
    {
      title: 'Budgets for Legal Aid',
      desc: 'The budget for Legal Aid is allocated as part of Grant No. 3 (Administration of Justice) in the state budget of Assam.',
      link: '#',
      image: {
        url: '/assets/images/case3.png',
        width: 324,
        height: 235,
      },
    },
  ];
  return (
    <>
      <Seo seo={seo} />
      <div>
        <div className="screen1">
          <div className="about__initiative1 container1">
            <div>
              <h2 className="heading">Budgets for Justice | Assam</h2>
              <h3 className="subheading">Explore and analyse the patterns of budget allocation and expenditure under Administration of Justice, Prison and Police related budget heads in Assam.</h3>
            </div>
          </div>

          <div className="cardbg">
            <div className="card">
              <div id="maintextbox">
                <p className="alignleft">Total Budget - Assam - 2022-23</p>
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
                <div className="columnf">
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
                          45.40% &nbsp;
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
                      <a
                        className="explore"
                        href={'assam/Jails'}
                      >
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
                        href={'assam/Justice'}
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
                          33.50% &nbsp;
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
                      <a
                        className="explore"
                        href={'assam/Police'}
                      >
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
          <div className="about__initiative1 container1">
            {/* <div>
              <h2 className="heading">Budgets for Justice | Assam</h2>
              <h3 className="subheading">Explore and analyse the patterns of budget allocation and expenditure under Administration of Justice, Prison and Police related budget heads in Assam.</h3>
            </div> */}
            <div>
              <h3 className="s2head">Case Studies</h3>
              <h2 className="s2txt">The case studies highlight the current state of law and justice-related budgeting in Assam. Check these links to know more.</h2>
            </div>
          </div>
          <div className="caseStudies">
            <ul className="caseStudiesul">
              {caseStudies.map((item, index) => (
                <li key={index} className="caseStudiesli">
                  <section className="caseStudiessec">
                    <article className="caseStudiesart">
                      <div className="caseStudiesimg">
                        <Image
                          src={item.image.url}
                          width={item.image.width}
                          height={item.image.height}
                          alt={item.title}
                        />
                      </div>
                      <div className="caseStudiescontent">
                        <h2 className="caseStudiescontenth2">{item.title}</h2>
                        <p className="caseStudiescontentp">{item.desc}</p>
                      </div>
                    </article>
                    <div>
                      <a href={item.link} className="casestudiesbutton">
                        Explore
                      </a>
                    </div>
                  </section>
                </li>
              ))}
            </ul>
          </div>
          <div className="s2banner">
            <div className="s2bannerc1">
              <h2 className="s2bannerhead">
                Explore how to make State Budgets Data Open, Accessible and
                Citizen Friendly
              </h2>
              <p className="s2bannertxt">
                A guidebook for state finance departments to make State Budgets data open,
                accessible and citizen-friendly
              </p>
              <a
                className="s2bannerbut"
                href="https://civicdatalab.in/resources/state-budget-data-guidebook.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Open Guide Book
              </a>
            </div>

            <img className="s2bannerc2" src="/assets/images/ban.PNG" alt="" />
          </div>
          <div className="about__initiative1 container1">
            <div>
              <h3 className="s2head">Platforms to analyse budget data</h3>
              <h2 className="s2txt">Use these platforms to explore and understand the state budget of Assam in much more detail</h2>
            </div>
          </div>
          <div className="grpcard">
            <div className="column2">
              <div className="card2">
                <div className="subcd2">
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
                  <div className="subp">
                    <a href="https://assam2022.openbudgetsindia.org/en/">
                      <h2 className="subh">Assam Budget Explorer 2022-23</h2>
                    </a>
                    <h2 className="ctext">
                      Analyze everything about Assam budget 2022-2023
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
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
                  <div className="subp">
                    <a href="https://assam2021.openbudgetsindia.org/en/">
                      {' '}
                      <h2 className="subh">Assam Budget Explorer 2021-22</h2>
                    </a>
                    <h2 className="ctext">
                      Analyze everything about Assam budget 2021-2022
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
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
                  <div className="subp">
                    <a href="https://assam2020.openbudgetsindia.org/en/">
                      {' '}
                      <h2 className="subh">Assam Budget Explorer 2020-21</h2>
                    </a>
                    <h2 className="ctext">
                      Analyze everything about Assam Budget 2020-21
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
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
                  <div className="subp">
                    <a href="https://assam2019.openbudgetsindia.org/en/">
                      {' '}
                      <h2 className="subh">Assam Budget Explorer 2019-20</h2>
                    </a>
                    <h2 className="ctext">
                      Analyze everything about Assam Budget 2019-20
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
          <div className="about__initiative1 container1">
            <div>
              <h3 className="s2head">Other Resources</h3>
              {/* <h2 className="s2txt">Know more about the Assam - L&J Data</h2> */}
            </div>
          </div>
          <div className="lasttxt">
            <div className="lastcon">
              <p className="sp1"></p>
              <a
                className="sptext"
                href="https://finassam.in/budget_documents/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p>Assam Budget - Official Documents</p>
              </a>
            </div>
            <div className="lastcon">
              <p className="sp2"></p>
              <a
                className="sptext"
                href="https://openbudgetsindia.org/organization/about/assam"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p>Assam Budget Data on Open Budgets India</p>
              </a>
            </div>
            <div className="lastcon">
              <p className="sp3"></p>
              <a
                className="sptext"
                href="https://medium.com/civicdatalab/budgets-for-justice-making-law-and-justice-budgets-accessible-and-actionable-28eb56a0d348"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p>
                  {
                    'Budgets for Justice: Making Law and Justice budgets Accessible and Actionable'
                  }
                </p>
              </a>
            </div>
            <div className="lastcon">
              <p className="sp4"></p>
              <a
                className="sptext"
                href="https://rbi.org.in/Scripts/AnnualPublications.aspx?head=State%20Finances%20:%20A%20Study%20of%20Budgets"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p>{'RBI - State Finances : A Study Of Budgets'}</p>
              </a>
            </div>
            <div className="lastcon">
              <p className="sp5"></p>
              <a
                className="sptext"
                href="https://budgetbasics.openbudgetsindia.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p>Budget Basics</p>
              </a>
            </div>
            <div className="lastcon">
              <p className="sp6"></p>
              <a
                className="sptext"
                href="https://prsindia.org/budgets/states/assam-budget-analysis-2022-23"
                target="_blank"
                rel="noreferrer noopener"
              >
                <p>Assam Budget Analysis - 2022/23 by PRS</p>
              </a>
            </div>
            {/* <div className="resourcebutton">
              <a
                rel="noreferrer noopener"
                href="/state/assam/resources"
                className="btn-primary footer__substack"
              >
                Explore More
              </a>
            </div> */}
          </div>
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
