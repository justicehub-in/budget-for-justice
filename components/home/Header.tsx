import { didYouKnow } from "data/placeholder";

const Header = () => {
  return (
    <section className="home-header">
      <div className="container wrapper">
        <h2>Did you know?</h2>
        <ul>
          {didYouKnow.map((item, index) => (
            <li key={`homeHeader-${index}`}>
              <span></span> {item.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
