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
	console.log(data)
	const router = useRouter();
	
    return (
      <>
     
        <div className="subhead">
          <div className="about__initiative container">
              <div>
                <h2 className="heading">Assam</h2>
                <h2>Law & Justice Data</h2>
              </div>
           </div> 
          
           <div className="screen">
           <div className="cardd">
           <div id="textbox">
              <p className="alignleft">Total Budget - Assam</p>
              <p className="alignright">₹ 1,07,556 Cr.&nbsp;|&nbsp;
              <span className="special">02% &nbsp;
              <img className="profitup" src="/assets/icons/profit.svg" alt="" /></span>
               </p>
            </div>
             <div className="row">
                    <div className="column">
                        <div className="card">
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
                        <div className="card">
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
                        <div className="card">
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
        <div className="mid">
            <div className="about__initiative container">
              <div>                  
                  <h3 className="midsp"> Quick Summaries</h3>
                  <h2 className="midtx">Budget Highlights</h2>
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
                  
                </div>
              </div>
               <div className="bann">
                 <div className="bannc1">
                       <h2 className="banntxt">
                        Explore how to make State Budgets Data Open, Accessible and Citizen Friendly
                        </h2>
                        <p className="bannp">
                         EA Guide to Make State Budgets Data Open, Accessible and Citizen Friendly
                        </p>
                        <a className="bannbut" href="">Open Guide Book</a>
                        
                 </div>
                 <div className="bannc2">
                 <img  src="/assets/images/ban.PNG" alt="" />
                 </div>
               </div>
               <div className="about__initiative container">
                  <div>                  
                      <h3 className="midsp">Explore Others</h3>
                      <h2 className="midtx">Relevant Platforms & Guidebooks</h2>
                </div>
              </div>
              <div className="grpcard">
              
                  <div className="column2">

                        <div className="card2">
                            <div className="subcd2">
                              <div className="subim">
                              </div>
                              <div className="subp">
                                  <h2 className="subh">Assam Budget Explorer 2019-20</h2>
                                  <h2 className="ctext">Analyze anything and everything about Assam budget</h2>
                              </div>
                                <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                         </div>

                         <div className="card2">
                            <div className="subcd2">
                                  <div className="subim">
                                  </div>
                                  <div className="subp">
                                      <h2 className="subh">Assam Budget Explorer 2019-20</h2>
                                      <h2 className="ctext">Analyze anything and everything about Assam budget</h2>
                                  </div>
                                    <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                                  </div>
                         </div>
                         <div className="card2">
                         <div className="subcd2">
                              <div className="subim">
                              </div>
                              <div className="subp">
                                  <h2 className="subh">Assam Budget Explorer 2019-20</h2>
                                  <h2 className="ctext">Analyze anything and everything about Assam budget</h2>
                              </div>
                                <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                         </div>
                       </div> 
                       <div className="column2">
                        <div className="card2">
                        <div className="subcd2">
                              <div className="subim">
                              </div>
                              <div className="subp">
                                  <h2 className="subh">Assam Budget Explorer 2019-20</h2>
                                  <h2 className="ctext">Analyze anything and everything about Assam budget</h2>
                              </div>
                                <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                         </div>
                         <div className="card2">
                         <div className="subcd2">
                              <div className="subim">
                              </div>
                              <div className="subp">
                                  <h2 className="subh">Assam Budget Explorer 2019-20</h2>
                                  <h2 className="ctext">Analyze anything and everything about Assam budget</h2>
                              </div>
                                <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                         </div>
                         <div className="card2">
                         <div className="subcd2">
                              <div className="subim">
                              </div>
                              <div className="subp">
                                  <h2 className="subh">Assam Budget Explorer 2019-20</h2>
                                  <h2 className="ctext">Analyze anything and everything about Assam budget</h2>
                              </div>
                                <img className="sarrow" src="/assets/icons/sidearrow.svg" alt="" />                        
                              </div>
                         </div>
                       </div> 
                      </div>  
                      <div className="about__initiative container">
                          <div>                  
                              <h3 className="midsp">RESOURCES</h3>
                              <h2 className="midtx">Know more about the Assam - L&J Data</h2>
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