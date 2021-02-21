import React, {useContext,useEffect} from 'react';
import {PostsContext} from '../context'
const PostsList = () => {
    const { fetchPosts } = useContext(PostsContext);
 
    useEffect(() => {
      fetchPosts();
    }, [fetchPosts])
  
    const { posts } = useContext(PostsContext);
    return (
      <div>
        {
          posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              
            </div>
          ))
        }
        
      </div>
    )
  }
  export default PostsList;