import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/posts">Lista Posts</Link>
      <Link to="/comments/1">Lista Comentários de um Post</Link>
      <Link to="/users">Lista Usuários</Link>
      <Link to="/users/1">Detalhes de um Usuário</Link>
    </div>
  );
}

export default HomePage;
