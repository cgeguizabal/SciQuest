import axios from "axios";

const usersGet = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.error("No user found", error);
    throw error;
  }
};

const postByIdGet = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    return response.data;
  } catch (error) {
    console.error(`This post doesn't exist`, error);
    throw error;
  }
};

const commentByIdGet = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response.data;
  } catch (error) {
    console.error(`None Comments have been found`, error);
    throw error;
  }
};

export { usersGet, postByIdGet, commentByIdGet };
