import axios from 'axios';

export const getUsers = async () => {
  try {
    return await axios(
      'https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/users/'
    );
  } catch (error) {
    console.log(error);
  }
};

export const setUserFollowers = async (id, body) => {
  try {
    // console.log("BODY =", body);
    return await axios.put(
      `https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/users/${id}`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
