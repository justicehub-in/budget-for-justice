import Image from 'next/image';

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
      <figure>
        <Image src={details.image} width={184} height={184} alt="" />
      </figure>
    </section>
  );
};

export default Banner;
