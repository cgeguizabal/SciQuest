import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navBar-Container">
        <div className="navBar__content">
          <ul className="navBar-List">
            <li>
              <Link to="/">
                <img src="/public/Logo.png" alt="" className="logo__navaBar" />
              </Link>
            </li>
            <li>
              <Link className="navBar__Element" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navBar__Element" to="/Users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
