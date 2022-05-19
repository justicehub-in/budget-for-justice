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
import { resourceGetter } from 'utils/resourceParser';
import { useSearch } from 'utils/search';
import Seo from 'components/_shared/seo';

import { ListingHeader } from 'animation/listingHeader';

const grant = ({data, fileData, grant}) => {
	const router = useRouter();
	const unique_cat = [...new Set(fileData.map(item => item.category))]; 
	const [selectedCat, setSelectedCat] = useState(unique_cat[0]);
    
    // page load set schemes
	let uniqueSchemes = fileData.filter(obj => {return obj.category === selectedCat});
	uniqueSchemes = uniqueSchemes.filter((v,i,a)=>a.findIndex(t=>(t.display_title === v.display_title))===i)
    const [filteredSchemes, setFilteredSchemes] = useState(uniqueSchemes);
	    
	const handleCatChange = (event) => {
       setSelectedCat(event.target.value);

	   uniqueSchemes = fileData.filter(obj => {return obj.category === event.target.value});
	   uniqueSchemes = uniqueSchemes.filter((v,i,a)=>a.findIndex(t=>(t.display_title === v.display_title))===i)       
       
       setFilteredSchemes(uniqueSchemes);
    };        
    
    const handleSearchChange = (value) => {
        console.log("i",uniqueSchemes.length)
        console.log(value);
        setFilteredSchemes(uniqueSchemes.filter(obj => {return obj.display_title.toLowerCase().includes(value.toLowerCase())} ) )
        console.log(filteredSchemes.length)
    };    
    
    const seo = {
    title: `${grant} | Assam | Budgets for Justice`,
    description: `${grant} | Assam | Budgets for Justice`,
  };
	
    return (
      <>
        <Seo seo={seo} />
        <div className="screen">
              <div><Link href={"/state/assam"}><a className="utxt">Home</a></Link></div>
              <div className="about__initiative container1">
                <div>
                  <h2 className="heading">{grant.split("-")[1]} Budget</h2>
                  <h2 className="subtxt">{grant.split("-")[0]}</h2>
                </div>
              </div> 
              <div className="subscreen">
                     <div className="subcl">
                          <div className="subcrd">
                            <div className="subcrdtxt">
                              <p>Budget 2019-20</p>
                            </div>
                            <hr></hr>
                            <div id="textbox">
                                      <p className="alignleft">₹ 16,966 Cr</p>
                                      <p className="alignright"><span className="special1">10% &nbsp;
                                      <img className="profitdn" src="/assets/icons/loss.svg" alt="" /></span></p>
                            </div>
                          </div>
                          <div className="subcrd2">
                            <div className="subcrdtxt">
                              <p>Revised Budget 2018-19</p>
                            </div>
                            <hr></hr>
                            <div id="textbox">
                              <p className="alignleft">₹ 556.69 Cr</p> 
                            </div>
                          </div>
                          <div className="subcrd2">
                            <div className="subcrdtxt">
                              <p>Budget 2018-19</p>
                            </div>
                            <hr></hr>
                            <div id="textbox">
                              <p className="alignleft">₹ 896.21 Cr</p>       
                            </div>
                          </div>
                          <div className="subcrd2">
                            <div className="subcrdtxt">
                              <p>Actuals 2018-19</p>
                            </div>
                            <hr></hr>
                            <div id="textbox">
                              <p className="alignleft">₹ 753.98 Cr</p>
                            </div>
                          </div>
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

                  <div className="headfoot">
                      <h3 className="midtx1">Schemes</h3>
                      <div className="alig" >
                      <input  type="text"  placeholder='Search...' name="q" onChange={(e) => handleSearchChange(e.target.value)} />
                      <select id="custom_select" className="select-comp" onChange={handleCatChange}>
                        <option hidden>Category</option>
                        {unique_cat.map((item, index) => (
                                <option key={`option-${index}`}>{item}</option>
                          ))}
                      </select>
                      </div>
                   </div>
         </div>
                  <section className="listing__items container">
                      <ul>
                        {filteredSchemes.map((item, index) => (
                          <Link key={`scheme-${index}`} href={{pathname:`${router.pathname}/${item.display_title}`, query: { grant: grant}}}>
                              <li><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none" viewBox="0 0 16 18">
                                <path fill="#DE4B33" d="M1.33333 15.6667v-5c0-1.76806.70238-3.46375 1.95262-4.714C4.5362 4.70246 6.23189 4.00008 8 4.00008c1.76811 0 3.4638.70238 4.714 1.95262 1.2503 1.25025 1.9527 2.94594 1.9527 4.714v5H15c.2761 0 .5.2239.5.5v.6667c0 .2762-.2239.5-.5.5H1c-.276142 0-.5-.2238-.5-.5v-.6667c0-.2761.223858-.5.5-.5h.33333Zm1.69164-5.4991c-.02756.2747.19889.4991.47503.4991h.66667c.27614 0 .49615-.2251.53741-.4981.10575-.6997.43241-1.35239.9389-1.85887.50648-.50649 1.15918-.83315 1.85887-.9389C7.7749 7.32957 8 7.10956 8 6.83342v-.66667c0-.27615-.22442-.5026-.49919-.47504-1.14275.11463-2.21707.62023-3.03634 1.4395-.81928.81928-1.32488 1.8936-1.4395 3.03639Zm4.1417-9.00085c0-.276144.22385-.500002.5-.500002h.66666c.27615 0 .5.223858.5.500002v1.5c0 .27614-.22385.5-.5.5h-.66666c-.27615 0-.5-.22386-.5-.5v-1.5ZM14.1281 3.3603c.1953-.19526.5119-.19526.7071 0l.4713.47131c.1953.19523.1953.51175.0001.70703l-1.0598 1.06035c-.1952.19529-.5118.19538-.7071.00021l-.4717-.4714c-.1954-.19524-.1955-.51192-.0002-.70723l1.0603-1.06027ZM.693553 4.53864c-.195262-.19527-.195262-.51185 0-.70711l.471307-.47131c.19523-.19523.51175-.19527.70703-.00008l1.0606 1.0601c.19519.1951.1954.51146.00046.70681l-.47106.47206c-.1952.19562-.51208.19578-.70749.00038L.693553 4.53864Z"></path></svg><span>{item.display_title}</span></a></li>
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
  
  // get the grant resource url
  let resUrl = '';
  for (const res of data.resources) { 
	if (res.name == grant) {
		resUrl = res.url
	}
  }
  
  // fetch and parse grant csv
  const fileData = await resourceGetter(resUrl, true);
  

  return {
    props: {
      data,
	  fileData,
	  grant
    },
  };
};

export default grant;
