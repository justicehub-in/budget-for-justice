const Video = () => {
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
        <h2 className="home__heading">Here’s what we do!</h2>
        <p>
          Watch a quick introduction on what you can do using Budget for
          Justice.
        </p>
      </div>
    </section>
  );
};

export default Video;
