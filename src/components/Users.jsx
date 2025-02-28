import { useEffect, useState } from "react";
import { usersGet } from "../Services/services";
import { Link } from "react-router";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await usersGet();
      setUsers(response);
    } catch (error) {
      console.error("Users can't be found");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="table__wrapper">
        <table className="table__Container">
          <thead>
            <tr className="header__Row-Container">
              <th className="table__header--text">Name</th>
              <th className="table__header--text">Email</th>
              <th className="table__header--text">User Name</th>
              <th className="table__header--text">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">
                  <h1>Loading data...</h1>
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="userData" data-label="Name">
                    {user.name}
                  </td>
                  <td className="userData" data-label="Email">
                    {user.email}
                  </td>
                  <td className="userData" data-label="User Name">
                    {user.username}
                  </td>
                  <td className="table__btn--container">
                    <Link to={`/Post/${user.id}`} className="table__btn">
                      Check User's Posts
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
