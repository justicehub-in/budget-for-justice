import { latest } from 'data/placeholder';

const Latest = () => {
  return (
    <section className="home-latest container">
      <div>
        <h2 className="home__heading">Read the Latest</h2>
        <p className="home__sub-head">
          Everything you need to analyse the data more efficiently
        </p>
      </div>
      <ul>
        {latest.map((news, index) => (
          <li key={`latest-${index}`}>
            <a href={news.link}>
              <span>{`0${index + 1}`}</span> <p>{news.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Latest;
