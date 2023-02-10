import { Component } from "react";
import { Alert, ListGroup, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class NewReleases extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    showErrorMessage: "",
  };

  fetchMovies = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?apikey=b401938f&type=series&s=the walking dead"
      );
      if (res.ok) {
        const data = await res.json();
        if (data.Response === "False") {
          this.setState({
            isLoading: false,
            hasError: true,
            showErrorMessage: `C'è stato un errore durante il caricamento dei contenuti. Errore: ${res.status}`,
          });
        } else {
          this.setState({ movies: data.Search.splice(0, 6), isLoading: false });
        }
        /* console.log(this.state.movies); */
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          showErrorMessage: `C'è stato un errore durante il caricamento dei contenuti. Errore: ${res.status}`,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        showErrorMessage: `C'è stato un errore durante il caricamento dei contenuti: ${error}`,
      });
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
        <h4 className="mt-4">New Releases</h4>
        <Row xs={1} md={2} lg={4} xl={6}>
          {this.state.hasError && (
            <Alert className="w-100 text-center" variant="danger">
              {this.state.showErrorMessage}
            </Alert>
          )}
          {this.state.isLoading && (
            <div className="text-center m-auto">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {this.state.movies.length === 0 &&
            !this.state.isLoading &&
            !this.state.hasError && (
              <ListGroup>
                It seems there are no trending movies right now.
              </ListGroup>
            )}
          {this.state.movies.map((movies) => (
            <SingleMovie SingleMovie={movies} key={movies.imdbID} />
          ))}
        </Row>
      </>
    );
  }
}
export default NewReleases;
