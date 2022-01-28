import axios from "axios";

const axiosInstance = axios.create({
  baseURL:"https://stagingapi.workerx.co/api/v1/en/"
});

const returnToken=()=>{
return "Bearer"+" "+localStorage.getItem("token");
}
// get request
const getRequest = async (endpoint) => {
  let getoken=await returnToken();
  try {
    let options = {
      method: "get",
      Headers: {
        "Authorization":getoken,
        "Content-Type": "application/json",
      },
      url: endpoint
      // withCredentials: true,
    };
    return await axiosInstance(options);
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
//
const postRequestToken = async (endpoint, body) => {
  try {
    let options = {
      method: "post",
      Headers: {
        "Authorization":"Bearer"+" "+localStorage.getItem("token"),
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
//Authorization
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
