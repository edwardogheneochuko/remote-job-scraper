import axios from "axios";

const BASE_URL = "https://pacificistic-unparochially-buffy.ngrok-free.dev";

export async function fetchJobs(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await axios.get(`${BASE_URL}/jobs?${query}`);
  return res.data; 
}

export async function fetchJobById(id) {
  const res = await axios.get(`${BASE_URL}/jobs/${id}`);
  return res.data; 
}
