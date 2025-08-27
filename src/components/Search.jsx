import React, { useState } from "react";

const Search = (props) => {
  const { handleSearch = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const submitForm = (e) => {
    e.preventDefault();
    handleSearch(search, type);
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="row">
      <div className="input-field">
        <form
          action=""
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <input
            className="validate"
            placeholder="search"
            id="search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn waves-effect waves-light search-btn">
            Search
          </button>
          <div className="movie-type row">
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value="all"
                  onChange={handleChange}
                  checked={type === "all"}
                />
                <span>All</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value="movie"
                  onChange={handleChange}
                  checked={type === "movie"}
                />
                <span>Movie</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value="series"
                  onChange={handleChange}
                  checked={type === "series"}
                />
                <span>Series</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value="episode"
                  onChange={handleChange}
                  checked={type === "episode"}
                />
                <span>Episode</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Search };
