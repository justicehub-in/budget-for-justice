import Image from "next/image";

const Video = ({ data }) => {
  return (
    <div className="home-video">
      <figure>
        <Image
          src={"/assets/images/home-bg.jpg"}
          layout="responsive"
          width={1440}
          height={600}
          alt=""
          className="home__bg"
        />
      </figure>

      <section className="home-video__content container">
        <div className="home-video__desc">
          <h2 className="heading">{data.heading}</h2>
          <p>{data.text}</p>
        </div>
        <div className="home-video__item">
          <img
            src={`https://placekitten.com/1008/480`}
            alt=""
            width="1008"
            height="480"
          />
        </div>
      </section>
    </div>
  );
};

export default Video;
