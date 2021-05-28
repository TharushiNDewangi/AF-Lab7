import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PostsHolder from './components/PostsHolder';
import UserContext from "./components/UserContext";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user:''
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                user:{
                      name:'admin'
                }
            });
        },5000);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path="/">
                    <UserContext.Provider value={this.state.user}>
                    <PostsHolder/>
                    </UserContext.Provider>
                </Route>

            </Switch>
        </Router>
    }
}
