import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-caio.azurewebsites.net/swagger', // Base URL da API
});

export const getTargets = () => api.get('/targets');
export const getTargetById = (id: number) => api.get(`/targets/${id}`);
export const createTarget = (target: any) => api.post('/targets', target);
export const updateTarget = (id: number, target: any) => api.put(`/targets/${id}`, target);
export const deleteTarget = (id: number) => api.delete(`/targets/${id}`);

export const getTodos = () => api.get('/todos');
export const getTodoById = (id: number) => api.get(`/todos/${id}`);
export const createTodo = (todo: any) => api.post('/todos', todo);
export const updateTodo = (id: number, todo: any) => api.put(`/todos/${id}`, todo);
export const deleteTodo = (id: number) => api.delete(`/todos/${id}`);

export default api;
