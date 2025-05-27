import axios from "axios";

const api = axios.create({
  baseURL: "https://react-code-farm-git-btvntask47-tcson03s-projects.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTask = () => api.get("/products");
export const deleteTask = (id) => api.delete(`/products/${id}`);
export const createTask = (data) => api.post("/products", data);
export const getTaskById = (id) => api.get(`/products/${id}`);
export const updateTask = (id, data) => api.put(`/products/${id}`, data);
