import React from "react";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Post = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts);

    return (
        <h1>Mgo Nazaryan</h1>
    )
}

export default Post;