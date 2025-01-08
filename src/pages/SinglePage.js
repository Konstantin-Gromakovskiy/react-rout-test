import { useParams, Link} from "react-router";
import { useState, useEffect } from "react";


const SinglePage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
  }, [id]);
  return (
    <>
      <div>
        {post ? <div><h1>{post.title}</h1><p>{post.body}</p></div> : 'Loading...'}
      </div>
      <div>
        <Link to={`/posts/${id}/edit`}>Edit post</Link>
      </div>
    </>
  );
}

export default SinglePage;