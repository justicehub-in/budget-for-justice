const Banner = ({ details }) => {
  return (
    <section
      className="banner container"
      style={{ backgroundColor: details.color }}
    >
      <div className="banner__content">
        <h2 className="heading">{details.heading}</h2>
        {details.content}
      </div>
      <img src={details.image} alt="" />
    </section>
  );
};

export default Banner;
