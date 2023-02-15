import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mt-5 text-light">
        <h1>Welcome!</h1>
        <p className="fs-3">
          Welcome to Dogeflix! Whatever you may be looking for, we have it.
        </p>
        <button
          className="fs-4"
          onClick={() => {
            navigate("/tv-shows");
          }}
        >
          Get started now
        </button>
      </div>
    </>
  );
};

export default Home;
