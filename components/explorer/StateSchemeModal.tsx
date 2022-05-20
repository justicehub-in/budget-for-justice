import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Search from 'components/datasets/Search';
import { useSearch } from 'utils/search';
import { tabbedInterface, categoryIcon } from 'utils';
import { ArrowForward } from 'components/icons/ListingIcons';
import {
  LawJustice,
  WomenChild,
  Police,
  HomeAffairs,
} from 'components/icons/ListingIcons';

const StateSchemeModal = ({ isOpen, handleModal, data }) => {
  const [filteredObj, setFilteredObj] = useState(data);
  
  useEffect(() => {
    // ceating tabbed interface for viz selector
    if (isOpen) {
      setTimeout(() => {
        const tablist = document.querySelector('.schemeModal__tabs');
        const panels = document.querySelectorAll('.schemeModal__items');
        tabbedInterface(tablist, panels);
      }, 10);
    }
  }, [isOpen]);
  const modalToggle = [
    {
      name: 'Grant No 3 - Administration of Justice',
      id: '#Grant No 3 - Administration of Justice',
      length: filteredObj['Grant No 3 - Administration of Justice'].length,
    },
    {
      name: 'Grant No 15 - Jails',
      id: '#Grant No 15 - Jails',
      length: filteredObj['Grant No 15 - Jails'].length,
    },
    {
      name: 'Grant No 14 - Police',
      id: '#Grant No 14 - Police',
      length: filteredObj['Grant No 14 - Police'].length,
    },
  ];

  const modalItems = [
    {
      id: 'Grant No 3 - Administration of Justice',
      content: filteredObj['Grant No 3 - Administration of Justice'],
      
    },
    {
      id: 'Grant No 15 - Jails',
      content: filteredObj['Grant No 15 - Jails'],
    },
    {
      id: 'Grant No 14 - Police',
      content: filteredObj['Grant No 14 - Police'],
    },
  ];

  function handleButtonClick() {
    handleModal(false);
  }

  function changeResult(val) {
    const newObj = useSearch(val, data);
    setFilteredObj(newObj);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleButtonClick}
      className="dialog schemeModal"
      overlayClassName="dialog__backdrop"
      contentLabel="Download Tenders"
      aria={{
        labelledby: 'dialog-head',
        describedby: 'dialog-para',
      }}
      closeTimeoutMS={200}
      preventScroll={true}
      htmlOpenClassName="ReactModal__Html--open"
    >
      <section className="schemeModal__header">
        <div>
          <h2>Select Scheme</h2>
          <button
            type="button"
            className="dialog__close"
            id="modalCancel"
            aria-label="Close navigation"
            onClick={handleButtonClick}
          >
            <span>Close &#x78;</span>
          </button>
        </div>

        <Search newSearch={changeResult} />
      </section>
      <section className="schemeModal__body">
        <div className="schemeModal__left">
          <ul className="schemeModal__tabs">
            {modalToggle.map((item, index) => (
              <li key={`modalToggleItem-${index}`}>
                <a href={item.id}>
                  {item.name}
                  {` (${item.length})`}
                  <span>
                    <ArrowForward />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* <section className="listing__indicators">
            <h3>Ministry or Department Indicators: </h3>
            <ul>
              <li>
                <LawJustice />
                <span>Law &amp; Justice</span>
              </li>
              <li>
                <WomenChild />
                <span>Women &amp; Child Development</span>
              </li>
              <li>
                <Police />
                <span>Police</span>
              </li>
              <li>
                <HomeAffairs />
                <span>Home Affairs</span>
              </li>
            </ul>
          </section> */}
        </div>
        <div className="schemeModal__content">
          {modalItems.map((item, index) => (
            <ul
              key={`modalContent-${index}`}
              className="schemeModal__items"
              id={item.id}
            >
              {item.content.map((val, index2) => (
                <li key={`modalItemInner-${index}-${index2}`}>
                  <a href={`/state/assam/${item.id}/${val}`}>
                      {/* {categoryIcon(val.tags)} */}
                    <span>{val}</span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
    </Modal>
  );
};

export default StateSchemeModal;
