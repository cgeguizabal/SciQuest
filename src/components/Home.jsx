import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="welcome__container">
        <img src="/public/Isologo.png" alt="logo" className="welcome__logo" />
        <p className="welcome__paragraph">
          Welcome to SciQuest, your go-to platform for exploring groundbreaking
          discoveries from scientists around the world. Stay informed and
          up-to-date on the latest advancements in science, and expand your
          knowledge with the discoveries shaping our future.
        </p>

        <Link to="/Users" className="welcome__btn">
          Check Scientists
        </Link>
      </div>
    </>
  );
}

export default Home;
