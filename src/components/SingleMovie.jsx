import { Component } from "react";
import { Col } from "react-bootstrap";

class SingleMovie extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Col className="text-center mt-3">
          <img
            src={this.props.SingleMovie.Poster}
            alt={this.props.SingleMovie.Title}
            style={{ height: "100%" }}
            className="img-fluid"
          ></img>
        </Col>
      </>
    );
  }
}

export default SingleMovie;
