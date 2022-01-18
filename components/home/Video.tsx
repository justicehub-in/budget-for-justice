import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
const Video = ({ data }) => {
  return (
    <div className="home-video">
      {/* <figure>
        <Image
          src={"/assets/images/home-bg.jpg"}
          layout="responsive"
          width={1440}
          height={600}
          alt=""
          className="home__bg"
        />
      </figure> */}

      <section className="home-video__content container">
        <div className="home-video__desc">
          <h2 className="heading">{data.heading}</h2>
          <p>{data.text}</p>
        </div>
        <div className="home-video__item">
          <LiteYouTubeEmbed
            id="LZKBY3V2ppE"
            title="Why do you choose to share your Justice Data openly?"
            params="disablekb=1"
            noCookie
          />
        </div>
      </section>
    </div>
  );
};

export default Video;
