import axios from "axios";

axios.defaults.baseURL = "https://644820087bb84f5a3e5314c6.mockapi.io";

export const fetchUsers = async (page = 1, filter) => {
  let url;

  if (filter === "Follow") {
    url = `/users?following=false&page=${page}&limit=3`;
  } else if (filter === "Following") {
    url = `/users?following=true&page=${page}&limit=3`;
  } else if (filter === "All") {
    url = `/users?page=${page}&limit=3`;
  }

  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

export const fetchTotalUsers = async (filter) => {
  let url;

  if (filter === "Follow") {
    url = `/users?following=false`;
  } else if (filter === "Following") {
    url = `/users?following=true`;
  } else if (filter === "All") {
    url = `/users`;
  }

  const response = await axios.get(url);
  console.log(response.data.length);
  return response.data.length;
};

export const updateUser = async (id, following, followers) => {
  const response = await axios.put(`/users/${id}`, { following, followers });
  return response.data;
};
