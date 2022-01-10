const Video = ({ data }) => {
  return (
    <section className="home-video container">
      <div className="home-video__item">
        <img
          src={`https://placekitten.com/700/356`}
          alt=""
          width="700"
          height="356"
        />
      </div>
      <div className="home-video__desc">
        <h2 className="heading">{data.heading}</h2>
        <p>{data.text}</p>
      </div>
    </section>
  );
};

export default Video;
