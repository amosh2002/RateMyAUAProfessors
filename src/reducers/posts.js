export default (posts = [], action) => {
    if (action.type === 'CREATE') {
        return posts;
    }
    else if (action.type === 'FETCH_ALL') {
        return action.payload;
    }
    else {
        return posts;
    }
}