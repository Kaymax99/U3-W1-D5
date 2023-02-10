import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class WatchAgain extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?apikey=b401938f&type=movie&s=lord of the rings"
      );
      if (res.ok) {
        const data = await res.json();
        this.setState({
          movies: data.Search.splice(0, 6),
        });
      } else {
        alert(
          "Impossibile ricevere dati nella sezione Watch Again, aggiorna la pagina"
        );
      }
    } catch (error) {
      alert("Errore fatale nella sezione Watch Again: " + error);
    }
  };
  componentDidMount = () => {
    /* console.log("Effettuo il mount"); */
    this.fetchMovies();
  };

  render() {
    /* console.log("Effettuo il render"); */
    return (
      <>
        <h4 className="mt-4">Watch it Again:</h4>
        <Row xs={1} md={2} lg={4} xl={6}>
          {this.state.movies.map((movies) => (
            <SingleMovie SingleMovie={movies} key={movies.imdbID} />
          ))}
        </Row>
      </>
    );
  }
}
export default WatchAgain;
