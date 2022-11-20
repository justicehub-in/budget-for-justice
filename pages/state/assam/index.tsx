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
      title: 'CaseStudie 1',
      desc: 'A sample desc about case studies',
      link: '#',
      image: {
        url: '/assets/images/ban.PNG',
        width: 324,
        height: 235,
      },
    },
    {
      title: 'CaseStudie 2',
      desc: 'A sample desc about case studies',
      link: '#',
      image: {
        url: '/assets/images/ban.PNG',
        width: 324,
        height: 235,
      },
    },
    {
      title: 'CaseStudie 3',
      desc: 'A sample desc about case studies',
      link: '#',
      image: {
        url: '/assets/images/ban.PNG',
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
              <h2 className="heading">Assam</h2>
              <h2 className="subheading">Law & Justice Data</h2>
            </div>
          </div>

          <div className="cardbg">
            <div className="card">
              <div id="maintextbox">
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
            <div>
              <h3 className="s2head">CaseStudies</h3>
              <h2 className="s2txt">Budget Highlights</h2>
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
                A Guide to Make State Budgets Data Open, Accessible and Citizen
                Friendly
              </p>
              <a
                className="s2bannerbut"
                href="https://bit.ly/cdlguideobi"
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
              <h3 className="s2head">Explore Other</h3>
              <h2 className="s2txt">Relevant Platforms & Guidebooks</h2>
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
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
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
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
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
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
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
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
                  <div className="subp">
                    <a href="https://union2019i.openbudgetsindia.org/en/">
                      <h2 className="subh">
                        Union Budget Explorer 2019-20(I)
                      </h2>
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
                  <img
                    className="obilogo"
                    src="/assets/images/obilogo.png"
                    alt=""
                  />
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
          <div className="about__initiative1 container1">
            <div>
              <h3 className="s2head">RESOURCES</h3>
              <h2 className="s2txt">Know more about the Assam - L&J Data</h2>
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
            <div className="resourcebutton">
              <a
                rel="noreferrer noopener"
                href="/state/assam/resources"
                className="btn-primary footer__substack"
              >
                Explore More
              </a>
            </div>
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
