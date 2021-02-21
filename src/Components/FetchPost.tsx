import React,{useState,useEffect} from 'react';
import {Post} from '../types'
import Axios from 'axios'
import {PostsContextData} from '../context'

function FetchPost(): PostsContextData {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
		fetchPosts()
	},[setPosts])
		const fetchPosts = async () => {
			const response: any = await Axios('https://jsonplaceholder.typicode.com/posts')
			setPosts(response.data);
			
			setIsLoading(false);
		}
	 
	
   
	 return {
        posts,
        isLoading,
        fetchPosts,
        
      }
  } 
  export default  FetchPost;