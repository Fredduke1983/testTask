import axios from 'axios';

// const url = new URL(
//   'https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/users/?page=2&limit=2'
// );

axios.defaults.baseURL =
  'https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/users/';

export const getUsers = async (page, limit) => {
  try {
    return await axios(`?page=${page}&limit=${limit}`);
  } catch (error) {
    console.log(error);
  }
};

export const setUserFollowers = async (id, body) => {
  try {
    return await axios.put(id, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};
