import React, { useEffect } from "react";
import Head from "next/head";
import Banner from "components/_shared/Banner";

function collapseHeader() {
  // Get all the <h2> headings
  const headings = document.querySelectorAll(".faq__content h3");

  Array.prototype.forEach.call(headings, (heading) => {
    // Give each <h2> a toggle button child
    // with the SVG plus/minus icon
    heading.innerHTML = `
      <button aria-expanded="false">
        ${heading.textContent}
        <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
          <rect class="vert" height="8" width="2" y="1" x="4"/>
          <rect height="2" width="8" y="4" x="1"/>
        </svg>
      </button>
    `;

    // Function to create a node list
    // of the content between this <h2> and the next
    const getContent = (elem) => {
      const elems = [];
      while (
        elem.nextElementSibling &&
        elem.nextElementSibling.tagName !== "H3"
      ) {
        elems.push(elem.nextElementSibling);
        elem = elem.nextElementSibling;
      }

      // Delete the old versions of the content nodes
      elems.forEach((node) => {
        node.parentNode.removeChild(node);
      });

      return elems;
    };

    // Assign the contents to be expanded/collapsed (array)
    const contents = getContent(heading);

    // Create a wrapper element for `contents` and hide it
    const wrapper = document.createElement("div");
    wrapper.hidden = true;

    // Add each element of `contents` to `wrapper`
    contents.forEach((node) => {
      wrapper.appendChild(node);
    });

    // Add the wrapped content back into the DOM
    // after the heading
    heading.parentNode.insertBefore(wrapper, heading.nextElementSibling);

    // Assign the button
    const btn = heading.querySelector("button");

    btn.onclick = () => {
      // Cast the state as a boolean
      const expanded = btn.getAttribute("aria-expanded") === "true" || false;

      // Switch the state
      btn.setAttribute("aria-expanded", !expanded);
      // Switch the content's visibility
      wrapper.hidden = expanded;
    };
  });
}

const bannerDetails = {
  heading: "Gateway to Forum",
  content: (
    <>
      <p>
        Discuss your doubts and raise concerns with in the larger community
      </p>
      <a href="https://forum.justicehub.in/" className="btn-secondary">
        Go to Forum
      </a>
    </>
  ),
  image: "/assets/icons/chat.svg",
  color: "#F65940",
};

const Explore = () => {
  useEffect(() => {
    collapseHeader();
  }, []);
  return (
    <>
      <Head>
        <title>B4J | FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="faq container">
        <div className="faq__header">
          <h2 className="heading">FAQs</h2>
          <p className="home__sub-head">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="faq__content">
          <div>
            <h3>
              Neque congue ut duis vestibulum porttitor pellentesque vel?
            </h3>
            <p>
              Consectetur viverra nec non elit lorem sit eget. Sollicitudin cum
              faucibus pulvinar fusce. Quisque euismod orci fusce et nibh
              potenti. Aliquet sit enim ut nunc morbi bibendum fames.
              Sollicitudin sagittis, senectus at scelerisque. Egestas sed quam
              porttitor cursus elit. Nulla ligula quisque velit ut neque dui.
              Adipiscing volutpat viverra viverra id sit. Lacus, arcu facilisis
              et id donec urna egestas. Auctor dictum lorem nisi commodo non a
              dipiscing. In sollicitudin pretium vitae tellus euismod nibh
              egestas. In arcu viverra et semper arcu eget. Porta eget nunc at
              velit enim adipiscing enim. Arcu arcu nulla congue a sed.
            </p>
          </div>

          <div>
            <h3>
              Elementum enim metus, praesent turpis in vestibulum tellus?
            </h3>
            <p>
              Consectetur viverra nec non elit lorem sit eget. Sollicitudin cum
              faucibus pulvinar fusce. Quisque euismod orci fusce et nibh
              potenti. Aliquet sit enim ut nunc morbi bibendum fames.
              Sollicitudin sagittis, senectus at scelerisque. Egestas sed quam
              porttitor cursus elit. Nulla ligula quisque velit ut neque dui.
              Adipiscing volutpat viverra viverra id sit.
            </p>
          </div>

          <div>
            <h3>Risus id vulputate metus, augue?</h3>
            <p>
              Porta eget nunc at velit enim adipiscing enim. Arcu arcu nulla
              congue a sed.
            </p>
          </div>
        </div>

        <Banner details={bannerDetails} />
      </main>
    </>
  );
};

export default Explore;
