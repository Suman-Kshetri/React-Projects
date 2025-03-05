import React, { useState, useEffect } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Allposts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await appwriteService.getPosts();
        if (fetchedPosts) {
          setPosts(fetchedPosts); // Set the fetched posts in state
        }
      } catch (error) {
        console.error('Error fetching posts:', error); // Handle errors
      }
    };

    fetchPosts(); // Call the function to fetch posts
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard post={post} />
              </div>
            ))
          ) : (
            <div>No posts available.</div> // Show a message if no posts
          )}
        </div>
      </Container>
    </div>
  );
}

export default Allposts;
