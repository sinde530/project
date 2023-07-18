import React, { useState } from 'react';
import NewPostForm from './NewPostForm';
import Post from './Post';

const Story: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([
    {
      id: 1,
      text: 'I am a Member of Parliament!',
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000',
    },
  ]);

  const handleNewPost = (newPostText: string) => {
    const newPost: IPost = {
      id: posts.length + 1,
      text: newPostText,
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#000',
    };
    setPosts([...posts, newPost]);
  };

  const handlePostChange = (id: number, newText: string) => {
    if (newText.trim() === '') {
      setPosts(posts.filter((post) => post.id !== id));
    } else {
      setPosts(
        posts.map((post) =>
          post.id === id ? { ...post, text: newText } : post,
        ),
      );
    }
  };

  return (
    <div>
      <NewPostForm onNewPost={handleNewPost} />
      {posts.map((post) => (
        <Post key={post.id} post={post} onPostChange={handlePostChange} />
      ))}
    </div>
  );
};

export default Story;
