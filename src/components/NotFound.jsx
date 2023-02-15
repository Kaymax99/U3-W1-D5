import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const goBack = useNavigate();

  return (
    <>
      <div className="text-center mt-5">
        <h2>404 - Not Found</h2>
        <button
          onClick={() => {
            goBack("/");
          }}
        >
          Back to Homepage
        </button>
      </div>
      ;
    </>
  );
};

export default NotFound;
