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
import { categoryIcon, stripTitle, fetchDatasets, fetchStateDataset } from 'utils';
import { useSearch } from 'utils/search';
import Seo from 'components/_shared/seo';

import { ListingHeader } from 'animation/listingHeader';

export const iconObj = {"Dataset - Administration of Justice":"/assets/icons/justice.svg", "Dataset - Jails":"/assets/icons/jail.svg", "Police":"/assets/icons/police.svg", "law":"/assets/icons/law.svg"};
	

const assam = ({data}) => {

	const router = useRouter();
	
    return (
      <>
     
        <div className="screen1">
            <div className="about__initiative container1">
                <div>
                  <h2 className="heading">Assam</h2>
                  <h2>Law & Justice Data</h2>
                </div>
            </div> 
          
           <div className="cardbg">
              <div className="card">
               <div id="textbox">
                  <p className="alignleft">Total Budget - Assam</p>
                  <p className="alignright">
                    ₹ 1,07,556 Cr.&nbsp;|&nbsp;<span className="special">02% &nbsp;
                    <img className="profitup" src="/assets/icons/profit.svg" alt="" /></span>
                  </p>
               </div>
              <div className="row">
                    <div className="column">
                        <div className="subcard">
                            <div id="textbox">
                              <p className="alignleft">Jails</p>
                              <p className="alignright"><span className="ctext">Grant No. 023</span></p>
                            </div>
                            <hr></hr>
                            <div id="textbox">
                              <p className="alignleft">₹ 16,966 Cr</p>
                              <p className="alignright"><span className="special1">05% &nbsp;
                              <img className="profitdn" src="/assets/icons/loss.svg" alt="" /></span></p>
                            </div>
                            <div id="textbox">
                              <p className="alignleft"><span className="ctext">02% of Total Budget</span></p>
                                <a className="explore" href="">Explore</a>
                            </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="subcard">
                        <div id="textbox">
                              <p className="alignleft">Justice</p>
                              <p className="alignright"><span className="ctext">Grant No. 023</span></p>
                            </div>
                            <hr></hr>
                            <div id="textbox">
                              <p className="alignleft">₹ 61,255 Cr</p>
                              <p className="alignright"><span className="special">02% &nbsp;
                              <img className="profitup" src="/assets/icons/profit.svg" alt="" /></span></p>
                            </div>
                            <div id="textbox">
                              <p className="alignleft"><span className="ctext">02% of Total Budget</span></p>
                               <a className="explore" href="">Explore</a>
                            </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="subcard">
                        <div id="textbox">
                              <p className="alignleft">Police</p>
                              <p className="alignright"><span className="ctext">Grant No. 023</span></p>
                            </div>
                            <hr></hr>
                            <div id="textbox">
                              <p className="alignleft">₹ 16,966 Cr</p>
                              <p className="alignright"><span className="special">03% &nbsp;
                              <img className="profitup" src="/assets/icons/profit.svg" alt="" /></span></p>
                            </div>
                            <div id="textbox">
                              <p className="alignleft"><span className="ctext">02% of Total Budget</span></p>
                              <a className="explore" href="">Explore</a>
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
                  {data.resources.map((item, index) => (
                    <div className="card1" key={`grant-${index}`}>
                        <Link href={`${router.pathname}/${item.name}`}>
                        <div className="alignleft1">
                          <img className="profitup1" src={iconObj[item.name]} alt="" />                        
                          <h2>{item.name}</h2> 
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="space">
                   <ul>    
                          <li>
                          The total share of the Law and Justice budget, in Assam, which includes the budget for Administration of Justice, Jails, and Police is 6.5%. 
                          </li>
                          <hr></hr>
                          <li>
                          The total share has seen an increase of 1% as compared to the previous budget where the total share was around 5.5%.
                          </li>
                          <hr></hr>
                          <li>
                          Within the Law and Justice category, Jails (Grant No. 15) received the maximum increase of 45.5% in terms of budget allocation as compared with the budget estimates for 2021-22. This is followed by Police (Grant No. 14) with an increase of 33.5%. The allocated budget for Administration of Justice (Grant No. 3) got increased by 19.18%.
                          </li>
                          <hr></hr>
                          <li>
                          The total share of the Law and Justice budget, in Assam, which includes the budget for Administration of Justice, Jails, and Police is 6.5%.
                          </li>
                    </ul>
                 </div>
           </div>
               <div className="s2banner">
                    <div className="s2bannerc1">
                        <h2 className="s2bannerhead">
                          Explore how to make State Budgets Data Open, Accessible and Citizen Friendly
                          </h2>
                          <p className="s2bannertxt">
                          EA Guide to Make State Budgets Data Open, Accessible and Citizen Friendly
                          </p>
                          <a className="s2bannerbut" href="">Open Guide Book</a>
                    </div>
                    <div className="s2bannerc2">
                     <img  src="/assets/images/ban.PNG" alt="" />
                    </div>
               </div>
               <div className="about__initiative container1">
                  <div>                  
                      <h3 className="s2head">Explore Others</h3>
                      <h2 className="s2txt">Relevant Platforms & Guidebooks</h2>
                  </div>
              </div>
              <div className="grpcard">
                  <div className="column2">
                      <div className="card2">
                            <div className="subcd2">
                                <img src="/assets/images/crd1.png" />
                                 <div className="subp">
                                    <a href="https://union.openbudgetsindia.org/en/"><h2 className="subh">Union Budget Explorer 2022-23</h2></a>
                                    <h2 className="ctext">Analyze everything about Union budget 2022-2023</h2>
                                  </div>
                                    <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                           </div>
                          <div className="card2">
                             <div className="subcd2">
                                <img src="/assets/images/crd2.png" />
                                  <div className="subp">
                                       <a href="https://union2021.openbudgetsindia.org/en/"> <h2 className="subh">Union Budget Explorer 2021-22</h2></a>
                                        <h2 className="ctext">Analyze everything about Union budget 2021-2022</h2>
                                  </div>
                                  <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                          </div>
                         <div className="card2">
                             <div className="subcd2">
                                <img src="/assets/images/crd3.png" />
                                <div className="subp">
                                  <a href="https://union2020.openbudgetsindia.org/en/"> <h2 className="subh">Union Budget Explorer 2020-21</h2></a>
                                  <h2 className="ctext">Analyze everything about Union Budget 2020-21</h2>
                                </div>
                                  <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                         </div>
                       </div> 
                       <div className="column2">
                           <div className="card2">
                              <div className="subcd2">
                                   <img src="/assets/images/crd4.png" />
                                    <div className="subp">
                                      <a href="https://union2019.openbudgetsindia.org/en/"> <h2 className="subh">Union Budget Explorer 2019-20</h2></a>
                                      <h2 className="ctext">Analyze everything about Union Budget 2019-20</h2>
                                    </div>
                                      <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                            </div>
                            <div className="card2">
                            <div className="subcd2">
                            <img src="/assets/images/crd5.png" />
                                <div className="subp">
                                      <a href='https://union2019i.openbudgetsindia.org/en/'><h2 className="subh">Union Budget Explorer 2019-20(I)</h2></a>
                                      <h2 className="ctext">Analyze everything about Union Budget 2019-20(I)</h2>
                                  </div>
                                    <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                                  </div>
                            </div>
                            <div className="card2">
                              <div className="subcd2">
                                <img src="/assets/images/crd6.png" />
                                <div className="subp">
                                    <a href='https://union2018.openbudgetsindia.org/en/'><h2 className="subh">Union Budget Explorer 2018-19</h2></a>
                                    <h2 className="ctext">Analyze everything about Union budget 2018-19</h2>
                                </div>
                                  <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
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
                            <p>Eu egestas facilisis a, platea posuere massa eu.</p>
                        </div>
                        <div className="lastcon">
                            <p className="sp2"></p>
                            <p>Tempor, nulla vestibulum enim mattis neque.</p>
                        </div>
                        <div className="lastcon">
                            <p className="sp3"></p>
                            <p>Auctor commodo lectus consectetur urna urna id.</p>
                        </div>
                        <div className="lastcon">
                            <p className="sp4"></p>
                            <p>Lacus placerat nisi, pharetra volutpat id id et, massa.</p>
                         </div>
                        <div className="lastcon">
                            <p className="sp5"></p>
                            <p>Mauris ipsum justo tellus facilisi.</p>
                         </div>
                        <div className="lastcon">
                            <p className="sp6"></p>
                            <p>In vulputate feugiat ultricies ante volutpat, non hendrerit in.</p>
                        </div>
                        <div className="lastcon">
                            <p className="sp7"></p>
                            <p>Vel tellus sed dui hac dui egestas cras morbi.</p>
                        </div>
                        <div className="lastcon">
                            <p className="sp8"></p>
                            <p>Sadad adnnd akdmafl aldmavdv ewnbyj dgeg fherhe</p>
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