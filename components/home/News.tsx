import { allNews } from 'data/placeholder';

const Insights = () => {
  return (
    <section className="home-news container">
      <h2 className="home__heading">Featured News &amp; Stories</h2>
      <p className="home__sub-head">
        Everything you need to analyse the data more efficiently
      </p>

      <div className="home-news__item">
        {allNews.map((item, index) => (
          <section key={`newsItem-${index}`}>
            <img
              src={`https://placekitten.com/270/16${index}`}
              alt=""
              width="270"
              height="160"
            />
            <small>{item.tag}</small>
            <h2>{item.heading}</h2>
            <footer>{item.publisher}</footer>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Insights;
