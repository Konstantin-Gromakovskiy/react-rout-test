import { useState, useEffect } from "react";
import { Link } from "react-router";

const Blogpage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])


  return (
    <div>
      <h1>Blog Page</h1>
      <Link to='/posts/new'>Create a new post</Link>
      <ul>
        {posts ? posts.map(post => <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>) : 'Loading...'}
      </ul>
    </div>
  )

}

export default Blogpage