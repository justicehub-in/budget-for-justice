import { Share } from "components/icons/ListingIcons";
import { useRouter } from "next/router";
import {
  Facebook,
  Reddit,
  Linkedin,
  Twitter,
} from "components/icons/ExplorerIcons";

const ShareModal = ({ title }) => {
  const router = useRouter();

  // open / close sub-menu
  function shareButtonHandler(e: any) {
    // check if web share api is supported
    if (navigator.share) {
      navigator.share({
        text: title,
        url: `https://budgets.justicehub.in/datasets/${router.query.explorer}`,
      });
    } else {
      // if clicked on already opened menu
      if (e.target.getAttribute("aria-expanded") == "true") {
        e.target.setAttribute("aria-expanded", "false");
        e.target.setAttribute(
          "aria-label",
          e.target.getAttribute("data-text-for-show")
        );
        if (e.target.nextElementSibling)
          e.target.nextElementSibling.setAttribute("hidden", "true");
      } else {
        // open current clicked menu
        e.target.setAttribute("aria-expanded", "true");
        e.target.setAttribute(
          "aria-label",
          e.target.getAttribute("data-text-for-hide")
        );
        if (e.target.nextElementSibling)
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
      <ul className="shareModal__dropdown" hidden>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.facebook.com/sharer.php?u=https://budgets.justicehub.in/datasets/${router.query.explorer}`}
          >
            <Facebook />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://twitter.com/intent/tweet?url=https://budgets.justicehub.in/datasets/${router.query.explorer}`}
          >
            <Twitter />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.linkedin.com/shareArticle?url=https://budgets.justicehub.in/datasets/${router.query.explorer}`}
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.reddit.com/submit?url=https://budgets.justicehub.in/datasets/${router.query.explorer}`}
          >
            <Reddit />
            <span>Reddit</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ShareModal;
