const Slider = ({ data }) => {
  function updateSlider(n: number) {
    const scrollPos = document.getElementById('contributors').scrollLeft;
    document
      .getElementById('contributors')
      .scrollTo({ left: scrollPos + n * 216, behavior: 'smooth' });
  }
  return (
    <section className="slider">
      <div className="container">
        <h2 className="heading">Contributors</h2>
        <div>
          <button
            className="slider__prev"
            onClick={() => updateSlider(-1)}
            type="button"
          >
            <span className="sr-only">Previous Slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="none"
              viewBox="0 0 56 56"
            >
              <path
                fill="#f7d3cd"
                d="M56 28c0 15.464-12.536 28-28 28S0 43.464 0 28 12.536 0 28 0s28 12.536 28 28Z"
              />
              <path
                fill="#EFF2F2"
                d="M21 29h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L32.17 27H21c-.55 0-1 .45-1 1s.45 1 1 1Z"
              />
            </svg>
          </button>
          <ul id="contributors">
            {data.map((item, index) => (
              <li key={`contri-${index}`}>
                <img
                  src={`https://placekitten.com/200/10${index}`}
                  alt=""
                  width="200"
                  height="100"
                />
              </li>
            ))}
          </ul>
          <button
            className="slider__next"
            onClick={() => updateSlider(1)}
            type="button"
          >
            <span className="sr-only">Previous Slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              fill="none"
              viewBox="0 0 56 56"
            >
              <path
                fill="#F65940"
                d="M56 28c0 15.464-12.536 28-28 28S0 43.464 0 28 12.536 0 28 0s28 12.536 28 28Z"
                opacity=".63"
              />
              <path
                fill="#EFF2F2"
                d="M21 29h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L32.17 27H21c-.55 0-1 .45-1 1s.45 1 1 1Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
