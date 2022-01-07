import { Share } from "components/icons/ListingIcons";
import { useRouter } from "next/router";

const ShareModal = ({ title }) => {
  const router = useRouter();

  // open / close sub-menu
  function shareButtonHandler(e: any) {
    // check if web share api is supported
    if (navigator.share) {
      navigator.share({
        text: title,
        url: `https://budgets.justicehub.in/datasets/${router.query.exploere}`,
      });
    } else {
      // if clicked on already opened menu
      if (e.target.getAttribute("aria-expanded") == "true") {
        e.target.setAttribute("aria-expanded", "false");
        e.target.setAttribute(
          "aria-label",
          e.target.getAttribute("data-text-for-show")
        );
        e.target.nextElementSibling.setAttribute("hidden", "true");
      } else {
        // open current clicked menu
        e.target.setAttribute("aria-expanded", "true");
        e.target.setAttribute(
          "aria-label",
          e.target.getAttribute("data-text-for-hide")
        );
        e.target.nextElementSibling.removeAttribute("hidden");
      }
    }
  }

  return (
    <div className="shareModal">
      <button
        className="btn-secondary-invert"
        type="button"
        aria-controls="submenu__resources"
        aria-expanded="false"
        aria-label={`Show share menu`}
        data-text-for-show={`Show share menu`}
        data-text-for-hide={`Hide share menu`}
        onClick={shareButtonHandler}
      >
        Share <Share />
      </button>
      <ul className="navbar__nested" hidden>
        <li>abc</li>
        {/* {navItem.subMenu.map((subMenuItem, index) => (
          <li key={`submenuItem-${index}`}>
            <Link href={subMenuItem.link}>
              <a>
                {subMenuItem.name} <span>&#x279D;</span>
              </a>
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default ShareModal;
