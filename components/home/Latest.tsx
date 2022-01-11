import { latest } from "data/placeholder";

const Latest = () => {
  return (
    <section className="home-latest container">
      <div>
        <h2 className="heading">Read the Latest</h2>
        <p className="home__sub-head">
          Everything you need to analyse the data more efficiently
        </p>
      </div>
      <ul>
        {latest.map((news, index) => (
          <li key={`latest-${index}`}>
            <span>{`0${index + 1}`}</span>
            <a href={news.link}>{news.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Latest;
