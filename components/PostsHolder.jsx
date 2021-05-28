import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Posts from './Posts';
import AddPost from "./AddPost";
import PostFunctional from './PostFunctional';
const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    }, {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
];
export default class PostsHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    addNewPost({name, description}) {
        posts.push({id: posts.length + 1, name, description});
    }

    render() {
        return <Router>
            <switch>
                <Route exact path="/">
                    <PostFunctional posts={posts}/>
                </Route>
                <Route exact path="/posts/add">
                    <AddPost save={this.addNewPost}/>
                </Route>

            </switch>
            hjjk
            <Link to="/posts/add">Add</Link>
        </Router>
    }

}