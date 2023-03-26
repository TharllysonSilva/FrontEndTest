import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import CommentListPage from "./pages/CommentListPage";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
   
    <Routes>
      <Route path="/"  element={<HomePage/>} />
      <Route path="/posts" element={<PostListPage/>} />
      <Route path="/comments/:postId" element={<CommentListPage/>} />
      <Route path="/users" exact element={<UserListPage/>} />
      <Route path="/users/:userId" element={<UserDetailsPage/>} />
    </Routes>
  
  );
}

export default App;
