import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleGoHome() {
    navigate("/course");
  }

  return (
    <>
      <button onClick={handleGoHome}>Go to Course</button>
      <h2>Home </h2>
    </>
  );
}

export default Home;
