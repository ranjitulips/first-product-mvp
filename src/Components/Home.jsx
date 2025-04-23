import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleGoHome() {
    navigate("/products");
  }

  return (
    <>
      <button onClick={handleGoHome}>Go to Products List</button>
      <h2>Home </h2>
    </>
  );
}

export default Home;
