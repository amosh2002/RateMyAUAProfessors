import Post from './Post/Post'
import React from "react";
import { Grid, CircularProgress } from '@mui/material'
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing='3'>
                {posts.map((post) => (
                    <Grid key={post._id} item>
                        <Post post={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;