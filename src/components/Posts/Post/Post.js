import React from "react";
import {Card, CardActions, CardContent, Button, CardMedia, Typography} from '@mui/material'
import {useSelector} from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import useStyles from '../Post/styles';

const Post = ({post}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} image={post.imageFile} title={post.fullName}>
            <div className={classes.overlay}>
                <Typography variant="h8">{post.fullName}</Typography>
                <Typography variant="h10">{post.rating}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {
                }}>
                    <EditIcon/>
                </Button>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {
                }}>
                    {post.countOfRatings}
                </Button>
                {DeleteIcon}
            </CardActions>

        </Card>
    )
}

export default Post;