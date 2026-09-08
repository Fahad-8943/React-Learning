import apiService from "../api/apiService";

// api call for add resume , called by steps

export const addResumeAPI = async (reqBody) => {
  return await apiService("POST", "/allResume", reqBody);
};

// api call for getting  single resume , called by viewResume when page loaded
export const getSingleResume = async (id) => {
  return await apiService("GET", `allResume/${id}`, {});
};

// API call for stroing data in to the download History
export const addDownloadHistory = async (reqBody) => {
  return await apiService("POST", "/downloadHistory", reqBody);
};

// api call for download resume
export const editResumeApi = async (id, reqBody) => {
  return await apiService("PUT", `/allResume/${id}`, reqBody);
};
