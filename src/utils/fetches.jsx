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
