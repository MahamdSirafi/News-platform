import axios from 'axios';
import { cuteToast } from './cute/cute-alert';

export const postNews = async (body) => {
  console.log(body.text);
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1.0.0/news/',
      data: body,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (res.data.status === 'success') {
      cuteToast({
        type: 'success',
        title: 'Success',
        message: `The news has been posted`,
        timer: 1500,
      }).then(() => {
        location.assign('/');
      });
    }
  } catch (err) {
    cuteToast({
      type: 'error',
      title: 'Error',
      message: err,
      timer: 2500,
    });
  }
};
