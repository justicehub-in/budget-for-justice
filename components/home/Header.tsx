import React, { useEffect, useState } from "react";
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Header = ({ data }) => {
  console.log(data);

  const [list, setList] = useState([]);

  useEffect(() => {
    // shuffle and select 3
    const selectedList = shuffle(data);
    const slicedList = selectedList.slice(0, 3);
    setList(slicedList);
  }, [data]);

  return (
    <section className="home-header">
      <div className="container wrapper">
        <h2>Did you know?</h2>
        <ul>
          {list.map((item, index) => (
            <li key={`homeHeader-${index}`}>
              <span></span> {item.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
