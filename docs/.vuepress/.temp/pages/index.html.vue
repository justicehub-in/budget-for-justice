<template><h1 align="center">Public Procurement Explorer - Assam</h1>
<p align="center">In collaboration between <a href="https://civicdatalab.in/">CivicDataLab</a> and <a href="https://www.open-contracting.org/implement/lift/">Open Contracting Partnership</a></p>
<br/>
<p align="center">
<img alt="" src="https://github.com/CivicDataLab/oci-assam-frontend/raw/main/public/assets/images/CDLxOCP.png"/>
<br/>
<br/>
<a href="https://github.com/CivicDataLab/oci-assam-frontend/blob/main/LICENSE">
<img alt="MIT License" src="https://img.shields.io/apm/l/atomic-design-ui.svg?"/>
</a>
</p>
<p align="center">A data-driven tool to enable public officials in the state of Asaam to make smarter, data-informed decisions about public spending</p>
<ul>
<li><a href="#features">Features</a></li>
<li><a href="#getting-started">Getting Started</a></li>
<li><a href="#guide">Guide</a>
<ul>
<li><a href="#styling-">Styling 🎨</a></li>
<li><a href="#backend">Backend</a></li>
<li><a href="#pages">Pages</a></li>
<li><a href="#data-fetching">Data fetching</a>
<ul>
<li><a href="#fetch-all-datasets-for-listing-pages">Fetch all datasets for listing pages</a></li>
<li><a href="#fetch-particluar-dataset">Fetch particluar dataset</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#developers">Developers</a>
<ul>
<li><a href="#boot-the-local-instance">Boot the local instance</a></li>
<li><a href="#tests">Tests</a></li>
<li><a href="#architecture">Architecture</a></li>
</ul>
</li>
<li><a href="#contributing">Contributing</a></li>
</ul>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<ul>
<li>🗺️ Unified sites: present data and content in one seamless site, pulling datasets from a DMS (e.g. CKAN) and content from a CMS (e.g. wordpress) with a common internal API.</li>
<li>♿ Accessible: The platform is screen-reader friendly.</li>
<li>👩‍💻 Developer friendly: built with NextJS, SASS, GraphQL to make the developer experience a treat.</li>
<li>🚀 ITCSS &amp; BEM: Combination of BEM methodology and ITCSS architecture to better organize the styling and make it scalable.</li>
<li>📋 Typescript: Developed usign typescript to improve development experience by catching errors and providing fixes.</li>
<li>🧱 Extensible: quickly extend and develop/import your own React components</li>
<li>📝 Well documented: full set of documentation plus the documentation of NextJS and Apollo</li>
</ul>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2>
<p>Install a recent version of Node. Node 16 is recommended.</p>
<h2 id="guide" tabindex="-1"><a class="header-anchor" href="#guide" aria-hidden="true">#</a> Guide</h2>
<h3 id="styling-🎨" tabindex="-1"><a class="header-anchor" href="#styling-🎨" aria-hidden="true">#</a> Styling 🎨</h3>
<p>We use SASS preprocessor to manage styling. All of it can be found at <code>/styles</code> directory where it's managed by using ITCSS architecture to make it scalable. For naming, we use BEM methodology.</p>
<h3 id="backend" tabindex="-1"><a class="header-anchor" href="#backend" aria-hidden="true">#</a> Backend</h3>
<p>You can connect CMS and DMS backends easily via environment variables:</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>$ export DMS=http://ckan:5000
$ export CMS=http://myblog.wordpress.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>Note that we don't yet have implementations for the following CKAN features:</p>
<ul>
<li>Activities</li>
<li>Auth</li>
<li>Groups</li>
</ul>
</blockquote>
<h3 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> Pages</h3>
<ul>
<li>Home <code>/</code></li>
<li>Dataset lisitng <code>/datasets</code></li>
<li>Tender <code>/datasets/[tender]</code></li>
<li>KPI listing <code>/kpi</code></li>
<li>KPI Analysis <code>/kpi/[analysis]</code></li>
<li>Stories <code>/stories</code></li>
<li>About <code>/about</code></li>
</ul>
<h3 id="data-fetching" tabindex="-1"><a class="header-anchor" href="#data-fetching" aria-hidden="true">#</a> Data fetching</h3>
<p>We use REST API to fetch data from CKAN. Some of the data comes as metadata and other is in CSV files, for which we use different transformers. You can find more about it in <code>/transoformers</code> directory.</p>
<h4 id="fetch-all-datasets-for-listing-pages" tabindex="-1"><a class="header-anchor" href="#fetch-all-datasets-for-listing-pages" aria-hidden="true">#</a> Fetch all datasets for listing pages</h4>
<p>When visiting a dataset lisitng page, you may want to fetch the particular type of datasets. To do so, you can use <code>getServerSideProps</code> function from NextJS:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GetServerSideProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> convertToCkanSearchQuery<span class="token punctuation">,</span> fetchDatasets <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'utils/index'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getServerSideProps<span class="token operator">:</span> <span class="token function-variable function">GetServerSideProps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> variables <span class="token operator">=</span> <span class="token function">convertToCkanSearchQuery</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>query <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchDatasets</span><span class="token punctuation">(</span><span class="token string">'type_of_dataset'</span><span class="token punctuation">,</span> variables<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li><code>convertToCkanSearchQuery</code> (from <a href="https://github.com/datopian/portal.js" target="_blank" rel="noopener noreferrer">PortalJS<OutboundLink/></a>) helps to convert the search query parameters into a object which we can use.</li>
<li><code>fetchDatasets</code> helps to fetch a list of datasets of particular type.</li>
</ul>
<p>Learn more about them <RouterLink to="/utils/">here</RouterLink>.</p>
<h4 id="fetch-particluar-dataset" tabindex="-1"><a class="header-anchor" href="#fetch-particluar-dataset" aria-hidden="true">#</a> Fetch particluar dataset</h4>
<p>Depending on dataset, they may return metadata in the form of <code>JSON</code> or a combination of <code>JSON</code> and <code>CSV</code> file. We can use <code>fetchAPI</code> in this case:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GetServerSideProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fetchAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'utils/index'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resourceGetter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'utils/resourceParser'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getServerSideProps<span class="token operator">:</span> <span class="token function-variable function">GetServerSideProps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchAPI</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>query<span class="token punctuation">.</span>tender<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> csv <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resourceGetter</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>result<span class="token punctuation">.</span>resources<span class="token punctuation">,</span> <span class="token string">'CSV'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">,</span>
      csv
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="developers" tabindex="-1"><a class="header-anchor" href="#developers" aria-hidden="true">#</a> Developers</h2>
<h3 id="boot-the-local-instance" tabindex="-1"><a class="header-anchor" href="#boot-the-local-instance" aria-hidden="true">#</a> Boot the local instance</h3>
<p>Install the dependencies:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Boot the demo frontend:</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>npm run dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000<OutboundLink/></a> to see the home page 🎉</p>
<p>You can start editing the page by modifying <code>/pages/index.tsx</code>. The page auto-updates as you edit the file.</p>
<h3 id="tests" tabindex="-1"><a class="header-anchor" href="#tests" aria-hidden="true">#</a> Tests</h3>
<p>We use Jest for running tests:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span>

<span class="token comment"># turn on watching</span>
<span class="token function">npm</span> run <span class="token builtin class-name">test</span> --watch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture" aria-hidden="true">#</a> Architecture</h3>
<ul>
<li>Language: Javascript</li>
<li>Framework: <a href="https://nextjs.com/" target="_blank" rel="noopener noreferrer">Next.js<OutboundLink/></a></li>
<li>Styling: <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS<OutboundLink/></a> with <a href="http://getbem.com/" target="_blank" rel="noopener noreferrer">BEM<OutboundLink/></a> and ITCSS</li>
</ul>
<h2 id="contributing" tabindex="-1"><a class="header-anchor" href="#contributing" aria-hidden="true">#</a> Contributing</h2>
<p>For any new feature or bug reports, please request it in <a href="https://github.com/CivicDataLab/oci-assam-frontend/issues" target="_blank" rel="noopener noreferrer">issues<OutboundLink/></a>.</p>
<p>See <a href="https://github.com/CivicDataLab/oci-assam-frontend/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">CONTRIBUTING.md<OutboundLink/></a> for ways to get started.</p>
<p>Please adhere to <a href="https://github.com/CivicDataLab/oci-assam-frontend/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer">Code of Conduct<OutboundLink/></a>.</p>
</template>
