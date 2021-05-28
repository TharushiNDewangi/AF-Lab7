import React, {useEffect, useState} from 'react';
import PostListItem from "./PostListItem";
import Post from "./Post";


export default function PostFunctional (props) {
    const [post, setPost] = useState(null);
    useEffect(() => {
        console.log('Mount and update from the effect hook');
        return () => console.log("Unmount from the effect hook");
    });
    const {posts} =props;
    return <div>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>description</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {posts.map(post =>{
                return <PostListItem key ={post.id.toString() } post={post}
                selectPost={post=>setPost(post)}/>
            })}
            </tbody>
        </table>
        <div>
            {post ? <Post post={post}/>:''}
        </div>
    </div>

}