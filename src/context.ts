import {Post} from './types'
import React,{createContext} from 'react'

  export interface PostsContextData {
    posts: Post[];
    isLoading: boolean;
    fetchPosts: () => void;
    
  }
   
  export const postsContextDefaultValue: PostsContextData = {
    posts: [],
    isLoading: false,
    fetchPosts: () => null,
   
  }
   
  export const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);