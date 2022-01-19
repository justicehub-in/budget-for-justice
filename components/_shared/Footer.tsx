import Link from "next/link";
import Image from "next/image";

const links = [
  {
    name: "About",
    link: "https://justicehub.in/about",
  },
  {
    name: "Contribute Data",
    link: "https://justicehub.in/upload",
  },
  {
    name: "Explore Data",
    link: "https://justicehub.in/dataset",
  },
  {
    name: "Resources",
    link: "https://docs.justicehub.in/",
  },
  {
    name: "Contact",
    link: "https://justicehub.in/contact",
  },
  {
    name: "Subscribe",
    link: "https://justicehub.in/feeds/dataset.atom",
  },
  {
    name: "Terms of Service",
    link: "https://docs.google.com/document/d/1EvAQ8PQuNrapM8GK1z5g3YKfwe8-zywWDliE4fRvnPs/preview",
  },
  {
    name: "Code of Conduct",
    link: "https://docs.google.com/document/d/11q5eXXm0qJE6ljtTC39t_5X5XYwoQKh95fsYxExoGlw/preview",
  },
  {
    name: "Privacy Policy",
    link: "https://docs.google.com/document/d/1YtCveTE6f2s429INuj4e8MyViCOex-eoxp5c3TRlEZc/preview",
  },
  {
    name: "Notice and Feedback Policy",
    link: "https://docs.google.com/document/d/1L5ODlOWFbJkZ0cr0rt2DePQD_V3a4pKxNsUdJeOhjhM/preview",
  },
  {
    name: "CKAN API",
    link: "http://docs.ckan.org/en/2.8/api/",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <section className="footer__contact">
            <h2 className="sr-only">Contact</h2>
            <div className="footer__contact-logo">
              <Image
                src="/assets/images/jh_logo_white.png"
                width={222}
                height={40}
                alt="civicdatalab logo"
              />
              <span className="header__divider" />
              <div>
                <a rel="noreferrer" href="https://twitter.com/JusticeHubIndia">
                  <span className="sr-only">Justice-hub twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 30 30"
                  >
                    <circle cx="15" cy="15" r="15" fill="#f65940" />
                    <g clipPath="url(#a)">
                      <path
                        fill="#000"
                        d="M23.08 9.95c-.6.27-1.25.45-1.9.53a3.34 3.34 0 0 0 1.46-1.84c-.66.38-1.37.66-2.12.8a3.33 3.33 0 0 0-5.66 3.04A9.44 9.44 0 0 1 8 9a3.32 3.32 0 0 0 1.03 4.44 3.32 3.32 0 0 1-1.5-.41v.04a3.33 3.33 0 0 0 2.66 3.26c-.49.13-1 .15-1.5.06a3.33 3.33 0 0 0 3.1 2.3 6.68 6.68 0 0 1-4.92 1.39c1.52.97 3.3 1.5 5.1 1.5 6.12 0 9.46-5.08 9.46-9.47v-.43a6.76 6.76 0 0 0 1.65-1.73Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path
                          d="M0 0h19.09v19.09H0z"
                          transform="translate(5.45 5.45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a rel="noreferrer" href="https://github.com/justicehub-in">
                  <span className="sr-only">Justice-hub github</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9906 1.7883C6.19453 1.78596 1.5 6.47814 1.5 12.2696C1.5 16.8492 4.43672 20.7422 8.52656 22.1719C9.07734 22.3102 8.99297 21.9188 8.99297 21.6516V19.8352C5.8125 20.2078 5.68359 18.1031 5.47031 17.7516C5.03906 17.0156 4.01953 16.8281 4.32422 16.4766C5.04844 16.1039 5.78672 16.5703 6.64219 17.8336C7.26094 18.75 8.46797 18.5953 9.07969 18.443C9.21328 17.8922 9.49922 17.4 9.89297 17.018C6.59766 16.4274 5.22422 14.4164 5.22422 12.0258C5.22422 10.8656 5.60625 9.79924 6.35625 8.93908C5.87812 7.52111 6.40078 6.30705 6.47109 6.12658C7.83281 6.00471 9.24844 7.10158 9.35859 7.1883C10.132 6.97971 11.0156 6.86955 12.0047 6.86955C12.9984 6.86955 13.8844 6.98439 14.6648 7.19533C14.9297 6.99377 16.2422 6.05158 17.5078 6.16643C17.5758 6.34689 18.0867 7.53283 17.6367 8.93205C18.3961 9.79455 18.7828 10.8703 18.7828 12.0328C18.7828 14.4281 17.4 16.4414 14.0953 17.0227C14.3784 17.301 14.6031 17.633 14.7564 17.9992C14.9098 18.3654 14.9886 18.7585 14.9883 19.1555V21.7922C15.007 22.0031 14.9883 22.2117 15.3398 22.2117C19.4906 20.8125 22.4789 16.8914 22.4789 12.2719C22.4789 6.47814 17.782 1.7883 11.9906 1.7883V1.7883Z"
                      fill="#F65940"
                    />
                  </svg>
                </a>
                <a
                  rel="noreferrer"
                  href="https://justicehub.in/feeds/dataset.atom"
                >
                  <span className="sr-only">Justice-hub rss feed</span>
                  <svg viewBox="0 0 8.72 8.72">
                    <g data-name="Layer 2">
                      <g data-name="Layer 1">
                        <circle cx="4.36" cy="4.36" r="4.36" fill="#f65940" />
                        <path
                          d="M3.1 5.22a.61.61 0 0 0-.62.61.62.62 0 0 0 1.24 0 .61.61 0 0 0-.62-.61Z"
                          className="cls-2"
                        />
                        <path
                          d="M2.91 3.52h-.25a.26.26 0 0 0-.22.24v.43a.25.25 0 0 0 .22.21h.25A1.63 1.63 0 0 1 4.54 6v.24a.27.27 0 0 0 .24.22h.43a.23.23 0 0 0 .21-.21V6a2.52 2.52 0 0 0-2.51-2.48Z"
                          className="cls-2"
                        />
                        <path
                          d="M7.09 6a4.18 4.18 0 0 0-4.18-4.14h-.25a.24.24 0 0 0-.22.23v.44a.27.27 0 0 0 .22.21h.25A3.31 3.31 0 0 1 6.21 6v.24a.25.25 0 0 0 .23.22h.43a.24.24 0 0 0 .22-.21V6Z"
                          className="cls-2"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <p>
              Get informed of the latest legal and justice data that make it to
              our platform.
            </p>

            <a
              rel="noreferrer noopener"
              href="https://dataforjustice.substack.com/"
              className="btn-primary footer__substack"
            >
              Join us on Substack
            </a>
          </section>

          <section className="footer__pages">
            <h2>LINKS</h2>
            <ul>
              {links.map((link, index) => (
                <li key={`footerLink-${index}`}>
                  <Link href={link.link}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="footer__logo">
            <h2>CREATED BY</h2>
            <div>
              <a rel="noreferrer" href="https://civicdatalab.in">
                <Image
                  src="/assets/images/cdl.png"
                  width={111}
                  height={111}
                  alt="civicdatalab homepage"
                />
              </a>

              <a rel="noreferrer" href="https://agami.in">
                <Image
                  src="/assets/images/agami.svg"
                  width={154}
                  height={42}
                  alt="agami homepage"
                />
              </a>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
