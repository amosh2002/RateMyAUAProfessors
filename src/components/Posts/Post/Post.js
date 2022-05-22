import React from "react";
import {Card, CardActions, CardContent, Button, CardMedia, Typography} from '@mui/material'
// import DeleteIcon from '@mui/icons-material/Delete'
//import EditIcon from '@mui/icons-material/Edit'
import CourseList from "./CourseContainers/CourseList";
import useStyles from '../Post/styles';

const Post = ({post, setCurrentId}) => {
    const styles = useStyles();

    return (
        // <div>
        //     <p>{post.fullName}</p>
        //     <p>{post.rating}</p>
        //     <p>{post.countOfRatings}</p>
        //     <img className={classes.media} src={post.imageFile} alt="photo"/>
        //     <CardActions className={classes.cardActions}>
        //         <Button size="small" color="primary" onClick={() => {
        //         }}>
        //             Edit
        //         </Button>
        //         <Button size="small" color="secondary" onClick={() => {
        //         }}>
        //             Delete
        //         </Button>
        //
        //     </CardActions>
        // </div>

        <li className={styles.parentLi}>
            <div>
                <img src={post.imageFile} alt="Image Not Found" className={styles.img}/>
            </div>
            <div id={styles.texts}>
                <div className={styles.name}>
                    {post.fullName}
                </div>
                <CourseList courses={post.courses}/>
                <div className={styles.rating}>
                    {defineColor(post.rating)}
                </div>
                <div className={styles.ratingCount}>
                    number of ratings: {post.countOfRatings}
                </div>
            </div>
            <CardActions className={styles.cardActions}>
                <Button size="small" color="primary" onClick={() => setCurrentId(post._id)
                }>
                    Edit
                </Button>
                <Button size="small" color="secondary" onClick={() => {
                }}>
                    Delete
                </Button>

            </CardActions>

        </li>

    )

    function defineColor(rating) {
        if (rating >= 8) {
            return (
                <span className={styles.above8}>{rating}</span>
            )
        } else if (rating >= 5) {
            return (
                <span className={styles.above5}>{rating}</span>
            )
        } else if (rating >= 0) {
            return (
                <span className={styles.above0}>{rating}</span>
            )
        }
    }
}


export default Post;