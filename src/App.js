import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import CommentListPage from "./pages/CommentListPage";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/posts" component={PostListPage} />
      <Route path="/comments/:postId" component={CommentListPage} />
      <Route path="/users" exact component={UserListPage} />
      <Route path="/users/:userId" component={UserDetailsPage} />
    </Switch>
  );
}

export default App;
