import { useState, useEffect } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  /* console.log(params.movieId.toString()); */

  const [movie, setMovie] = useState({});
  const [isloading, setIsLoading] = useState(true);

  const fetchMovie = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?apikey=b401938f&i=" + params.movieId.toString()
      );
      if (res.ok) {
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
        /* console.log(movie.Response); */
      } else {
        alert("There was an error loading the movie");
      }
    } catch (error) {
      alert("ERROR: Could not fetch movie details.");
    }
  };
  useEffect(() => {
    fetchMovie();
    /* console.log(movie); */
  }, []);

  useEffect(() => {
    if (movie.Response === "False") {
      navigate("/not_found");
    }
  }, [movie.Response]);

  return (
    <>
      {isloading ? (
        <Container>
          <Row className="justify-content-center">
            <Spinner animation="border" variant="primary" />
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="justify-content-center">
            <Col xs={10}>
              <h1 className="text-center text-light my-3">{movie.Title}</h1>
              <Card>
                <Row>
                  <Col xs={7}>
                    <Card.Img variant="top" src={movie.Poster} />
                  </Col>
                  <Col xs={5}>
                    <Card.Body className="mt-3">
                      <Card.Text>
                        <b>Plot:</b> {movie.Plot}
                      </Card.Text>
                      <Card.Text>
                        <b> Genre:</b> {movie.Genre}
                      </Card.Text>
                      <Card.Text>
                        <b> Lead Actors:</b> {movie.Actors}
                      </Card.Text>
                      <Card.Text>
                        <b> Relased:</b> {movie.Year}
                      </Card.Text>
                      <Card.Text>
                        <b> IMDB Rating:</b> {movie.imdbRating}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default MovieDetails;
