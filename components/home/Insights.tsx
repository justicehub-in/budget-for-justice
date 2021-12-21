import React, { useEffect } from "react";
import { tabbedInterface } from "utils/index";
import { schemeList } from "data/placeholder";

const Insights = () => {
  useEffect(() => {
    // create tabbed interface for schemes
    const tablist = document.getElementById("schemeSelector");
    const panels = document.querySelectorAll(
      '.home-insights [role="tabpanel"]'
    );
    if (tablist) tabbedInterface(tablist, panels);
  }, []);

  return (
    <section className="home-insights">
      <div className="container">
        <h2 className="sr-only">Schemes Insight</h2>
        <ul id="schemeSelector" role="tablist">
          {schemeList.map((scheme: any, index: number) => (
            <li role="presentation" key={`schemeSelector-${index}`}>
              <a
                role="tab"
                tabIndex={-1}
                href={`#scheme-${scheme.selector}`}
                data-id={`scheme-${scheme.selector}`}
                id={`schemeNews${index}`}
              >
                {scheme.selector}
              </a>
            </li>
          ))}
        </ul>
        <div className="home-insights__content">
          {schemeList.map((scheme: any, index: number) => (
            <section
              key={`scheme-news-${index}`}
              id={`scheme-${scheme.selector}`}
              role="tabpanel"
              tabIndex={-1}
              aria-labelledby={`schemeNews${index}`}
            >
              <div>
                <h3>{scheme.header}</h3>
                <p>{scheme.desc}</p>
                <ul className="home-insights__insights">
                  {scheme.insights.map((insight: any, index2: number) => (
                    <li key={`indicator-${index}+${index2}`}>
                      <strong>{insight.value}</strong>
                      <p>{insight.item}</p>
                    </li>
                  ))}
                </ul>
                <a
                  rel="nofollow noreferrer"
                  className="btn-primary-invert"
                  href={scheme.link}
                >
                  Explore Scheme
                </a>
              </div>
              <img
                src={`https://placekitten.com/240/30${index}`}
                alt=""
                width="240"
                height="300"
              />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
