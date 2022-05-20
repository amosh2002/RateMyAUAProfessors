import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (error) {
        console.log(error.message);
    }


}

export const createProfessor = (professor) => async (dispatch) => {
    try {
        const { data } = await api.createProfessor(professor);
        dispatch({ type: 'CREATE', payload: data })
    }
    catch (error) {
        console.log(error);
    }
}