import { useEffect, useState } from "react";
import { postByIdGet, usersGet } from "../Services/services";
import { useParams } from "react-router";

function Post() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const { id } = useParams();

  const fetchPostById = async (id) => {
    try {
      setLoading(true);
      const post = await postByIdGet(id);
      setPost(post);
      const userId = post[0]?.userId;
      if (userId) fetchUser(userId);
    } catch (error) {
      console.error("No post found", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async (userId) => {
    try {
      const usersData = await usersGet();

      const userName = usersData.find((user) => user.id === userId);
      setUsers(userName);
    } catch (error) {}
    console.error("Unknown User");
  };

  useEffect(() => {
    fetchPostById(id);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading data...</h1>
        </div>
      ) : (
        post.map((posts) => {
          return (
            <div key={posts.id} className="post__Container">
              <h2>{posts.title}</h2>
              <p>{posts.body}</p>
              <div>
                <p>Published by {users ? users.name : "Unknown User"}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Post;
