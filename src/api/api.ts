import { error } from '../services/error-service';

const get = async (url: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    });
    return response.json();
  } catch (e) {
    error(e);
    return new Error("Something went wrong");
  }
};


const api = {
  get
}

export const getApplications = async () => api.get('applications');

export const getMetrics = async () => api.get('metrics');

