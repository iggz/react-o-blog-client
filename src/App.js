import React from 'react';
import './App.css';
import BlogList from "./components/blogList";
import BlogPost from "./components/blogPost";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {

  return (
    <Router>
      <Route path="/" exact component={ BlogList }></Route>
      <Route path="/post/:post_id?" component={ BlogPost } />
    </Router>
  );
}

export default App;