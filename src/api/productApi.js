import api from "./index";

export const createProduct = (data) => api.post("/products", data);
export const getAllProduct = () => api.get("/products");
export const getProduct = (id) => api.get(`/products/${id}`);
export const updateProduct = (id, data) => api.patch(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
