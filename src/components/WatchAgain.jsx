import { Component } from "react";

class WatchAgain extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?apikey=b401938f&s=lord of the rings"
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        alert("Impossibile effettuare il fetch");
      }
    } catch (error) {
      alert("Errore: " + error);
    }
  };
  componentDidMount = () => {
    console.log("Effettuo il mount");
    this.fetchMovies();
  };

  render() {
    console.log("Effettuo il render");
    return (
      <>
        <h5>Watch it Again:</h5>
        {/* <CommentList array={this.state.comments} />
          <AddComment id={this.props.id} /> */}
      </>
    );
  }
}
export default WatchAgain;
