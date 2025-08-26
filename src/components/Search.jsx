import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    typeCheched: false,
    type: "",
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.search, this.state.type);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <form
            action=""
            onSubmit={(e) => {
              this.submitForm(e);
            }}
          >
            <input
              className="validate"
              placeholder="search"
              id="search"
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
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
                    cheched={this.statetypeCheched}
                    onChange={this.handleChange}
                    defaultChecked
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
                    cheched={this.statetypeCheched}
                    onChange={this.handleChange}
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
                    cheched={this.statetypeCheched}
                    onChange={this.handleChange}
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
                    cheched={this.statetypeCheched}
                    onChange={this.handleChange}
                  />
                  <span>Episode</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { Search };
