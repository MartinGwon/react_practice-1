import React from "react";
import axios from "axios";
import Movies from "./Movie";
import "./App.css";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  async componentWillMount() {
    const movies = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies.data.data.movies, isLoading: false });
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        <h2>
          {isLoading ? (
            <div class="loader">
              <span class="loader__text">Loading...</span>
            </div>
          ) : (
            movies.map(potato => {
              return (
                <div class="movies">
                  <Movies
                    key={potato.id}
                    id={potato.id}
                    genres={potato.genres}
                    title={potato.title}
                    summary={potato.summary}
                    poster={potato.medium_cover_image}
                    year={potato.year}
                  />
                </div>
              );
            })
          )}
        </h2>
      </section>
    );
  }
}

export default App;
