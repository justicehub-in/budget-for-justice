import React from 'react';
import Image from 'next/image';
import { team } from 'data/about';
import Seo from 'components/_shared/seo';

const About = () => {
  return (
    <>
      <Seo />

      <main className="about">
        <div className="about__initiative container">
          <div>
            <h2 className="heading">About the Initiative</h2>
            <p>
              The Budgets for Justice initiative, launched January 2022, is a
              curated platform that brings together open budget data from the
              Union Government of India over the last few years to reveal
              trends and patterns in budget allocation and expenditures for the
              law and justice sector. Our objective is to make budget data more
              accessible, usable and comprehensive so we can stay informed
              about how the law and justice sector (including courts, police,
              prison, legal aid etc.) is funded and sourced.
            </p>
          </div>

          <p className="about__bold">For Budgets for Justice, we have:</p>
          <ol>
            <li>
              <a href="https://justicehub.in/dataset?groups=budgets-for-justice">
                Curated datasets
              </a>{' '}
              which include budget data between the years 2015-16 and 2021-22
              for specific schemes and heads of expenditure under different
              ministries and departments, such as Union Ministry of Law and
              Justice, Department of Police under Ministry of Home Affairs,
              Ministry of Women and Child Development;
            </li>
            <li>
              Built explorers to visualize time-series and compare budget data
              for different schemes and heads of expenditure; and
            </li>
            <li>
              Curated conversations and discussions with experts in the areas
              of public finance and law and justice to help understand the
              budgeting process and the data.
            </li>
          </ol>
          <br />
          <p>
            To learn more about the data and understand our methodology, please
            see our{' '}
            <a href="https://docs.google.com/document/d/e/2PACX-1vS9CRjRdISyPY8dxO2UQyCO97Tk5hbegUv8cOq3khWr-GHB5oX7Mcz2-i888eR4yO_PKqjc27Y0ue3u/pub">
              data guidebook.
            </a>
          </p>
          <p>
            The source code for the Budgets for Justice platform is available
            on{' '}
            <a href="https://github.com/justicehub-in/budget-for-justice">
              Github
            </a>{' '}
            under{' '}
            <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">
              GNU Affero General Public License version 3.0
            </a>
            . We encourage all sorts of contributions. You can refer to the{' '}
            <a href="https://github.com/justicehub-in/budget-for-justice/blob/main/CONTRIBUTING.md">
              contribution guidelines
            </a>{' '}
            if you’d like to help us build the Budgets for Justice platform.
          </p>
          <p>
            Do join us on{' '}
            <a href="https://twitter.com/JusticeHubIndia">Twitter</a> to stay
            updated about the project. To learn more about using budget
            datasets for advocacy, participate in our community events.{' '}
            <a href="https://dataforjustice.substack.com/">
              Subscribe to our newsletter
            </a>{' '}
            to know more about the datasets and the data contributors.
          </p>
        </div>
        <section className="about__team container">
          <h2 className="heading">About our team</h2>
          <p>
            Budgets for Justice is a collaborative initiative between{' '}
            <a href="https://justicehub.in/">Justice Hub</a> and{' '}
            <a href="https://www.civis.vote/">Civis</a>. Our team members
            include:
          </p>
          <ul>
            {team.map((item, index) => (
              <li key={`team-${index}`}>
                <a href={item.linkedin}>
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    fill="none"
                    viewBox="0 0 16 14"
                  >
                    <path d="M3.183 1.556c0 .413-.168.808-.467 1.1a1.61 1.61 0 0 1-1.125.455 1.61 1.61 0 0 1-1.125-.456A1.538 1.538 0 0 1 0 1.555c0-.413.168-.808.467-1.1A1.61 1.61 0 0 1 1.592 0c.422 0 .827.164 1.125.456.299.292.466.688.466 1.1Zm.048 2.707H.048V14H3.23V4.263Zm5.029 0H5.093V14h3.135V8.89c0-2.846 3.796-3.11 3.796 0V14h3.143V7.833c0-4.8-5.618-4.62-6.94-2.264l.033-1.306Z" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="about__partners">
          <div className="container">
            <section>
              <div>
                <figure>
                  <Image
                    src={'/assets/images/jh_logo.png'}
                    width={50}
                    height={50}
                    alt=""
                  />
                </figure>
                <h2 className="heading">
                  About <br /> Justice Hub
                </h2>
              </div>

              <p>
                <a href="https://justicehub.in/">Justice Hub</a> empowers
                communities for data-driven justice by making legal and justice
                data open, accessible and actionable. By becoming a shared and
                open resource for discovering and publishing justice data and
                related information, Justice Hub aims to encourage a culture of
                data-sharing and data-use and promote an open-data movement for
                law and justice in India.
              </p>
              <br />
              <p>
                Justice Hub has been co-created by{' '}
                <a href="https://civicdatalab.in/">CivicDataLab</a> and{' '}
                <a href="https://agami.in/">Agami</a>.
              </p>
            </section>

            <section>
              <div>
                <figure>
                  <Image
                    src={'/assets/images/civis.png'}
                    width={50}
                    height={50}
                    alt=""
                  />
                </figure>
                <h2 className="heading">
                  About <br /> Civis
                </h2>
              </div>

              <p>
                <a href="https://civis.vote/">Civis</a> seeks to build a bridge
                between citizens and governments to ensure that people’s voice
                is not just heard but acknowledged and acted upon by those in
                power. Civis presents various public policies being worked on
                by the government to their website and encourages citizens to
                share their feedback. The feedback is then passed on to the
                relevant authorities to initiate a dialogue between citizens
                and government and keep the spirit of democracy alive.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
