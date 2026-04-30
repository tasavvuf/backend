import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(response => {
                
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Feed</h1>
      <div className="feed-container">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image_url} alt={post.caption} className="post-image" />
            <div className="post-content">
              <p className="post-caption">{post.caption}</p>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed