import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import Banner from "components/_shared/Banner";
import { Converter } from "showdown";
import fs from "fs";

function collapseHeader() {
  // Get all the <h2> headings
  const headings = document.querySelectorAll(".faq__content h3");

  Array.prototype.forEach.call(headings, (heading) => {
    // Give each <h2> a toggle button child
    // with the SVG plus/minus icon
    heading.innerHTML = `
      <button aria-expanded="false">
        <span>${heading.textContent}</span>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
          <rect class="vert" height="8" width="2" y="1" x="4"/>
          <rect height="2" width="8" y="4" x="1"/>
        </svg>
      </button>
    `;

    // Function to create a node list
    // of the content between this <h3> and the next
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

const Faq = ({ content }) => {
  useEffect(() => {
    collapseHeader();
  }, []);
  return (
    <>
      <Head>
        <title>B4J | FAQ</title>
        <link rel="icon" href="assets/icons/b4j.png" />
      </Head>
      <main className="faq container">
        <div className="faq__header">
          <h2 className="heading">Frequently Asked Questions</h2>
        </div>
        <div
          className="faq__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* <Banner details={bannerDetails} /> */}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let content = fs.readFileSync(`data/faq.md`, "utf8");
  const converter = new Converter();
  content = converter.makeHtml(content);
  return { props: { content } };
};

export default Faq;
