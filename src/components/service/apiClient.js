import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "production"
      ? process.env.REACT_APP_SERVER_LIVE_URL
      : process.env.REACT_APP_SERVER_STAGING_URL,
  withCredentials: true,
});

// get request
const getRequest = async (endpoint) => {
  try {
    let response = await axiosInstance.get(`${endpoint}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// post request

const postRequest = async (endpoint, body) => {
  try {
    let options = {
      method: "post",
      Headers: {
        "Content-Type": "application/json",
      },
      url: endpoint,
      data: body,
      withCredentials: true,
    };
    return await axiosInstance(options);
  } catch (error) {
    console.error(error);
  }
};
//put request
const putRequest = async (endpoint, body) => {
  try {
    let options = {
      method: "put",
      Headers: {
        "Content-Type": "application/json",
      },
      url: endpoint,
      data: body,
      withCredentials: true,
    };
    return await axiosInstance(options);
  } catch (error) {
    console.error(error);
  }
};
//post form data
const postFormData = async (endpoint, body) => {
  try {
    return await axiosInstance({
      method: "post",
      url: endpoint,
      data: body,
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.error(error);
  }
};

export { getRequest, postRequest, postFormData,putRequest, axiosInstance };
