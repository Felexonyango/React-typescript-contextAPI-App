import React from 'react';
import FetchPost from './Components/FetchPost';
import {PostsContext} from './context'
import PostsList from './Components/PostList'
const  App=()=>{
	const postsContextValue = FetchPost();
   
	return (
	  <PostsContext.Provider value={postsContextValue} >
		<PostsList />
	  </PostsContext.Provider>
	);
  }
  export default App;