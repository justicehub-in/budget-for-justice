import React, { useEffect } from "react";
import { tabbedInterface } from "utils/index";

export const schemeList = [
  {
    selector: "01",
    header: "eCourts Phase II",
    desc: "To improve the justice delivery system, the Government of India is implementing the eCourts mission mode project, introduced in 2007. The project is currently in its second phase, which focuses not only on the computerisation of courts across the country but also on the automation of workflow management which would enable the courts to exercise greater control over the management of cases. eCourts Phase II is a central Sector Scheme under the Law and Justice Ministry.",
    link: "/",
  },
  {
    selector: "02",
    header: "Infrastructure Facilities for Judiciary",
    desc: "This is a Centrally Sponsored Scheme under the Law and Justice Ministry. Funds under the scheme are utilized for the development of judicial infrastructure facilities for the Subordinate Judiciary in States and Union Territories with/without Legislature and North Eastern Region and Sikkim.",
    link: "/",
  },
  {
    selector: "03",
    header: "Modernization of State Police Forces",
    desc: "This is a Centrally Sponsored Scheme under the Ministry of Home Affairs. Under this scheme, assistance is provided to States for Special Projects/Schemes for upgrading Police infrastructure, Crime and Criminal Tracking Network and Systems and e-Prisons.",
    link: "/",
  },
];

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
