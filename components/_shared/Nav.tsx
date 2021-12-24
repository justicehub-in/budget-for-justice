/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "react-modal";
// import Hamburger from 'public/assets/icons/hamburger.svg';
Modal.setAppElement("#__next");

const navName = "Justice Hub";

const navList = [
  {
    // link: '#forum',
    name: "All Menu",
    hasSubMenu: true,
    subMenu: [
      {
        link: "/explore",
        name: "Scheme Explore",
      },
      {
        link: "/about",
        name: "About Us",
      },
    ],
  },
  {
    link: "/datasets",
    name: "Explore Budget",
    isButton: true,
  },
];

const Nav: React.FC = () => {
  const router = useRouter();
  const [navIsOpen, setNavIsOpen] = useState(false);

  // opening / closing mobile navbar
  function mobileNavHandler() {
    setNavIsOpen(!navIsOpen);
  }

  // open / close sub-menu
  function navButtonHandler(e: any) {
    // if clicked on already opened menu
    if (e.target.getAttribute("aria-expanded") == "true") {
      e.target.setAttribute("aria-expanded", "false");
      e.target.setAttribute(
        "aria-label",
        e.target.getAttribute("data-text-for-show")
      );
      e.target.nextElementSibling.setAttribute("hidden", "true");
    } else {
      // remove previous opened menu
      if (
        document.querySelector('.m-navbar__links > [aria-expanded="true"]') ||
        document.querySelector('.navbar__links > [aria-expanded="true"]')
      ) {
        const currentActive = document.querySelector('[aria-expanded="true"]');
        currentActive.nextElementSibling.setAttribute("hidden", "true");
        currentActive.setAttribute(
          "aria-label",
          currentActive.getAttribute("data-text-for-show")
        );
        currentActive.setAttribute("aria-expanded", "false");
      }
      // open current clicked menu
      e.target.setAttribute("aria-expanded", "true");
      e.target.setAttribute(
        "aria-label",
        e.target.getAttribute("data-text-for-hide")
      );
      e.target.nextElementSibling.removeAttribute("hidden");
    }
  }

  return (
    <>
      <header className="header" role="banner">
        <div className="container">
          <div className="header__brand">
            <Link href="/">
              <a>
                <img src="/assets/images/jh_logo_min.png" alt="" />
                <h1>{navName}</h1>
              </a>
            </Link>
          </div>

          <nav className="navbar">
            <h2 className="sr-only">Navigation menu</h2>
            <ul className="navbar__container">
              {navList.map((navItem, index) => (
                <li key={`navItemMobile-${index}`} className="navbar__links">
                  {navItem.hasSubMenu ? (
                    <>
                      <button
                        className="navbar__item"
                        type="button"
                        aria-controls="submenu__resources"
                        aria-expanded="false"
                        aria-label={`Show ${navItem.name} menu`}
                        data-text-for-show={`Show ${navItem.name} menu`}
                        data-text-for-hide={`Hide ${navItem.name} menu`}
                        onClick={navButtonHandler}
                      >
                        {navItem.name}
                      </button>
                      <ul className="navbar__nested" hidden>
                        {navItem.subMenu.map((subMenuItem, index) => (
                          <li key={`submenuItem-${index}`}>
                            <Link href={subMenuItem.link}>
                              <a>
                                {subMenuItem.name} <span>&#x279D;</span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : navItem.isButton ? (
                    <Link href={navItem.link}>
                      <a className={`navbar__item btn-primary`}>
                        {navItem.name}
                      </a>
                    </Link>
                  ) : (
                    <Link href={navItem.link}>
                      <a className={`navbar__item`}>{navItem.name}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="header m-header">
        <div className="container">
          <button
            className="m-header__button"
            type="button"
            aria-expanded="false"
            aria-label="Expand navigation"
            onClick={mobileNavHandler}
          >
            <span className="sr-only">Menu</span>
            {/* <Hamburger /> */}
            <svg
              className="fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#f65940"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div className="header__brand">
            <Link href="/">
              <a>
                <img src="/assets/images/jh_logo_min.png" alt="" />
                <h1>{navName}</h1>
              </a>
            </Link>
          </div>
        </div>
      </header>

      <Modal
        isOpen={navIsOpen}
        onRequestClose={mobileNavHandler}
        className="dialog dialog--menu"
        overlayClassName="dialog__backdrop"
        closeTimeoutMS={200}
        aria={{
          labelledby: "mobileMenu",
        }}
        preventScroll={true}
        htmlOpenClassName="ReactModal__Html--open"
      >
        <nav className="m-navbar">
          <div className="m-navbar__header">
            <h2 id="mobileMenu">Menus</h2>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={mobileNavHandler}
            >
              &#x78;
            </button>
          </div>

          <ul className="m-navbar__container">
            {navList.map((navItem, index) => (
              <li key={`navItemMobile-${index}`} className="navbar__links">
                {navItem.hasSubMenu ? (
                  <>
                    <button
                      className="navbar__item"
                      type="button"
                      aria-controls="submenu__resources"
                      aria-expanded="false"
                      aria-label={`Show ${navItem.name} menu`}
                      data-text-for-show={`Show ${navItem.name} menu`}
                      data-text-for-hide={`Hide ${navItem.name} menu`}
                      onClick={navButtonHandler}
                    >
                      {navItem.name}
                    </button>
                    <ul className="m-navbar__nested" hidden>
                      {navItem.subMenu.map((subMenuItem, index) => (
                        <li key={`submenuItem-${index}`}>
                          <Link href={subMenuItem.link}>
                            <a
                              href={subMenuItem.link}
                              onClick={mobileNavHandler}
                            >
                              {subMenuItem.name} <span>&#x279D;</span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={navItem.link}>
                    <a
                      href={navItem.link}
                      onClick={mobileNavHandler}
                      className={`navbar__item ${
                        router.pathname.includes(navItem.link)
                          ? "navbar__item--active"
                          : ""
                      }`}
                    >
                      {navItem.name}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Modal>
    </>
  );
};

export default Nav;
