import { useState } from "react";
import { useRouter } from "next/router";

const Search: React.FC<{ text?: string; newSearch?: any }> = ({
  text,
  newSearch,
}) => {
  const router = useRouter();
  const [q, setQ] = useState(router.query.q);

  const handleChange = (value) => {
    setQ(value);
    newSearch(value);
  };

  function handleClear() {
    const input = document.querySelector(".search__input") as HTMLInputElement;
    input.value = "";
    input.focus();
    setQ("");
    newSearch("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    newSearch(q);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="search"
        name="q"
        value={q}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={text ? text : "Search here"}
        aria-label="Search"
        className="search__input"
      />
      <div className="search__buttons">
        <button
          className="search__clear"
          type="button"
          title="Clear search field"
          onClick={handleClear}
        >
          <span className="sr-only">Clear search field</span>
          &#x2715;
        </button>
        <button
          onClick={handleSubmit}
          className="search__submit btn-primary"
          type="submit"
          title="Submit search"
        >
          &#x279C;
          <span className="sr-only">search</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
