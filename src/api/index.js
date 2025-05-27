import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTask = () => api.get("/products");
export const deleteTask = (id) => api.delete(`/products/${id}`);
export const createTask = (data) => api.post("/products", data);
export const getTaskById = (id) => api.get(`/products/${id}`);
export const updateTask = (id, data) => api.put(`/products/${id}`, data);
