import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createProfessor = (newProfessor) => axios.post(url, newProfessor);
export const updateProfessor = (id, updatedProfessor) => axios.patch(url + "/" + id, updatedProfessor);
export const deleteProfessor = (id) => axios.delete(url + "/" + id);