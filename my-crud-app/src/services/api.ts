import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3001",
});
export const getBooks = () => api.get("/Books");
export const getBookById = (id: string) => api.get(`/Books/${id}`);
export const createBook = (Book: any) => api.post("/Books", Book);
export const updateBook = (id: string, Book: any) =>
  api.put(`/Books/${id}`, Book);
export const deleteBook = (id: string) => api.delete(`/Books/${id}`);